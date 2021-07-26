import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Cards.vue';
import Table from '../views/Table.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/cards',
    name: 'Cards',
    component: Home,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
