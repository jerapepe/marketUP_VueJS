<template>
    <div>
        <input v-model="query" @input="handleInput" placeholder="Buscar..." class="search-input">
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            query: '',
            searchResults: [],
        };
    },
    methods: {
        handleInput() {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.search();
            }, 500);
        },
        search() {
            if (this.query != "") {
                axios.get(`http://localhost:8000/search?query=${this.query}`)
                    .then(response => {
                        this.searchResults = response.data.products;
                        this.$emit('search-results-updated', this.searchResults);
                    })
                    .catch(error => {
                        console.error('Error al realizar la búsqueda:', error);
                    });
            }
        }
    },
};
</script>

<style>
.search-input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.search-input:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(0, 128, 0, 0.5);
}

</style>