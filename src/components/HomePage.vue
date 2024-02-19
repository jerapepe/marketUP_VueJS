<script setup >
import axios from "axios"
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref({
  name: '',
  email: '',
  username: '',
  lastname: '',
});
const token = ref('');
const users = ref([]);
const formData = ref({
  token: '',
});
onMounted(() => {
  const tokenAd = localStorage.getItem('token');
  formData.value.token = tokenAd;
  if (tokenAd == "" && tokenAd == " "){
    console.log("vacio");
  } else {
    aUser();
  }
});
const aUser = () => {
			const tokens = localStorage.getItem('token');
			formData.value.token = tokens;
			axios.post('http://localhost:8000/access', formData, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${formData.value.token}`,
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
						router.push('/login');
					}
					user.value.name = data.user.Name;
					user.value.email = data.user.Email;
					user.value.username = data.user.Username;
					user.value.lastname = data.user.LastName;
					//token.value = data.token;
          token.value = tokens;
				})
				.catch(error => {
					console.error('Error al enviar datos:', error);
				});
		}
</script>

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


<style scoped>
.container-main {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 10px;
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
