<template>
  <div>
    <h2>Perfil de Usuario</h2>
    <p>Nombre: {{ user.name }}</p>
    <p>Email: {{ user.lastname }}</p>
    <p>Correo: {{ user.email }}</p>
    <p>Usename: {{ user.username }}</p>
    <p>Token: {{token}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email:"",
        username: "",
      },
      isLoggedIn: false,
      token: "",
    }
  },
  mounted() {
    const usernamessd = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    
    const requestBody = {
        username: usernamessd
    };

    fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          this.user.name = data.name;
          this.user.lastname = data.lastname;
          this.user.email = data.email;
          this.user.username = data.username;
        })
        .catch(error => {
          console.error('Error al enviar datos:', error);
        });
        this.token = token;
    },
  }
</script>

<style>

</style>