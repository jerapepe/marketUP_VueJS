<template>
  <div class="container-mains">
    <AlertBox v-if="showAlert" :message="alertMessage" />
    <div v-if="!loggedIn">
      <h3>Iniciar sesión</h3>
      <div class="post">
        <form @submit.prevent="enviar">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="formData.username" class="texg">
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="formData.password" class="texg">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>

      <h3>Registrarse</h3>
      <div class="post">
        <form @submit.prevent="enviarDatos">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="formData.name" class="texg">
          </div>
          <div class="form-group">
            <label for="lastname">Apellido:</label>
            <input type="text" id="lastname" v-model="formData.lastname" class="texg">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" class="texg">
          </div>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="usernameR" v-model="formData.username" class="texg">
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="passwordR" v-model="formData.password" class="texg">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AlertBox from '@/components/AlertComponent.vue';

export default {
  components: {
    AlertBox,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        username: '',
        password: ''
      },
      showAlert: false,
      isLoggedIn: this.$store.state.isLoggedIn,
      usuario: {
        username: '',
        token: '',
      }
    };
  },
  mounted() {
    console.log(this.isLoggedIn);
  },
  methods: {
    enviarDatos() {
      if (this.formData.name == "" && this.formData.email == "" && this.formData.username == "" && this.formData.password == "") {
        this.alertMessage = "Completar registro";
        this.showAlert = true;
      } else {
        fetch('http://localhost:8000/signup', {
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
            this.alertMessage = data.isVerified;
            this.showAlert = true;
            this.loggedIn = true;
          })
          .catch(error => {
            this.alertMessage = "Error al enviar datos";
            this.showAlert = true;
            console.error('Error al enviar datos:', error);
          });
      }
    },
    enviar() {
      if (this.formData.username == "" && this.formData.password == "") {
        this.alertMessage = "Complete los datos";
        this.showAlert = true;
      } else {
        fetch('http://localhost:8000/signin', {
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
            this.alertMessage = data.isVerified;
            this.showAlert = true;
            if (data.username != null) {
              this.usuario.username = data.username;
              this.usuario.token = data.token;
              localStorage.setItem('username', data.username);
              localStorage.setItem('token', data.token);
              this.$store.commit('setLoggedIn', { value: true, username: data.username, token: data.token});
              this.$router.push('/profile');
            }
          })
          .catch(error => {
            this.alertMessage = "Datos incorrectos: " + error;
            this.showAlert = true;
            //console.error('Error al enviar datos:', error);
          });
      }
    },
    work() {
      fetch('http://localhost:8000/signin', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Datos obtenidos correctamente:', data);
        })
        .catch(error => {
          console.error('Error al obtener datos:', error);
        });
    },
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
  box-shadow: 2px 4px 5px gray;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  width: 80%;
  max-width: 700px;
  background-color: #363131;
  color: white;
  height: auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
  width: 100vh;
}

.texg {
  border: 1px solid #0f0f0f;
}
</style>
