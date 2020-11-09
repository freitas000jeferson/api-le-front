import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/features/hello_world/presentation/pages/HelloWorld';
import Error404 from '@/features/error_404/presentation/pages/Error404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '*',
      name: 'error-404',
      component: Error404,
    },
  ],
});
