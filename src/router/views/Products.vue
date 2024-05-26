<script setup>
import { ref, reactive, onBeforeMount } from "vue";
// import cart from "../../store/cart";

import AddFev from "../../assets/icons/AddFev.vue";
import { fetchPublicApi, apiBase } from "../../store/store";

const products = ref([]);
// onBeforeMount(() => {
//   const res = authStore.fetchPublicApi("/api/products", {}, "GET");
//   res.then((data) => {
//     console.log(data);
//     products.value = data;
//   });
// });

onBeforeMount(() => {
  const res = fetchPublicApi("/api/products", {}, "GET");
  res.then((response) => {
    console.log(response);
    products.value = response.data;
  });
});

const addedToFev = ref(false);
</script>

<template>
  <div class="main pb-12">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4"
    >
      
      <div class="mx-auto px-5" v-for="product in products" :key="product.id">
        <div
          class="max-w-xs min-w-56 h-80 rounded-lg bg-white p-2 pt-3 shadow duration-150 hover:scale-105 hover:shadow-md"
        >
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img
              class="rounded-lg h-4/6 object-center cursor-pointer mx-auto"
              :src="apiBase + '/' + product.image"
              alt="product"
            />
          </router-link>
          <div class="middle flex justify-between">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <p class="my-4 pl-4 font-bold text-gray-500">
                {{ product.name }}
              </p>
            </router-link>
            <button class="w-6">
              <AddFev class="w-full" />
            </button>
          </div>

          <div class="bottom flex justify-between items-center">
            <p class="ml-3 text-sm font-bold text-gray-800">
              ${{ product.price }}
            </p>
            <button
              @click="cart.addItem(product)"
              class="add-cart py-1 px-2 text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white border-2 border-black rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
