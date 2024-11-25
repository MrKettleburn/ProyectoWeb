<script setup>
  import { ref } from 'vue';
  import Menubar from 'primevue/menubar';
  // Declaración de variables reactivas
  const title = ref('Mi Página Web');
  const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
  </script>

<template>
    <header class="bg-blue-600 text-white p-4 shadow-md">
      <h1 class="text-2xl">{{ title }}</h1>
      <Menubar  :model="items" />
    </header>
  </template>
  
  
  