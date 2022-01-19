import Vue    from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router: Router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/home/index.vue'),
    },
    // shops pages
    {
      path: '/shops',
      name: 'shops',
      component: () => import('../pages/shops/index.vue'),
      children : [
        {
          path: '',
          name: 'shops-home',
          component: () => import('../pages/shops/home.vue'),
        },
        {
          path: ':id',
          name: 'shops-detail',
          component: () => import('../pages/shops/detail.vue'),
        },
      ]
    },
    // categories pages
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../pages/categories/index.vue'),
      children : [
        {
          path: '',
          name: 'categories-home',
          component: () => import('../pages/categories/home.vue'),
        },
      ]
    },
    // not found page
    {
      path: '*',
      name: 'not-found',
      component: () => import('../pages/not-found/index.vue'),
    },
  ],
});

router.afterEach(() => {
  const loadingEl = document.getElementById('loading');
  if(loadingEl) loadingEl.remove();
});

router.beforeEach((to: any, from, next) => {
  const defaultTitle = 'Marketplace';
  const title = to.meta.title ? `${ to.meta.title } - ${defaultTitle}` : defaultTitle;
  document.title = title;

  if( to.meta.requiresAuth ) {
    if( !localStorage.getItem('token') ) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  }

  next();
});

export { router };
