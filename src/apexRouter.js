import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './page/landingPage.vue'
import InquirePage from './page/inquirePage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/contact', component: InquirePage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router