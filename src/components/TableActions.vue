<template>
  <div class="table-actions">
    <div class="pen-icon-bg">
      <button class="pen-icon"><img src="@/assets/pen.svg" alt=""></button>
    </div>
    <div class="bin-icon-bg">
    <button
      class="bin-icon"
      @click="callDeleteInvoice">
      <img  src="@/assets/bin.svg" alt="">
    </button>
    </div>
    <button
      class="kebab-icon"
      @click="closeActions"><img src="@/assets/grey-kebab.svg" alt="">
    </button>
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

  .pen-icon-bg, .bin-icon-bg {
    background: transparent;

    border-radius: 15px;

    &:hover {
      background: #E5E9EC;
    }
  }

  .pen-icon, .bin-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    opacity: 0.5;

    border: none;
    border-radius: 15px;

    background: transparent;

    &:active {
      opacity: 1;
    }

  }

  .kebab-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;

    background: transparent;

    border: none;
    cursor: pointer;

    opacity: 0.5;

    &:active {
      opacity: 1;
    }
  }
</style>
