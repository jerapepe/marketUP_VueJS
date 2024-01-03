<template>
    <div v-if="show" class="alert">
      <p>{{ message }}</p>
      <button @click="dismiss">Cerrar</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String,
    },
    data() {
      return {
        show: true,
      };
    },
    methods: {
      dismiss() {
        this.show = false;
      },
    },
  };
  </script>
  
  <style>
  .alert {
    display: absolute;
    padding: 10px;
    background-color: #46292d;
    color: #f1eaeb;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
  }
  </style>
  