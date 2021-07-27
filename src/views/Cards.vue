<template>
  <div class="invoice-list">
    <div class="test-style"></div>
      <InvoiceItemCards
        v-for="(invoice, index) of sortedFilteredInvoices"
        :invoice="invoice"
        :key="invoice"

        v-bind:index="index"
      />
  </div>
</template>

<script>
import InvoiceItemCards from '@/components/InvoiceItemCards.vue';

export default {
  name: 'Cards',
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
    InvoiceItemCards,
  },
};
</script>

<style lang="scss" scoped>
  .invoice-list {
    display: flex;
    flex-flow: row wrap;

    :nth-child(3n) {
      margin-right: 0;
    }
  }

</style>
