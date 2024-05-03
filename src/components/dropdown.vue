<script setup>
import authStore from "../store/store";
import { togDdMenu } from "../store/controller.js";
</script>

<template>
  <div
    class=" z-20 w-56 pt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"
  >
    <button
      class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <img
        class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
        src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
        alt="jane avatar"
      />
      <div class="mx-1">
        <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">
          {{ authStore.user.name }}
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ authStore.user.email }}
        </p>
      </div>
    </button>

    <hr class="border-gray-200 dark:border-gray-700" />

    <button
      class="block w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      view profile
    </button>

    <button
      class="flex items-center justify-center w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 mr-2"
      >
        <path
          fill-rule="evenodd"
          d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z"
          clip-rule="evenodd"
        />
      </svg>

      Saved
    </button>

    <button
      class="block w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Orders
    </button>

    <hr class="border-gray-200 dark:border-gray-700" />

    <button
      class="block w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Invite Friends
    </button>

    <hr class="border-gray-200 dark:border-gray-700" />

    <button
      class="block w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Help & Support
    </button>
    <button
      class="block w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Contact
    </button>
    <hr class="border-gray-200 dark:border-gray-700" />
    <button
      @click="authStore.logout()"
      class="flex justify-center items-center  w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 mr-2"
      >
        <path
          fill-rule="evenodd"
          d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z"
          clip-rule="evenodd"
        />
      </svg>

      Log Out
    </button>
    <hr class="border-gray-200 dark:border-gray-700" />
    <button
      @click="togDdMenu()"
      class="Close w-full py-1 border-gray-200 hover:bg-gray-700 px-5 text-red-600 font-semibold text-center"
    >
      Close
    </button>
  </div>
</template>

<style scoped></style>
