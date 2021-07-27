<template>
  <div id="app">
    <AddInvoiceModal
        v-show="showAddInvoiceModal"
        @close="showAddInvoiceModal = !showAddInvoiceModal"
    />
    <section class="header">
      <div class="container"><h1>Тестовое задание</h1></div>
    </section>
    <section class="main">
      <div class="left-column">
        <button
          class="add-button"
          @click="showAddInvoiceModal = !showAddInvoiceModal">
        Добавить</button>
        <div class="filters"></div>
      </div>
      <div class="right-column">
        <div class="view-options-bar">
          <div class="sorting-options-bar"></div>
          <div class="view-buttons-wrapper">
            <button
              class="cards-view-button"
              @click="switchToCardsView()">
              <img src="@/assets/cards-view.svg" alt="">
            </button>
            <button
              class="table-view-button"
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
import AddInvoiceModal from '@/components/AddInvoiceModal.vue';

export default {
  name: 'Home',
  data() {
    return {
      showAddInvoiceModal: false,
    };
  },
  methods: {
    switchToCardsView() {
      this.$router.push({ path: '/cards' });
    },
    switchToTableView() {
      this.$router.push({ path: '/table' });
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

    height: 261px;

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
    height: calc(100vh - 261px);
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

    margin-bottom: 20px;

    background: #4943CD;
    box-shadow: 0px 4px 4px #EBEBEB;
    border: none;
    border-radius: 2px;
  }

  .filters {
    width: 100%;
    height: 130px;

    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(179, 178, 178, 0.25)
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
    width: 810px;
    height: 100%;

    background: #FFFFFF;
    box-shadow: 0px 4px 12px #E7E7E7;
    border-radius: 3px;
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

</style>
