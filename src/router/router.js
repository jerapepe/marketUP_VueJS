import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import Login from '../components/LoginComponent.vue'
import Post from '../components/PostComponent.vue'
import Cont from '../components/ContenPage.vue'
import Profile from '../components/ProfilePage.vue'
import Mapa from '../components/MapaPage.vue'
import Admin from '../components/AdminComponent.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Login },
  { path: '/login', component: Post},
  { path: '/conte', component: Cont},
  { path: '/profile', component: Profile},
  { path: '/mapa', component: Mapa},
  { path: '/admin', component: Admin},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
