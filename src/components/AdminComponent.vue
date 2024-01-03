<template>
    <div class="container-main">
        <h3>Iniciar admin</h3>
        <h3>Usuarios</h3>
        <div v-for="(user, index) in users" :key="index" class="postr">
            <p>Nombre: {{ user.Name }}</p>
            <small>Apellido: {{ user.LastName }}</small>
            <small>Email: {{ user.Email }}</small>
            <small>Username: {{ user.Username }}</small>
            <small>Role: {{ user.Role }}</small>
        </div>
        <button @click="logs">Cerrar sesion</button>
    </div>
</template>
  
<script>
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
        const usernamessd = localStorage.getItem('username');
        this.formData.username = usernamessd
        fetch('http://localhost:8000/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => {
                if (data.users != null) {
                    this.users = data.users;
                }
            })
            .catch(error => {
                this.alertMessage = "Datos incorrectos: " + error;
                this.showAlert = true;
            });
    },
    methods: {
        logs() {
            console.log("se clicleo");
            localStorage.removeItem('username');
            localStorage.removeItem('token');
        }
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
  