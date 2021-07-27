<template>
  <div class="modal-wrapper">
    <div class="add-invoice-modal">
      <div class="modal-header">
        Добавление
      </div>
      <form
        class="add-invoice-form"
        id="new-invoice"
        @submit.prevent="callAddInvoice(); closeModal();">
        <label for="invoice-number">Номер накладной</label>
        <input
          type="text"
          name="invoice-number"
          class="invoice-number-input"
          placeholder="Введите значение"
          id=""
          v-model="invoiceNumber">
        <div class="order-type-label">Тип заказа</div>
        <div
          class="order-type-select"
          id="order-type-select"
          @click="showOrderTypes = !showOrderTypes">
          <div
            class="order-type-select-text"
            v-bind:class="{active: orderType}"
            id="order-type-select-text">RUED</div>
          <img
          src="@/assets/arrow.svg"
          class="select-arrow"
          v-bind:class="{opened: showOrderTypes}" alt="">
        </div>
          <div
            class="order-types-container"
            v-bind:class="{opened: showOrderTypes}">
            <div class="order-type-options"
            @click="setOrderType('FOO')">
              FOO</div>
            <div class="order-type-options"
            @click="setOrderType('BAR')">
              BAR</div>
          </div>
      </form>
    </div>
    <div
        class="modal-background"
        @click="closeModal">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default ({
  name: 'AddInvoiceModal',
  data() {
    return {
      invoiceNumber: '',
      orderType: '',
      showOrderTypes: false,
    };
  },
  methods: {
    ...mapMutations(['addInvoice']),
    closeModal() {
      this.$emit('close-add-modal');
    },
    setOrderType(orderType) {
      this.orderType = orderType;
      this.showOrderTypes = !this.showOrderTypes;

      if (orderType === 'FOO') {
        document.getElementById('order-type-select-text').innerText = 'FOO';
      } else if (orderType === 'BAR') {
        document.getElementById('order-type-select-text').innerText = 'BAR';
      }
    },
    callAddInvoice() {
      this.addInvoice({
        id: Date.now(),
        number: this.invoiceNumber,
        type: this.orderType,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
  .modal-wrapper {
  }

  .modal-background {
    position: fixed;
    z-index: 200;

    width: 100vw;
    height: 100vh;

    background: rgba(43, 40, 57, 0.2);
  }

  .add-invoice-modal {
    position: absolute;
    left: calc((100vw - 400px) / 2);
    top: calc((100vh - 239px) / 2);
    z-index: 250;

    width: 400px;
    height: 239px;

    padding: 25px 20px;

    font-size: 16px;

    background: #FFFFFF;
    border-radius: 2px;
  }

  .modal-header {
    text-align: center;
  }

  .add-invoice-form {
    display: flex;
    flex-flow: row wrap;
  }

  .invoice-number-input {
    width: 100%;
    height: 30px;

    padding: 5px 15px;

    border: 1px solid #D9D9D9;
    border-radius: 2px;

    ::placeholder {
      color: #A5A5A5;
    }
  }

  label {
    padding: 15px 0;
  }

  .order-type-label {
    padding: 15px 0;
  }

  .order-type-select {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 30px;

    padding: 5px 10px;

    font-weight: normal;
    font-size: 16px;
    color: #A5A5A5;

    border: 1px solid #E0E5E6;
    border-radius: 2px;
    box-sizing: border-box;
  }

  .active {
    color: #000000;
  }

  .select-arrow {
    transform: rotate(90deg);
    transition-duration: 200ms;
  }

  .order-types-container {
    display: none;

    overflow: hidden;

    width: 100%;

    border-radius: 0 0 2px 2px;
  }

  .opened {
    display: block;
    transform: rotate(0deg);
  }

  .order-type-options {
    width: 100%;
    height: 30px;

    padding: 5px 10px;

    font-weight: normal;
    font-size: 12px;

    border: 1px solid #E0E5E6;
    border-top: none;
    box-sizing: border-box;

    background: #FFFFFF;
  }
</style>
