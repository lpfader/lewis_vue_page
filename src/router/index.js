import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Calendar from '../pages/calendar.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/calendar', component: Calendar }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})