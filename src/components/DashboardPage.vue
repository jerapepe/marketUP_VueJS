<template>
    <div class="dashboard">
        <div class="dashTitle">
            <h2>Dashboard</h2>
        </div>
        <div>
            <RouterLink to="">Secciones</RouterLink>
        </div>
        <div>
            <RouterLink to="">Pasos</RouterLink>
        </div>
        <div>
            <RouterLink to="/login">Login</RouterLink>
        </div>
        <div>
            <RouterLink to="/admin">Admin</RouterLink>
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
    background-color: rgb(62, 68, 66);
    gap: 15px;
    align-items: center;
    color: white;
}

.dashTitle {

}
</style>  