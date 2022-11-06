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
    component: Home,
    meta: { es_name: 'Home' }
  },
  {
    path: '/comments',
    name: '留言',
    component: Comments,
    meta: { es_name: 'Message' }
  },
  {
    path: '/article',
    name: '文章',
    component: Article,
    meta: { es_name: 'Article' }
  },
  {
    path: '/creation',
    name: '作品',
    component: Creation,
    meta: { es_name: 'Creation' }
  },
  {
    path: '/history',
    name: '记忆',
    component: History,
    meta: { es_name: 'History' }
  },
  {
    path: '/jottings',
    name: '闪念',
    component: Jottings,
    meta: { es_name: 'Jottings' }
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})