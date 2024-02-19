<script setup>
import axios from 'axios';
import { ref } from 'vue';

const product = ref({
    name: '',
    price: 0,
    description: '',
    sellerId: '',
    image: null,
});

const handleFileChange = (event) => {
    product.value.image = event.target.files[0];
};

const submitForm = () => {
    const formData = new FormData();
    formData.append('name', product.value.name);
    formData.append('price', product.value.price);
    formData.append('description', product.value.description);
    formData.append('sellerId', product.value.sellerId);
    formData.append('image', product.value.image);

    axios.post('http://192.168.0.73:8000/form', formData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error al enviar datos al servidor:', error);
        });
};
</script>

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
      <button type="submit" class="button">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
.container-main {
    display: flex;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #212121;
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
.button {
  position: relative;
  z-index: 1;
  width: 120px;
  height: 40px;
  
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
  cursor: pointer;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -4px;
  top: -1px;
  margin: auto;
  width: 128px;
  height: 48px;
  border-radius: 10px;
  background-color: #000;
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  /*background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );*/
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.button:hover::after {
  filter: blur(30px);
}

.button:hover::before {
  transform: rotate(-180deg);
}

.button:active::before {
  scale: 0.7;
}
</style>