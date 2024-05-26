<script setup>
import { ref } from "vue";

import { user, isAuthenticated } from "../../../store/store";
import dropdown from "../../../components/dropdown.vue";

import UserIcon from "../../../assets/icons/UserIcon.vue";
import { showDdMenu, togDdMenu } from "../../../store/controller.js";
</script>

<template>
  <div
    class="nab w-full border-b-2 shadow-md bg-orange-600 fixed top-0 left-0 right-0 text-white flex justify-between items-center py-8"
  >
    <div
      class="nav-home flex justify-center items-center h-full w-56 px-2 oreder-1"
    >
      <router-link :to="{ name: 'adminDashboard' }">
        <button class="font-bold text-2xl">Admin Panel</button>
      </router-link>
    </div>
    <!-- -------------------------------------------
        nav Admin items
        --------------------------------------------->
    <div
      class="nav-center flex justify-center items-center py-2 h-full w-full px-2"
    >
      <div class="nav-customer-items flex justify-center items-center gap-4">
        <router-link :to="{ name: 'productManage' }">
          <button
            class="nav-item text-lg font-semibold relative inline mx-2 before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0"
          >
            Products
          </button>
        </router-link>
        <router-link :to="{ name: 'categoryManage' }">
          <button
            class="nav-item text-lg font-semibold relative inline mx-2 before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0"
          >
            Categories
          </button>
        </router-link>
        <router-link :to="{ name: 'userControl' }">
          <button
            class="nav-item text-lg font-semibold relative inline mx-2 before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0"
          >
            Users
          </button>
        </router-link>
      </div>
      <div class="nav-end flex items-center">
        <button
          v-if="isAuthenticated"
          @click="togDdMenu()"
          class="relative inline mx-2 rounded-full text-sm font-medium before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0 hover:scale-125 duration-300"
        >
          <UserIcon />
        </button>

        <dropdown v-if="showDdMenu" class="absolute right-0 top-28" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
