import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/index.vue'
import prPrice from '../pages/products.vue'
import Profile from '../pages/profile.vue'

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/products', name: 'prPrice', component: prPrice },
  { path: '/profile', name: 'Profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router