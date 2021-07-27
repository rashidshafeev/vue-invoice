<template>
  <div class="table-actions">
    <div><img src="@/assets/pen.svg" alt=""></div>
    <div @click="callDeleteInvoice"><img src="@/assets/bin.svg" alt=""></div>
    <div
      class="kebab-icon"
      @click="closeActions"><img src="@/assets/grey-kebab.svg" alt=""></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['deleteInvoice']),
    callDeleteInvoice() {
      this.deleteInvoice(this.invoice.id);
    },
    closeActions() {
      this.$emit('close-table-actions');
    },
  },
  props: {
    invoice: Object,
  },
};
</script>

<style lang="scss" scoped>
  .table-actions {
    position: absolute;
    right: 35px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 102px;
    height: 30px;

    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 3px;
  }

  .kebab-icon {
    padding: 5px 5px;
  }
</style>
