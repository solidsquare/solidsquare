import Vue from 'vue';
import Router from 'vue-router';
import Square from '@/components/Square';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Square',
      component: Square,
    },
  ],
});
