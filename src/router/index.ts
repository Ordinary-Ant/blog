import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Home from '@view/home/index.vue'

const Article = () => import('@view/article/index.vue')
const Comments = () => import('@view/comments/index.vue')
const Creation = () => import('@view/creation/index.vue')
const History = () => import('@view/history/index.vue')
const Jottings = () => import('@view/jottings/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/comments',
    name: 'comments',
    component: Comments
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/creation',
    name: 'creation',
    component: Creation
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/jottings',
    name: 'jottings',
    component: Jottings
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})