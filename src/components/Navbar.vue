<script setup>
import { ref } from "vue";
import CartIco from "../components/reusable/CartIco.vue";
// import authStore from "../store/store";
import dropdown from "./dropdown.vue";
import Category from "./Category.vue";
import UserIcon from "../assets/icons/UserIcon.vue";
import {
  showDdMenu,
  togDdMenu,
  showCategoryMenu,
  togCategoryMenu,
} from "../store/controller.js";
</script>

<template>
  <div
    class="nab w-full border-b-2 shadow-md bg-violet-600 fixed top-0 left-0 right-0 text-white"
  >
    <div class="nav-top flex justify-between items-center">
      <div
        class="nav-home flex justify-center items-center h-full px-2 oreder-1"
      >
        <router-link :to="{ name: 'home' }">
          <button class="font-bold text-2xl">Ecommerce</button>
        </router-link>
      </div>

      <div
        class="nav-center flex flex-col justify-between items-center py-2 h-full w-full px-2"
      >
        <div
          class="search-bar bg-white flex items-center rounded-lg overflow-hidden p-1 text-black md:w-1/2"
        >
          <input
            type="text "
            class="px-2 w-full rounded outline-none text-sm font-semibold"
            placeholder="Search"
          />
          <button class="border-l-2 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
            >
              <path
                d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="nav-items flex justify-center items-center gap-4">
          <router-link :to="{ name: 'products' }">
            <button
              class="nav-item text-sm font-semibold relative inline mx-2 before:bg-orange-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0"
            >
              Products
            </button>
          </router-link>
          <router-link :to="{ name: 'products' }">
            <button
              @click="togCategoryMenu()"
              class="nav-item text-sm font-semibold relative inline mx-2 before:bg-orange-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0"
            >
              Categories
            </button>
          </router-link>

          <router-link :to="{ name: 'support' }">
            <button
              class="nav-item text-sm font-semibold relative inline mx-2 before:bg-orange-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0"
            >
              Support
            </button>
          </router-link>
        </div>
      </div>

      <div
        class="nav-end flex flex-col md:flex-row justify-between items-center"
      >
        <router-link :to="{ name: 'cart' }">
          <CartIco />
        </router-link>

        <button
          @click="togDdMenu()"
          class="relative inline mx-2 text-sm font-medium before:bg-orange-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0"
        >
          <!--  v-if="authStore.isAuthenticated" -->
          <UserIcon />
        </button>
        <router-link :to="{ name: 'login' }" >
          <button
            class="relative flex mx-2 text-sm font-medium before:bg-orange-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z"
                clip-rule="evenodd"
              />
            </svg>

            Login
          </button>
        </router-link>
        <dropdown v-if="showDdMenu" class="absolute right-0 top-16" />
      </div>
    </div>

    <div class="nav-bottom relative bg-violet-600">
      <Category v-if="showCategoryMenu" class="absolute left-0 top-0" />
    </div>
  </div>
</template>

<style scoped></style>
