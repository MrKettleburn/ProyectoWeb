<script setup>
import { ref } from 'vue';

// Declaración de variables reactivas
const message = ref('Bienvenido a nuestra página');
</script>

<template>
    <main class="main-content">
      <h2>Bienvenido a nuestra página</h2>
      <p>Esta es la sección principal del contenido.</p>
    </main>
  </template>
  
  <style scoped>
  .main-content {
    padding: 2rem;
    text-align: center;
  }
  </style>