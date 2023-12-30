<template>
    <form @submit.prevent="enviarDatos">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="formData.nombre">

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">

        <button type="submit">Enviar</button>
    </form>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            formData: {
                nombre: '',
                email: ''
            }
        };
    },
    methods: {
        /*
          enviarDatos() {
          // Aquí puedes enviar los datos al servidor
          // Por ejemplo, usando fetch o axios
          fetch('http://192.168.0.73:8000/apis', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.formData)
          })
          .then(response => {
            // Manejar la respuesta del servidor
            console.log('Datos enviados correctamente');
            console.log(response);
          })
          .catch(error => {
            // Manejar errores en el envío de datos
            console.log("errors");
            console.error('Error al enviar datos:', error);
          });
        }
      }
    };*/
        enviarDatos() {
            axios.post('http://192.168.0.73:8000/tu-ruta', this.formData)
                .then(response => {
                    // Manejar la respuesta del servidor
                    console.log('Datos enviados correctamente', response.data);
                })
                .catch(error => {
                    // Manejar errores en el envío de datos
                    console.log("errors");
                    console.error('Error al enviar datos:', error);
                });
        }
    }
};
</script>