import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoices: [
      { id: 'A', number: '4' },
      { id: 'B', number: '2' },
      { id: 'C', number: '1' },
      { id: 'D', number: '45' },
      { id: 'E', number: '3' },
    ],
    filterValue: '',
    sorting: '',
  },
  mutations: {
    addInvoice(state, newInvoice) {
      state.invoices.push(newInvoice);
    },
    deleteInvoice(state, deleteInvoice) {
      state.invoices = state.invoices.filter((invoice) => invoice.id !== deleteInvoice);
    },
    setFilterValue(state, filterValue) {
      state.filterValue = filterValue;
    },
    setSorting(state, sortingOption) {
      state.sorting = sortingOption;
    },
  },
  actions: {
  },
  getters: {
    allInvoices(state) {
      return state.invoices;
    },
    filteredInvoices(state) {
      if (state.filterValue) {
        return state.invoices.filter((invoice) => invoice.number.includes(state.filterValue));
      }
      return state.invoices;
    },
    sortedFilteredInvoices(state) {
      let sorted = state.invoices;
      console.log(sorted);
      if (state.sorting === 'number-ascending') {
        sorted = state.invoices.sort((a, b) => {
          let c;
          if (a.number > b.number) {
            c = 1;
          } else if (a.number < b.number) {
            c = -1;
          } else {
            c = 0;
          }
          return c;
        });
      } else if (state.sorting === 'number-descending') {
        sorted = state.invoices.sort((a, b) => {
          let c;
          if (a.number < b.number) {
            c = 1;
          } else if (a.number > b.number) {
            c = -1;
          } else {
            c = 0;
          }
          return c;
        });
      }

      console.log(sorted);

      if (state.filterValue) {
        return sorted.filter((invoice) => invoice.number.includes(state.filterValue));
      }

      return sorted;
    },
  },
  modules: {
  },
});
