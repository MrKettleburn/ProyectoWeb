<script setup>
import { ref } from 'vue';

// Declaración de variables reactivas
const year = ref(new Date().getFullYear());
</script>

<template>
    <footer class="footer">
      <p>&copy; 2024 Mi Página Web. Todos los derechos reservados.</p>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  </style>