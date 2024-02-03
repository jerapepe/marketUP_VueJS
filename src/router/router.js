import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePage.vue';
import Login from '../components/LoginComponent.vue'
import Profile from '../components/ProfilePage.vue'
import Mapa from '../components/MapaPage.vue'
import Admin from '../components/AdminComponent.vue'
import Products from '../components/ProductsComponent.vue'
import Hello from '../components/HelloWorld.vue'
import Form from '../components/ProductForm.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login},
  { path: '/profile', component: Profile},
  { path: '/mapa', component: Mapa},
  { path: '/admin', component: Admin},
  { path: '/products', component: Products},
  { path: '/hello', component: Hello},
  { path: '/add', component: Form},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
