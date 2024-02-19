<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();

const user = ref({
	name: '',
	lastname: '',
	email: '',
	username: '',
	orderHistory: [],
});

const formData = ref({
	token: '',
});

const userlogged = ref({
	isLoggedIn: store.state.isLoggedIn,
});

const token = ref('');
const imagePreview = ref(null);

onMounted(() => {
	aUser();
	user.value.orderHistory = [
		{ date: '2022-01-01', products: 'Pizza, Hamburguesa', status: 'Entregado' },
		{ date: '2022-01-02', products: 'Ensalada, Sushi', status: 'En camino' },
	];
});

const aUser = () => {
	if(userlogged.value.isLoggedIn){
		console.log('Usuario logueado');
	} else {
		console.log('Usuario no logueado');
	}
	const tokenValue = localStorage.getItem('token');
	formData.value.token = tokenValue;

	axios
		.post('http://192.168.0.73:8000/access', formData.value, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${formData.value.token}`,
			},
		})
		.then((response) => {
			if (!(response.status >= 200 && response.status < 300)) {
				throw new Error(`Error en la solicitud (${response.status}): ${response.statusText}`);
			}
			return response.data;
		})
		.then((data) => {
			if (data.user === 'tokenExpired') {
				localStorage.removeItem('token');
				this.$router.push('/login');
			}
			user.value.name = data.user.Name;
			user.value.email = data.user.Email;
			user.value.username = data.user.Username;
			user.value.lastname = data.user.LastName;
			token.value = tokenValue;
		})
		.catch((error) => {
			console.error('Error al enviar datos:', error);
		});
};

//const addNewAddress = () => {
//	console.log('Agregar nueva dirección');
//};

const handleFileChange = (event) => {
	const file = event.target.files[0];
	if (file) {
		imagePreview.value = URL.createObjectURL(file);
	}
};

const uploadImage = () => {
	// Implement your image upload logic here
};
</script>

<template>
	<div class="contain-main">
		<div class="profile-container">
			<div class="card-profile">
				<h2>Perfil de Usuario</h2>
				<div class="profile-info">
					<p><strong>Nombre:</strong> {{ user.name }}</p>
					<p><strong>Apellido:</strong> {{ user.lastname }}</p>
					<p><strong>Correo:</strong> {{ user.email }}</p>
					<p><strong>Username:</strong>{{ user.username }}</p>
				</div>
				<div class="profile-image">
					<label for="fileInput">Editar foto de perfil:</label>
					<img v-if="imagePreview" :src="imagePreview" alt="Profile Image" />
				</div>
			</div>
		</div>
		<div class="cards-row">
			<div class="card-medim">
				<div class="order-history-section">
					<h3>Historial de Pedidos</h3>
					<ul>
						<li v-for="(order, index) in user.orderHistory" :key="index">
							{{ order.date }} - {{ order.products }} - Estado: {{ order.status }}
						</li>
					</ul>
				</div>
			</div>
			<div class="card-fin">
				<h2>Configuración de la Cuenta</h2>
				<div class="account-settings">
					<p><strong>Nombre de usuario:</strong> {{ user.username }}</p>
					<p><strong>Token:</strong> {{ token }}</p>
				</div>
				<div class="edit-profile">
					<p>Foto de perfil:</p>
					<div>
						<input type="file" id="fileInput" @change="handleFileChange" />
						<button @click="uploadImage">Subir Imagen</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
<style scoped>
.contain-main {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-bottom: 10px;
}

.profile-container {
	width: 100%;
}

.card-profile,
.card-medim,
.card-fin {
	margin: 10px;
	padding: 15px;
	background-color: rgb(27, 27, 32);
	border: 1px solid #ccc;
	border-radius: 10px;
	height: auto;
	margin-bottom: 10px;
}

.card-profile {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card-fin p {
	overflow: auto;
}

.cards-row {
	display: flex;
	width: 100%;
}

.profile-image img {
	width: auto;
	height: 170px;
}

.profile-info p {
	margin-bottom: 10px;
}
</style>
  