<template>
    <InvoiceList
      v-bind:invoices="allInvoices"
    />
</template>

<script>
import InvoiceList from '@/components/InvoiceList.vue';

export default {
  name: 'Home',
  computed: {
    allInvoices() {
      return this.$store.getters.allInvoices;
    },
  },
  components: {
    InvoiceList,
  },
};
</script>
