import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './page/landingPage.vue'

const routes = [
  { path: '/', component: LandingPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router