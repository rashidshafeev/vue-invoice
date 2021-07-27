<template>
  <div class="invoice-list">
    <div class="table-headers">
      <div class="id-column-header">ID</div>
      <div class="invoice-number-column-header">Номер накладной</div>
      <div class="order-type-column-header">Тип заказа</div>
      <div class="creation-date-column-header">Дата создания</div>
      <div class="controls-column-header"></div>
    </div>
      <InvoiceItemTable
        v-for="(invoice, index) of sortedFilteredInvoices"
        :invoice="invoice"
        :key="invoice"

        v-bind:index="index"
      />
  </div>
</template>

<script>
import InvoiceItemTable from '@/components/InvoiceItemTable.vue';

export default {
  name: 'Table',
  computed: {
    allInvoices() {
      return this.$store.getters.allInvoices;
    },
    filteredInvoices() {
      return this.$store.getters.filteredInvoices;
    },
    sortedFilteredInvoices() {
      return this.$store.getters.sortedFilteredInvoices;
    },
  },
  components: {
    InvoiceItemTable,
  },
};
</script>

<style lang="scss" scoped>
  .table-headers {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 40px;
  }

  .id-column-header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 134px;
    height: 100%;

    font-weight: bold;
    font-size: 16px;

    background: #E6E6E6;
  }

  .invoice-number-column-header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 244px;
    height: 100%;

    font-weight: bold;
    font-size: 14px;

    background: #E6E6E6;
  }

  .order-type-column-header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 189px;
    height: 100%;

    font-weight: bold;
    font-size: 16px;

    background: #E6E6E6;
  }

  .creation-date-column-header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 268px;
    height: 100%;

    font-weight: bold;
    font-size: 16px;

    background: #E6E6E6;
  }

  .controls-column-header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 65px;
    height: 100%;

    font-weight: bold;
    font-size: 16px;

    background: #E6E6E6;
  }

</style>
