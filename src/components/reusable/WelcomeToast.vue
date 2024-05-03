<script setup>
import { togWelcomeToast } from "../../store/controller";
</script>

<template>
  <div
    class="h-screen w-full absolute flex items-center justify-center bg-modal"
  >
    <div
      class="bg-white rounded p-4 m-4 max-w-xs max-h-full text-center shadow-2xl shadow-indigo-500/50 outline outline-offset-2 outline-1"
    >
      <div class="mb-4 text-2xl font-bold">
        <h1>Welcome!</h1>
      </div>
      <div class="mb-8 font-semibold">
        <p>Ready to get started? Keep scrolling to see some great products.</p>
      </div>
      <div class="flex justify-center">
        <button
          
          class="flex-no-shrink text-white py-2 px-4 rounded bg-teal-500 hover:bg-teal-700"
        >
          Let's Go
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
