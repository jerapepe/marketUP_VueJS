<template>
  <div>
    <h2>Login</h2>
    <h3>Este es el login</h3>
    <br>
    <br>
    <button @click="login">Iniciar Sesión</button>
    <button @click="logout">Cerrar Sesión</button>

    <routerLink to="/post">Posts</routerLink>
    <div>
    <div v-if="isAuthenticated">
      <router-view></router-view>
    </div>
    <div v-else>El usuario no esta loggeado</div>
  </div>
    <!--
    <div>
      <p v-if="isAuthenticated">El usuario está autenticado</p>
      <p v-else>El usuario no está autenticado</p>
    </div>
    -->
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState(['isLoggedIn']),
    
    isAuthenticated(){
      return this.isLoggedIn;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('updateLoggedIn', true);
    },
    logout() {
      this.$store.dispatch('updateLoggedIn', false);
    }
  },
  components: { RouterLink }
};
</script>

<style>
/* Estilos para el componente Login */
</style>
