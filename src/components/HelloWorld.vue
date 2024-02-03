<template>
<div class="navbar">
    <div class="navbar-header">
        <span class="menu-icon" @click="toggleSidebar()">☰</span>
        <h1>Tu Dashboard</h1>
    </div>
</div>

<div id="sidebar" class="sidebar">
    <a href="#">Inicio</a>
    <a href="#">Estadísticas</a>
    <a href="#">Configuración</a>
</div>

<div class="content">
    <h2>Bienvenido al Dashboard</h2>
    <p>Contenido principal aquí...</p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
      }
    }
  }
}
</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    background-color: #333;
    color: white;
    padding: 15px;
}

.navbar-header {
    display: flex;
    align-items: center;
}

.menu-icon {
    font-size: 24px;
    cursor: pointer;
    margin-right: 15px;
}

.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidebar a {
    padding: 15px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidebar a:hover {
    color: #f1f1f1;
}

.content {
    margin-left: 250px;
    padding: 15px;
}

</style>
