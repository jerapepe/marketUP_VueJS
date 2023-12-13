<template>
  <div class="container-main">
    <h2>Home - Feed de Publicaciones</h2>
    <!-- Lista de publicaciones -->
    <div v-for="(post, index) in posts" :key="index">
      <p>{{ post.content }}</p>
      <small>Por: {{ post.author }}</small>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [ /* Aquí irían las publicaciones obtenidas desde la API */ ]
    };
  }
};
</script>

<style>
.container-main{
  background-color: #2f3231;
  height: 100vh;
}
</style>
