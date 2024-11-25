<template>
    <div class="fondo">
        
        <div class="contenedorLogin">
          <h2 class="titulo">SPORT GYM</h2>
          <h2 class="titulo">LOGIN</h2>
          <form class="formularioLogin">
            <input class="inputLogin" type="text" placeholder="Nombre Usuario" required/>
            <input class="inputLogin" type="email" placeholder="Correo Electrónico" required/>
            <input class="inputLogin" type="password" placeholder="Contraseña" required/>
            <input class="inputLogin" type="password" placeholder="Confirmar Contraseña" required/>
            <input class="inputLogin" type="checkbox"  required/>Acepto todas las condiciones de SportGym
            <ButtonRegister/>
            <router-link to="/login">Volver al Login</router-link>
          </form>
        </div>
    </div>
    
    
    </template>
    
    <script setup>
       
        import ButtonRegister from './ButtonRegister.vue'
      
    </script>
    
    <style scoped>
    .fondo{
        background-image: url('C:\Users\Yanisbe LA KUKY\Desktop\fondoWeb.jpg');
        background-size: cover;
        background-position: center;
        width: 100vw;
        height: 100vh;
        margin:0;
        padding: 100px;
    }
    
    .contenedorLogin{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 480px;
        background-color: rgba(red, 255, 255, 0.5);
        backdrop-filter: blur(5px);
        border: 2px solid black;
        border-radius: 15px;
        width: 400px;
        text-align: center;
        padding: 15px;
        
    }
    
    .inputLogin{
        border: none;
        background: transparent;
        border-bottom: 2px solid black;
        padding: 10px;
        outline: none;
        font-size: 16px;
        color: rgb(0, 0, 0);
        width: 90%;
        display: flex;
    
    }

    
    input::placeholder{
        color: black;
        opacity: 1;
    }
    
    .formularioLogin{
        background-position: center;
        justify-content: center;
         display: flex;
         flex-direction: column;
         gap: 20px;
         padding: 15px;
         width: 90%;
         border-radius: 8px;
         border-color: white;
         align-items: center;
         color:black;
         
    }
    
    .titulo{
        text-align: center;
        color: black;
        padding: 0;
        margin: 5px;
    }
    </style>