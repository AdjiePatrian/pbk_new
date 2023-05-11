import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import advice from '../views/3page/advice.vue'
import adviceDetail from '../views/3page/adviceDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView  
  },
  {
    path: '/advice',
    name: 'advice',
    component: advice
  },
  {
    path: '/advice/:id',
    name: 'adviceDetail',
    component: adviceDetail
  },
  //REDIRECT
  { 
    path: '/all-advice',
    redirect: '/advice',
  },
  //404Notfound
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
