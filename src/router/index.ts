import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomePage from '../views/Home.vue';
import QuestionPage from '../views/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/question/:id',
    component: QuestionPage,
  }
];

const router = new VueRouter({
  routes
});

export default router;
