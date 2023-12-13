<template>
    <div class="container-nav">
        <div class="nav-content">
            <h3>Inicio</h3>
            <h3>Mapa</h3>
            <h3>Productos</h3>
        </div>
        <div class="login">
            <h4><router-link to="/login">Iniciar sesion</router-link></h4>
        </div>
    </div>
</template>
  
<script>
export default {
}
</script>
  
<style scoped>
.container-nav {
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    padding: 10px;
}

.nav-content {
    display: flex;
    gap:40px;
}

.login {
    margin-left: auto;
}
</style>
  