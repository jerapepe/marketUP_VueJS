<script setup>
import NavPage from './components/NavPage.vue'
import DashboardPage from './components/DashboardPage.vue'

</script>

<template>
  <div class="container">
    <header class="navbar"><NavPage/></header>
    <aside class="sidebar"><DashboardPage/></aside>
    <main class="main-content">
      <RouterView></RouterView>
    </main>
    
  </div>
</template>

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
  border-bottom: 1px solid #555;
}

.sidebar {
  grid-area: sidebar;
  background-color: #333;
  border-right: 1px solid #555;
}

.main-content {
  grid-area: content;
  background-color: #2f3231;
}
a {
  text-decoration: none;
  color: #ffff;
}
</style>
