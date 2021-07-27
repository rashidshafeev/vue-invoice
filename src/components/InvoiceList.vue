<template>
  <div class="invoice-list">
      <InvoiceItem
        v-for="(invoice, index) of invoices"
        :invoice="invoice"
        :key="invoice"

        v-bind:index="index"
      />
  </div>
</template>

<script>
import InvoiceItem from '@/components/InvoiceItem.vue';

export default {
  props: ['invoices'],
  components: {
    InvoiceItem,
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
