<template>
    <div class="container-main">
        <SearchBar @search-results-updated="updateProducts"></SearchBar>
        <div class="categories">
            <div class="category">
                <h3>Productos de Alimentos</h3>
                <div v-for="(product, index) in products" :key="index" class="postr">
                    <p>Nombre: {{ product.Name }}</p>
                    <small class="user-detail">Precio: {{ product.Price }}</small>
                    <small class="user-detail">Descripción: {{ product.Description }}</small>
                    <small class="user-detail">Imagen: {{ product.Image }}</small>
                    <small class="user-detail">Vendedor: {{ product.IDVendor }}</small>
                </div>
            </div>

            <div class="category">
                <h3>Productos de Figuras</h3>
                <div v-for="(product, index) in figureProducts" :key="index" class="postr">
                    <p>Nombre: {{ product.Name }}</p>
                    <small>Precio: {{ product.Price }}</small>
                    <small>Descripción: {{ product.Description }}</small>
                    <small>Imagen: {{ product.Image }}</small>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import SearchBar from '../components/SearchBar.vue';
export default {
    components:{
        SearchBar,
    },
    data() {
        return {
            formData: {
                username: '',
            },
            users: [],
            products: [],
        };
    },
    computed: {
    },
    mounted() {
        this.searchProducts();
    },
    methods: {
        updateProducts(searchResults) {
            this.products = [];
            this.products = searchResults;
        },
        searchProducts(){
            fetch('http://localhost:8000/products', {
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
                this.products = data.products;
            })
            .catch(error => {
                console.error('Error al enviar datos:', error);
            });
        }
        // Filtra los productos por categoría
        /*
        foodProducts() {
            return this.products.filter(product => product.Category === 'food');
        },
        figureProducts() {
            return this.products.filter(product => product.Category === 'figures');
        },
        */
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
</style>
