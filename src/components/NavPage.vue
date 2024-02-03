<template>
    <div class="container-nav">
        <div class="nav-content">
            <h3><router-link to="/">Inicio</router-link></h3>
            <h3><router-link to="/mapa">Mapa</router-link></h3>
            <h3><router-link to="/products">Productos</router-link></h3>
            <h3><router-link to="/profile">Perfil</router-link></h3>
        </div>
        <template v-if="isLoggedIn">
            <div class="logout">
                <h4><router-link to="/login" @click="logout">Cerrar sesión</router-link></h4>
            </div>
        </template>
        <template v-else>
            <div class="login">
                <h4><router-link to="/login" @click="login">Iniciar sesión</router-link></h4>
            </div>
        </template>
    </div>
</template>
  
<script>
export default {
    data() {

    },
    mounted() {
        this.checkLoginStatus();
    },
    methods: {
        checkLoginStatus() {
            const userData = localStorage.getItem('username');
            if (userData) {
                // this.isLoggedIn = true;
                this.$store.commit('setLoggedIn', { value: true });
            } else {
                // this.isLoggedIn = false;
                this.$store.commit('setLoggedIn', { value: false });
            }
        },
        logout() {
            // this.isLoggedIn = false;
            this.$store.commit('setLoggedIn', { value: false });
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            this.checkLoginStatus();
            console.log("se cliceo");
        },
        login() {
            // this.isLoggedIn = true;
            this.$store.commit('setLoggedIn', { value: true });
            this.checkLoginStatus();
        },
    },
    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isLoggedIn;
        }
    },
    watch: {
        //isLoggedIn(newValue){
        //    console.log("cambio el valor: ", newValue);
        //    this.checkLoginStatus();
        //}
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
    padding: 15px;
}

.nav-content {
    display: flex;
    gap: 40px;
}

.login {
    margin-left: auto;
}
</style>
  