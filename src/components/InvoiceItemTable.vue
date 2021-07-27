<template>
  <div class="table-row">
    <div class="id-column">{{ invoice.id }}</div>
    <div class="invoice-number-column">{{ invoice.number }}</div>
    <div class="order-type-column"></div>
    <div class="creation-date-column"></div>
    <div class="controls-column">
    <img
      src="@/assets/grey-kebab.svg"
      @click="showActions = !showActions"
       alt="">
    <TableActions
    v-show="showActions"
    v-bind:invoice="invoice"
    @close-table-actions="showActions = !showActions"/>
    </div>
  </div>
</template>

<script>
import TableActions from '@/components/TableActions.vue';

export default {
  data() {
    return {
      showActions: false,
    };
  },
  props: {
    invoice: {
      type: Object,
      required: true,
    },
  },
  components: {
    TableActions,
  },
};
</script>

<style lang="scss" scoped>
   .table-row {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 40px;

    background: #FFFFFF;

    border-bottom: 1px solid #E6E6E6;;
  }

  .id-column, .invoice-number-column,
  .order-type-column, .creation-date-column,
  .controls-column {
    display: flex;
    justify-content: start;
    align-items: center;

    height: 100%;

    padding: 0 20px;

    font-weight: normal;
    font-size: 16px;

    background: transparent;
  }

  .id-column {
    width: 134px;
  }

  .invoice-number-column {
    width: 244px;
  }

  .order-type-column {
    width: 189px;
  }

  .creation-date-column {
    width: 268px;
  }

  .controls-column {
    justify-content: center;
    width: 65px;

    img {
      position: relative;
      padding: 5px 5px;
    }
  }
</style>
