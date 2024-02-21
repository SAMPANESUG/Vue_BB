import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/SomeView.vue'
import Write from '../views/WriteView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board/someview/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: "/board/write",
    name: "Write",
    component: Write,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
