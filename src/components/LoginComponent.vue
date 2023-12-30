<template>
    <div class="container-mains">
        <h3>Iniciar sesion</h3>
        <div class="post">
            <form @submit.prevent="enviarDatos">
                <div class="login">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="formData.username" class="texg">

                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="formData.password">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
        <h3>Registrarse</h3>
        <div class="post">
            <form @submit.prevent="enviarDatos">
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="formData.name">

                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email">

                <label for="username">Username:</label>
                <input type="text" id="username" v-model="formData.username">

                <label for="password">Password:</label>
                <input type="password" id="password" v-model="formData.password">

                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            formData: {
                name:'',
                email:'',
                username: '',
                password: ''
            }
        };
    },
    methods: {
        enviarDatos() {
            axios.post('http://192.168.0.73:8000/tu-ruta', this.formData)
                .then(response => {
                    console.log('Datos enviados correctamente', response.data);
                })
                .catch(error => {
                    console.log("errors");
                    console.error('Error al enviar datos:', error);
                });
        }
    }
};
</script>

<style>
.container-mains {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.post {
    display: flex;
    align-items: center;
    flex-direction: row;
    box-shadow: 2px 4px 5px gray;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    width: 80%;
    max-width: 700px;
    background-color: #363131;
    color: black;
    height: 100px;
}
.texg{
    border: 1px solid #0f0f0f;
}
.login{
    display: flex;
    align-self: start;
    flex-direction: row;
}

</style>