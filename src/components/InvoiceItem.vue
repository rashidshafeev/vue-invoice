<template>
  <div class="card">
    <div class="card-heading">
      <h2> Card {{ index + 1 }} </h2>
      <div class="card-actions-button-wrapper">
        <button
          class="card-actions-button"
          @click="showActions = !showActions">
        <img src="@/assets/kebab.svg" alt="">
        </button>
        <CardActions
        v-show="showActions"
        v-bind:invoice="invoice.id"
        />
      </div>
    </div>
    <div class="card-content">
      <div class="card-line">
        {{ invoice.id }}
      </div>
      <div class="card-line">
      </div>
      <div class="card-line">
      </div>
      <div class="card-line">
      </div>
      <div class="card-line">
      </div>

    </div>

  </div>
</template>

<script>
import CardActions from '@/components/CardActions.vue';

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
    index: Number,
  },
  components: {
    CardActions,
  },
};
</script>

<style lang="scss" scoped>

  .card {
    width: 290px;
    height: 210px;

    margin: 0 20px 20px 0;

    background: #F6FAFB;
    box-shadow: 0px 4px 12px #EBEBEB;

    border-radius: 0 0 3px 3px;
  }

  .card-heading {
    text-align: left;

    display: flex;
    justify-content: space-between;

    padding: 7px 20px;

    height: 40px;

    background-color: rgba(237, 232, 245, 0.5);
  }

  h2 {
     align-self: flex-end;
  }

  .card-actions-button-wrapper {
    position: relative;
  }

  .card-actions-button {
    align-self: center;

    border: none;
    background: none;
  }

  .card-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .card-line {
    width: 250px;
    height: 30px;

    text-align: left;

    border-bottom: 1px solid #F2F2F2;
  }

</style>
