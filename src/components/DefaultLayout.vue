<script setup>
import Navbar from "../components/Navbar.vue";
import AdminNavbar from "../router/views/admin/AdminNavbar.vue";
import Category from "./Category.vue";
import { user } from "../store/store";
</script>

<template>
  <div class="header">
    <router-view name="NavigationBar" class="z-10"></router-view>
  </div>
  <div class="viewport z-0 pt-24 relative bg-neutral-300 min-h-screen">
    <router-view />
  </div>
</template>

<style scoped></style>
