<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  nav ul li a {
    text-decoration: none;
    color: #fff;
  }
  nav ul li a.router-link-active {
    font-weight: bold;
    text-decoration: underline;
  }
  </style>

  <script setup></script>
  