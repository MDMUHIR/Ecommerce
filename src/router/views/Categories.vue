<script setup>
import { fetchPublicApi, getCategories } from "../../store/store";
import { data } from "../../store/data";
import { onBeforeMount } from "vue";

// onBeforeMount(() => {
//   const response = fetchPublicApi("/api/categories", {}, "GET");
//   response.then((res) => {
//     console.log(res.data);
//     data.categories = res.data;
//   });
// });
getCategories();
</script>

<template>
  <pre class="text-black">{{ data.categories }}</pre>
</template>

<style scoped></style>
