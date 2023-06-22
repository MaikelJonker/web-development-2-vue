import { createRouter, createWebHistory } from 'vue-router';
import { HomePage, LoginPage } from '../views';
import { BaseLayout } from '../layouts';
import { state } from '../state/state';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage,
    },
    {
      path: '/',
      name: 'base-layout',
      component: BaseLayout,
      children: [
        
        {
          path: '/home',
          name: 'home-page',
          component: HomePage,
        }
      ],
    }, 
  ],
});

router.beforeEach((to, from, next)=> {
  if(state.user || to.name === 'login-page'){
    next()
  }else{
    router.push({name: 'login-page'})
  }
})

export default router;
