import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CustomNavbar from '@/components/Navbar.vue'
import CustomFooter from '@/components/Footer.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Work from '@/pages/Work.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  linkActiveClass: 'bg-green-600',
  history: createWebHistory(),
  routes: [
    {
      path: '/:catchAll(.*)',
      component: NotFound,
    },
    {
      path: '/',
      component: Home,
    },
    {
      path: '/About',
      alias: ['/about'],
      component: About,
    },
    {
      path: '/Work',
      alias: ['/work'],
      component: Work,
    },
  ],
})

const app = createApp(App)

app.use(router)

app.component('custom-navbar', CustomNavbar).component('custom-footer', CustomFooter)

app.mount('#app')
