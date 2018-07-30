import Vue from 'vue';
import Router from 'vue-router';
import PollsComponent from '@/pages/polls';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: PollsComponent,
    },
  ],
});
