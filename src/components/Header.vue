<script setup>
import { ref } from 'vue';

// Declaración de variables reactivas
const title = ref('Mi Página Web');
</script>

<template>
    <header class="header">
      <h1>Mi Página Web</h1>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: #333;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  nav li {
    margin: 0 10px;
  }
  nav a {
    color: white;
    text-decoration: none;
  }
  </style>