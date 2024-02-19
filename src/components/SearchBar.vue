<script setup>
import axios from 'axios';
import { ref } from 'vue';

const query = ref('');
const searchResults = ref([]);
let time = null;

const handleInput = () => {
    clearTimeout(time);
    time = setTimeout(() => {
        search();
    }, 500);
};

const search = () => {
    console.log(query.value);
    if (query.value != "") {
        axios.get(`http://192.168.0.73:8000/search?query=${query.value}`)
            .then(response => {
                searchResults.value = response.data.products;
            })
            .catch(error => {
                console.error('Error al realizar la búsqueda:', error);
            });
    }
};
</script>

<template>
    <div>
        <div class="container">
            <input required="" type="text" name="text" class="input" v-model="query" @input="handleInput">
            <label class="label">Buscar...</label>
        </div>
    </div>
</template>
  
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
  color: white;
}

.container .label {
  font-size: 15px;
  padding-left: 10px;
  position: absolute;
  top: 13px;
  transition: 0.3s;
  pointer-events: none;
}

.input {
  width: 270px;
  height: 45px;
  border: none;
  outline: none;
  padding: 0px 7px;
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  background-color: transparent;
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4);
}

.input:focus {
  border: 2px solid transparent;
  color: #fff;
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4),
  inset 3px 3px 10px rgba(0,0,0,1),
  inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

.container .input:valid ~ .label,
.container .input:focus ~ .label {
  transition: 0.3s;
  padding-left: 2px;
  transform: translateY(-35px);
}

.container .input:valid,
.container .input:focus {
  box-shadow: 3px 3px 10px rgba(0,0,0,1),
  -1px -1px 6px rgba(255, 255, 255, 0.4),
  inset 3px 3px 10px rgba(0,0,0,1),
  inset -1px -1px 6px rgba(255, 255, 255, 0.4);
}

</style>