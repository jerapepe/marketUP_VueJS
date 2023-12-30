<template>
    <div class="dashboard">
        <div class="dashTitle">
            <h2>Dashboard</h2>
        </div>
        <div>
            Secciones
        </div>
        <div>
            Pasos
        </div>
        <div>
            <RouterLink to="/us">Login</RouterLink>
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