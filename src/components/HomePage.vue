<template>
  <div class="container-main">
  </div>
  <h3>Usuarios</h3>
  <div v-for="(user, index) in users" :key="index" class="postr">
    <p>Nombre: {{ user.Name }}</p>
    <small>Apellido: {{ user.LastName }}</small>
    <small>Email: {{ user.Email }}</small>
    <small>Username: {{ user.Username }}</small>
    <small>Role: {{ user.Role }}</small>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      formData: {
        token: '',
      },
      users: []
    };
  },
  mounted() {
    const tokenAd = localStorage.getItem('token');
    this.formData.token = tokenAd;
    if (tokenAd == "" && tokenAd == " "){
      console.log("vacio");
    } else {
      this.aUser();
    }
  },
  methods: {
    aUser() {
			const token = localStorage.getItem('token');
			this.formData.token = token;
			axios.post('http://localhost:8000/access', this.formData, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${this.formData.token}`,
				},
			})
				.then(response => {
					if (!response.status >= 200 && !response.status < 300) {
						throw new Error(`Error en la solicitud (${response.status}): ${response.statusText}`);
					}
					return response.data;
				})
				.then(data => {
					if (data.user === "tokenExpired") {
						localStorage.removeItem('token');
						this.$router.push('/login');
					}
					this.user.name = data.user.Name;
					this.user.email = data.user.Email;
					this.user.username = data.user.Username;
					this.user.lastname = data.user.LastName;
					this.token = token; 
				})
				.catch(error => {
					console.error('Error al enviar datos:', error);
				});
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
