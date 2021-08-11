<template>
  <div id="app">
    <AddInvoiceModal
        v-show="showAddInvoiceModal"
        @close-add-modal="showAddInvoiceModal = !showAddInvoiceModal"
    />
    <section class="header">
      <div class="container"><h1>Vue invoice</h1></div>
    </section>
    <section class="main">
      <div class="left-column">
        <button
          class="add-button"
          @click="showAddInvoiceModal = !showAddInvoiceModal">
        <img src="@/assets/plus.svg" alt="">Добавить</button>
        <div class="filters">
          <div class="filters-heading">
            Filters
          </div>
          <form
            action=""
            class="filters-form"
            @submit.prevent>
            <label for="filter">Invoice number</label>
            <input
              type="text"
              name="filter"
              id="filter"
              placeholder="Enter value"
              v-model="filterValue"
              @change="setFilterValue(filterValue)">
          </form>
        </div>
      </div>
      <div class="right-column">
        <div class="view-options-bar">
          <div class="sorting-options-bar">
            <div
              class="sorting-options-select"
              id="sorting-options-select"
              @click="showSortingOptions = !showSortingOptions">
              <div
                class="sorting-options-select-text"
                id="sorting-options-select-text">Sorting</div>
              <img
              src="@/assets/arrow.svg"
              class="select-arrow"
              v-bind:class="{opened: showSortingOptions}" alt="">
            </div>
            <div
              class="sorting-options-container"
              v-bind:class="{opened: showSortingOptions}">
              <div
                class="sorting-options"
                @click="callSetSorting('number-ascending')">
                Sort by Invoice number: ascending</div>
              <div
                class="sorting-options"
                @click="callSetSorting('number-descending')">
                Sort by Invoice number: descending</div>
            </div>
          </div>
          <div class="view-buttons-wrapper">
            <button
              class="cards-view-button"
              v-bind:class="{pressed: cardsView}"
              @click="switchToCardsView()"              >
              <img src="@/assets/cards-view.svg" alt="">
            </button>
            <button
              class="table-view-button"
              v-bind:class="{pressed: !cardsView}"
              @click="switchToTableView()">
              <img src="@/assets/table-view.svg" alt="">
            </button>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import AddInvoiceModal from '@/components/AddInvoiceModal.vue';

export default {
  name: 'Home',
  data() {
    return {
      showSortingOptions: false,
      cardsView: true,
      showAddInvoiceModal: false,
      filterValue: null,
    };
  },
  methods: {
    ...mapMutations(['setFilterValue', 'setSorting']),
    switchToCardsView() {
      this.$router.push({ path: '/cards' });
      this.cardsView = true;
    },
    switchToTableView() {
      this.$router.push({ path: '/table' });
      this.cardsView = false;
    },
    callSetSorting(sortingOption) {
      this.setSorting(sortingOption);
      this.showSortingOptions = !this.showSortingOptions;

      if (sortingOption === 'number-ascending') {
        document.getElementById('sorting-options-select-text').innerText = 'Invoice number: asc';
      } else if (sortingOption === 'number-descending') {
        document.getElementById('sorting-options-select-text').innerText = 'Invoice number: desc';
      }
    },
  },
  components: {
    AddInvoiceModal,
  },
};
</script>

<style lang="scss" scoped>
  .app {
    height: 100vh;;
  }

  .container {
    width: 1220px;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100px;

    color: #FFFFFF;

    background: linear-gradient(267.21deg, #900793 0.16%,
    rgba(134, 4, 137, 0.785707) 0.16%,
    rgba(159, 12, 162, 0.762269) 43.22%,
    rgba(5, 1, 190, 0.734375) 98.12%,
    rgba(0, 28, 126, 0.619792) 100.15%,
    rgba(6, 77, 142, 0.447917) 102.03%,
    rgba(1, 0, 60, 0) 102.73%);

    h1 {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .main {
    min-height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: start;

    padding-top: 30px;

    background: #F8F8F8;
  }

  .left-column {
    width: 280px;

    margin-right: 30px;
  }

  .add-button {
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;

    color: #FFFFFF;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;

    background: #4943CD;
    box-shadow: 0px 4px 4px #EBEBEB;
    border: none;
    border-radius: 2px;

    img {
      margin-right: 15px;
    }
  }

  .filters {
    width: 100%;
    height: 130px;

    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(179, 178, 178, 0.25)
  }

  .filters-heading {
    height: 40px;

    padding: 15px 37px 0 37px;

    font-weight: bold;
    font-size: 16px;

    border-bottom: 1px solid #F8F8F8;
  }

  .filters-form {
    padding: 17px 30px;

    label {
      font-weight: 500;
      font-size: 14px;
    }

    input {
      width: 100%;
      height: 30px;

      font-size: 14px;

      padding: 5px 15px;

      border: 1px solid #D9D9D9;
      border-radius: 2px;

        ::placeholder {
        font-size: 14px;
        color: #A5A5A5;
      }
    }
  }

  .right-column {
    width: 912px;
  }

  .view-options-bar {
    display: flex;

    width: 100%;
    height: 70px;

    margin-bottom: 20px;
  }

  .sorting-options-bar {
    z-index: 100;

    width: 810px;
    height: 100%;

    padding: 20px 17px;

    background: #FFFFFF;
    box-shadow: 0px 4px 12px #E7E7E7;
    border-radius: 3px;
  }

  .sorting-options-select {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 223px;
    height: 30px;

    padding: 5px 10px;

    font-weight: bold;
    font-size: 16px;

    border: 1px solid #E0E5E6;
    box-sizing: border-box;

  }

  .select-arrow {
    transform: rotate(90deg);
    transition-duration: 200ms;
  }

  .sorting-options-container {
    display: none;
  }

  .opened {
    display: block;
    transform: rotate(0deg);
  }

  .sorting-options {
    width: 223px;
    height: 30px;

    padding: 5px 10px;

    font-weight: normal;
    font-size: 12px;

    border: 1px solid #E0E5E6;
    border-top: none;
    box-sizing: border-box;

    background: #FFFFFF;
  }

  .view-buttons-wrapper {
    width: 102px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .cards-view-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    background: #FFFFFF;

    border: 1px solid #647A8C;
    border-radius: 4px 0 0 4px;
  }

  .table-view-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    background: #FFFFFF;

    border: 1px solid #647A8C;
    border-radius: 0 4px 4px 0;
  }

  .pressed {
    background: #E5E9EC;
  }

</style>
