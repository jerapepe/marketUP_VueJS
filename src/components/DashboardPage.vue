<template>
    <div class="dashboard">
        <div>
            <RouterLink to="/products">Productos</RouterLink>
        </div>
        <div>
            <RouterLink to="/add">Pasos</RouterLink>
        </div>
        <div>
            <RouterLink to="/login">Login</RouterLink>
        </div>
        <div>
            <RouterLink to="/admin">Admin</RouterLink>
        </div>
        <div>
            <RouterLink to="/access">Admin</RouterLink>
        </div>
    </div>
    
</template>
  
<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink }
}
</script>
  
<style>
.dashboard{
    display: flex;
    flex-direction: column;
    height: 100%;
    /*background-color: rgb(62, 68, 66);*/
    gap: 15px;
    align-items: center;
    color: white;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 20px;
}
</style>  