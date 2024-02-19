<script setup>
import SearchBar from '../components/SearchBar.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

const products = ref([]);

onMounted(() => {
    searchProducts();
});

const updateProducts = (searchResults) => {
    products.value = [];
    products.value = searchResults;
};

const searchProducts = () => {
    fetch('http://192.168.0.73:8000/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            products.value = data.products;
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
        });
};
/*
const foodProducts = () => {
    return products.value.filter(product => product.Category === 'food');
};

const figureProducts = () => {
    return products.value.filter(product => product.Category === 'figures');
};
*/
</script>

<template>
    <div class="container-main">
        <SearchBar @search-results-updated="updateProducts"></SearchBar>
        <div class="categories">
            <div class="category">
                <div class="card"><h3>Alimentos</h3></div>
                <div v-for="(product, index) in products" :key="index" class="postr">
                    <p>Nombre: {{ product.Name }}</p>
                    <small class="user-detail">Precio: {{ product.Price }}</small>
                    <small class="user-detail">Descripción: {{ product.Description }}</small>
                    <small class="user-detail">Imagen: {{ product.Image }}</small>
                    <small class="user-detail">Vendedor: {{ product.IDVendor }}</small>
                </div>
            </div>

            <div class="category">
                
                <div class="card"><h3>Figuras</h3></div>
                <!--
                <div v-for="(product, index) in figureProducts" :key="index" class="postr">
                    <p>Nombre: {{ product.Name }}</p>
                    <small>Precio: {{ product.Price }}</small>
                    <small>Descripción: {{ product.Description }}</small>
                    <small>Imagen: {{ product.Image }}</small>
                -->
            </div>
        </div>
    </div>
</template>
    
<style scoped>
.container-main {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 28px;
    gap: 15px;
}

.categories {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.category {
    flex: 1;
    margin-right: 20px;
}
.postr {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    background-color: #f9f9f9;
    color: black;
}

.card {
  width: 200px;
  height: 70px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card h3 {
  z-index: 1;
  color: white;
}

.card::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}

</style>
