<script setup>
import Navbar from "../components/Navbar.vue";
import Category from "./Category.vue";
</script>

<template>
  <div class="header">
    <Navbar class="z-10" />
  </div>
  <div class="viewport z-0 relative">
   
    <router-view />
  </div>
</template>

<style scoped></style>
