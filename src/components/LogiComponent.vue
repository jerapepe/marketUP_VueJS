<template>
  <div class="container-main">
    <h2>Login</h2>
    <h3>Este es el login</h3>

    <button @click="login">Iniciar Sesión</button>
    <button @click="logout">Cerrar Sesión</button>

    <routerLink to="/post">Posts</routerLink>
    <div>
      <div v-if="isAuthenticated">
        <router-view></router-view>
      </div>
      <div v-else>El usuario no esta loggeado</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['isLoggedIn']),

    isAuthenticated() {
      return this.isLoggedIn;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('updateLoggedIn', { value: true, username: 'miNombre' });
    },
    logout() {
      this.$store.dispatch('updateLoggedIn', false);
    }
  },
};
</script>

<style>
.container-main {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 5px;

}
</style>
