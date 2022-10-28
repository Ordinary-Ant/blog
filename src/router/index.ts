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
    name: '主页',
    component: Home
  },
  {
    path: '/comments',
    name: '留言',
    component: Comments
  },
  {
    path: '/article',
    name: '文章',
    component: Article
  },
  {
    path: '/creation',
    name: '作品',
    component: Creation
  },
  {
    path: '/history',
    name: '记忆',
    component: History
  },
  {
    path: '/jottings',
    name: '闪念',
    component: Jottings
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})