import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import Login from '../components/LoginComponent.vue'
import Post from '../components/PostComponent.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/post', component: Post},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
