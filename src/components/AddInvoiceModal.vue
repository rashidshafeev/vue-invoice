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
          id=""
          v-model="invoiceNumber">
        <label for="order-type">Тип заказа</label>
        <select
          name="order-type"
          class="order-type-input"
          id=""
          form="new-invoice"
          v-model="orderType">
          <option disabled selected>RUED</option>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
        </select>

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
    };
  },
  methods: {
    ...mapMutations(['addInvoice']),
    closeModal() {
      this.$emit('close');
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
    z-index: 10;

    width: 100vw;
    height: 100vh;

    background: rgba(43, 40, 57, 0.2);
  }

  .add-invoice-modal {
    position: absolute;
    left: calc((100vw - 400px) / 2);
    top: calc((100vh - 239px) / 2);
    z-index: 50;

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
  }

  .order-type-input {
    width: 100%;
    height: 30px;

    padding: 5px 15px;

    appearance: none;

    background: url('../assets/arrow.svg') no-repeat right;

    border: 1px solid #D9D9D9;
    border-radius: 2px;
  }

  label {
    padding: 15px 0;
  }
</style>
