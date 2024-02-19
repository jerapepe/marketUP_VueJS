<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const message = defineProps(['message']);
const showAlert = ref(false);

const dismiss = () => {
  showAlert.value = false;
}

</script>
  
<template>
  <div v-if="show" class="alert">
    <p>{{ message }}</p>
    <button @click="dismiss">Cerrar</button>
  </div>
</template>
  
<style scoped>
.alert {
  display: absolute;
  padding: 10px;
  background-color: #46292d;
  color: #f1eaeb;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}
</style>
  