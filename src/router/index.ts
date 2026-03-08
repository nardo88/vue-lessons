import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main.vue'
import Posts from '../pages/posts.vue'
import Post from '../components/Post.vue'
import NotFound from '../components/NotFound.vue'
import About from '../components/About.vue'

export const router = createRouter({
  routes: [
    {
      path: '/', // Дефолтный роут
      component: Main,
    },
    {
      path: '/posts',
      component: Posts,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/posts/:id', // Роут с динамическим маршрутом
      component: Post,
    },
    {
      path: '/:pathMatch(.*)*', // Маршрут для обработки несуществующих страниц
      component: NotFound,
    },
  ],
  history: createWebHistory(),
})
