<template>
  <div class="container-main">
    <h2>Home</h2>
    
    <div v-for="(post, index) in posts" :key="index" class="post">
      <p>{{ post.content }}</p>
      <small>Por: {{ post.author }}</small>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          content: "¡Hola mundo!",
          author: "Usuario 1"
        },
        {
          content: "Estoy aprendiendo Vue.js",
          author: "Usuario 2"
        },
        {
          content: "¡Qué bonito día!",
          author: "Usuario 3"
        }
      ]
    };
  }
};
</script>

<style>
.container-main {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.post {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  width: 80%;
  max-width: 600px;
  background-color: #f9f9f9;
  color: black;
}
</style>
