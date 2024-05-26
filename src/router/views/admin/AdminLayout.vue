<script setup>
import AdminNavbar from "./AdminNavbar.vue";

import { getCategories, getProducts, getUsers } from "../../../store/store";

getCategories();

getProducts();
getUsers();
</script>

<template>
  <div class="admin-navbar">
    <AdminNavbar />
  </div>
  <div class="viewport z-0 relative">
    <router-view />
  </div>
</template>

<style scoped></style>
