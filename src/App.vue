<template>
  <div class="container">
    <header class="navbar"><NavPage /></header>
    <aside class="sidebar"><DashboardPage/></aside>
    <main class="main-content"><HomePage/></main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import NavPage from './components/NavPage.vue'
import DashboardPage from './components/DashboardPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    NavPage,
    DashboardPage,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: grid;
  grid-template-areas:
    'navbar navbar navbar'
    'sidebar content content';
  grid-template-rows: 60px 1fr;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  padding: 0%;
}
.navbar {
  grid-area: navbar;
  background-color: #333;
  color: white;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f2f2f2;
}

.main-content {
  grid-area: content;
}
</style>
