<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <h1 class="navbar-brand">Examen</h1>
      <div>
        <RouterLink exact-active-class="activo" class="me-2" to="/">Inicio</RouterLink>
        <RouterLink exact-active-class="activo" to="/tareas">tareas </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<style scoped>
.activo{
  color: black;
}
</style>