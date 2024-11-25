<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import Header from '../components/Header.vue';
</script>


<template>
  <div>
    <Header></Header>
    <main>
      <router-view/>
    </main> 
  </div>
 
</template>

<style scoped></style>