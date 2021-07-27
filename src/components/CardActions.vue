<template>
  <div class="card-actions">
      <div class="card-actions-line">
        <div class="card-action-icon"><img src="@/assets/pencil.svg" alt=""></div>
        <div class="card-action-caption">редактировать</div>
      </div>
      <div
        class="card-actions-line"
        v-on:click="callDeleteInvoice">
        <div class="card-action-icon"><img src="@/assets/close.svg" alt=""></div>
        <div class="card-action-caption">удалить</div>
      </div>
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
  },
  props: {
    invoice: Object,
  },
};
</script>

<style lang="scss" scoped>
  .card-actions {
    position: absolute;
    top: 20px;
    right: 10px;

    width: 149px;
    height: 55px;

    padding: 9px 10px;

    font-size: 14px;
    text-align: left;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
    border-radius: 2px;
  }

  .card-actions-line {
    display: flex;
    align-items: center;
  }

  .card-action-icon {
    width: 14px;
    height: 14px;

    margin-right: 5px;
  }
</style>
