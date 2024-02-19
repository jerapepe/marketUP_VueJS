<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="dashboard">
        <div>
            <RouterLink to="/products" class="tit">Productos</RouterLink>
        </div>
        <div>
            <RouterLink to="/add" class="tit">Pasos</RouterLink>
        </div>
        <div>
            <RouterLink to="/login" class="tit">Login</RouterLink>
        </div>
        <div>
            <RouterLink to="/admin" class="tit">Admin</RouterLink>
        </div>
    </div>
    
</template>  
  
<style scoped>
.dashboard{
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: rgb(62, 68, 66);
    gap: 15px;
    align-items: center;
    color: white;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 20px;
}
.tit{
    text-decoration: none;
    color : white;
}
</style>  