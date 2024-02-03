<template>
  <div class="container-main">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="productName">Nombre:</label>
        <input type="text" v-model="product.name" id="productName" required class="input-sda">
      </div>

      <div class="form-group">
        <label for="productPrice">Precio:</label>
        <input type="number" v-model="product.price" id="productPrice" required class="input-sda">
      </div>

      <div class="form-group">
        <label for="productDescription">Descripción:</label>
        <textarea v-model="product.description" id="productDescription" required class="input-sda"></textarea>
      </div>
      <div class="form-group">

        <label for="sellerId">ID del Vendedor:</label>
        <input type="number" v-model="product.sellerId" id="sellerId" required class="input-sda">
      </div>
      <div class="form-group">
        <label for="productImage">Imagen:</label>
        <input type="file" @change="handleFileChange" id="productImage" accept="image/*" required class="input-sda">
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        price: 0,
        description: '',
        sellerId: '',
        image: null,
      },
    };
  },
  methods: {
    handleFileChange(event) {
      this.product.image = event.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append('name', this.product.name);
      formData.append('price', this.product.price);
      formData.append('description', this.product.description);
      formData.append('sellerId', this.product.sellerId);
      formData.append('image', this.product.image);

      axios.post('http://localhost:8000/form', formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error al enviar datos al servidor:', error);
        });
    },
  },
};
</script>
  
<style scoped>
.container-main {
    display: flex;
    align-items: center;
    height: 100vh;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

.input-sda {
    width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}
</style>
  
