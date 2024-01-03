<template>
  <div class="container-main">
    </div>
    <h3>Usuarios</h3>
    <div v-for="(user, index) in users" :key="index" class="postr">
      <p>Nombre: {{ user.Name }}</p>
      <small>Apellido: {{user.LastName}}</small>
      <small>Email: {{ user.Email }}</small>
      <small>Username: {{user.Username}}</small>
      <small>Role: {{user.Role}}</small>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      users: []
    };
  }
};
</script>

<style>
.container-main {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.postr {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  width: 80%;
  max-width: 600px;
  background-color: #f9f9f9;
  color: black;
}
</style>
