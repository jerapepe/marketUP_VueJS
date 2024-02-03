<template>
    <div class="container-main">
        <h3>Iniciar admin</h3>
        <h3>Usuarios</h3>
        <div v-for="(user, index) in users" :key="index" class="postr">
            <p>Nombre: {{ user.Name }}</p>
            <small class="user-detail">Apellido: {{ user.LastName }}</small>
            <small class="user-detail">Email: {{ user.Email }}</small>
            <small class="user-detail">Username: {{ user.Username }}</small>
            <small class="user-detail">Role: {{ user.Role }}</small>
        </div>
        <button @click="logs">Cerrar sesion</button>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            formData: {
                username: '',
            },
            users: []
        };
    },
    mounted() {
        this.aUser();
    },
    methods: {
        logs() {
            console.log("se clicleo");
            localStorage.removeItem('username');
            localStorage.removeItem('token');
        },
        aUser() {
            const token = localStorage.getItem('token');
            this.formData.token = token;
            axios.post('http://localhost:8000/admin', this.formData, {
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
                    if (data.users != null) {
                        this.users = data.users;
                    }
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

.user-detail {
    display: block;
    margin-bottom: 5px;
}
</style>
  