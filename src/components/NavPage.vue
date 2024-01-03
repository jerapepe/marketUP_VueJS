<template>
    <div class="container-nav">
        <div class="nav-content">
            <h3><router-link to="/">Inicio</router-link></h3>
            <h3><router-link to="/mapa">Mapa</router-link></h3>
            <h3><router-link to="/">Productos</router-link></h3>
            <h3><router-link to="/profile">Perfil</router-link></h3>
        </div>
        <div v-if="isLoggedIn" class="logout">
            <h4><router-link to="/login" @click="loggout">Cerrar sesión</router-link></h4>
        </div>
        <div v-else class="login">
            <h4><router-link to="/login" @click="login">Iniciar sesión</router-link></h4>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        }
    },
    mounted() {
        this.checkLoginStatus();
    },
    methods: {
        checkLoginStatus() {
            const userData = localStorage.getItem('username');
            if (userData) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        },
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            this.checkLoginStatus();
            console.log("se cliceo");
        },
        login(){
            this.isLoggedIn = true;
            this.checkLoginStatus();
        },
    },  
    watch:{
        isLoggedIn(newValue){
            console.log("cambio el valor: ", newValue);
            this.checkLoginStatus();
        }
    },
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
    gap: 40px;
}

.login {
    margin-left: auto;
}
</style>
  