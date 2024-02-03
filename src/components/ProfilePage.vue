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

<script>
import axios from 'axios';

export default {
	data() {
		return {
			user: {
				name: "",
				lastname: "",
				email: "",
				username: "",
			},
			formData: {
				token: '',
			},
			isLoggedIn: false,
			token: "",
			imagePreview: null,
		}
	},
	mounted() {
		this.aUser();
		this.user.orderHistory = [
				{ date: "2022-01-01", products: "Pizza, Hamburguesa", status: "Entregado" },
				{ date: "2022-01-02", products: "Ensalada, Sushi", status: "En camino" },
			];
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
		},
		addNewAddress() {
			console.log("Agregar nueva dirección");
		},
		handleFileChange(event) {
			const file = event.target.files[0];
			if (file) {
				this.imagePreview = URL.createObjectURL(file);
			}
		},
	},
}
</script>

<style>
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