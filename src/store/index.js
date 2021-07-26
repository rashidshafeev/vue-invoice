import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoices: [
      { id: 'A' },
      { id: 'B' },
      { id: 'C' },
      { id: 'D' },
      { id: 'E' },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    allInvoices(state) {
      return state.invoices;
    },
  },
  modules: {
  },
});
