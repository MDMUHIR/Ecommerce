<script setup>
import { data } from "../../../store/data";

import { reactive, ref } from "vue";
import {
  fetchUploadApi,
  apiBase,
  fetchAuthorizedApi,
} from "../../../store/store";

const productData = reactive({
  name: "",
  description: "",
  image: "",
  price: null,
  stock: 1,
  product_id: null,
  category_id: 2,
});

const showAddForm = ref(false);
const showUpdateForm = ref(false);
const previewImage = ref(null);

// Actions

const selectFile = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);

    productData.image = file;
  }
};

const addProduct = () => {
  console.log("ADD NEW");
  const res = fetchUploadApi("/api/admin/products/add", productData);
  res.then((response) => {
    data.products.push(response.data);
    cancelSubmition();
  });
};
const deleteProduct = (index, product) => {
  const res = fetchAuthorizedApi(
    `/api/admin/products/delete/${product.id}`,
    {},
    "DELETE"
  );
  res.then((response) => {
    data.products.splice(index, 1);
  });
};
const editSelection = (product) => {
  console.log(product);
  showUpdateForm.value = true;
  productData.product_id = product.id;
  productData.name = product.name;
  productData.description = product.description;
  productData.image = product.image;
  productData.price = product.price;
  productData.stock = product.stock;
  productData.category_id = product.category_id;
  previewImage.value = apiBase + "/" + product.image;
};

const updateProduct = () => {
  console.log("Update");
  const res = fetchUploadApi("/api/admin/products/update", productData);
  res.then((response) => {
    if (response.status) {
      for (let i = 0; i < data.products.length; i++) {
        if (data.products[i].id == productData.product_id) {
          data.products[i] = response.data;

          break;
        }
      }
    }
    cancelSubmition();
  });
};

const formSubmition = () => {
  if (showAddForm.value == true) {
    addProduct();
  } else if (showUpdateForm.value == true) {
    updateProduct();
  }
};

const cancelSubmition = () => {
  productData.name = "";
  productData.description = "";
  productData.image = "";
  productData.price = 0;
  productData.stock = 1;
  productData.product_id = null;
  productData.category_id = 1;
  showAddForm.value = false;
  showUpdateForm.value = false;
  previewImage.value = null;
};
</script>

<template>
  <div class="main mt-10">
    <!-- AddForm Toggler Button -->
    <button
      v-show="!showAddForm"
      @click="showAddForm = true"
      type="submit"
      class="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-purple-600 hover:bg-purple-700 duration-150 mb-6"
    >
      Add New Product
    </button>
    <!-- ///// -->
    <form
      v-if="showAddForm || showUpdateForm"
      @submit.prevent="formSubmition()"
    >
      <div class="md:px-20 pt-6 mb-6">
        <div class="bg-white rounded-md p-6 max-w-2xl mx-auto">
          <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
            Add Product
          </h1>
          <div class="space-y-4">
            <div>
              <label for="title" class="text-lx font-serif">Title:</label>
              <input
                v-model="productData.name"
                type="text"
                placeholder="Product name"
                id="title"
                class="w-full outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label for="description" class="block mb-2 text-lg font-serif"
                >Description:</label
              >
              <textarea
                v-model="productData.description"
                id="description"
                cols="30"
                rows="5"
                placeholder="whrite here.."
                class="w-full font-serif p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>
            <div class="flex items-center">
              <label for="price" class="text-lx font-serif mr-4">Price:</label>
              <input
                v-model="productData.price"
                type="text"
                placeholder="Enter Price"
                id="price"
                class="w-1/2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div class="flex items-center">
              <label for="stock" class="text-lx font-serif mr-4">Stock:</label>
              <input
                v-model="productData.stock"
                type="text"
                placeholder="Total in Stock"
                id="stock"
                class="w-1/2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>

            <div>
              <label class="text-lx font-serif">Category:</label>
              <select
                v-model="productData.category_id"
                class="w-1/2 ml-4 outline-none py-1 px-2 text-md border-2 rounded-md"
              >
                <option
                  v-for="(item, index) in data.categories"
                  :key="index"
                  :value="item.id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div class="flex">
              <label for="image" class="text-lx font-serif">
                <svg
                  class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  /></svg
              ></label>
              <input
                @change="selectFile($event)"
                type="file"
                placeholder="name"
                id="image"
                class="m-2 outline-none py-1 px-2 text-md border-2 rounded-md hidden"
              />
              <img
                v-if="previewImage"
                :src="previewImage"
                class="w-32 h-32 object-cover m-2 rounded overflow-hidden"
              />
            </div>
            <div class="btn flex justify-between">
              <button
                @click="cancelSubmition()"
                class="mx-auto block rounded-md text-lg text-red-600 font-bold border px-4 hover:bg-neutral-200 duration-150"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 duration-150"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <!-- Product show -->

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4"
    >
      <div
        class="mx-auto px-5"
        v-for="(product, index) in data.products"
        :key="index"
      >
        <div
          class="max-w-xs min-w-56 h-80 rounded-lg bg-white p-2 pt-3 shadow duration-150 hover:scale-105 hover:shadow-md"
        >
          <router-link to="">
            <img
              class="rounded-lg h-4/6 object-center cursor-pointer mx-auto"
              :src="apiBase + '/' + product.image"
              alt="product"
            />
          </router-link>
          <div class="middle flex justify-between">
            <router-link to="">
              <p class="my-4 pl-4 font-bold text-gray-500">
                {{ product.name }}
              </p>
            </router-link>
          </div>

          <div class="bottom flex justify-between items-center">
            <button
              @click="editSelection(product)"
              class="add-cart py-1 px-2 text-sm font-semibold bg-stone-500 hover:bg-stone-600 text-white border border-black rounded"
            >
              Edit
            </button>
            <button
              @click="deleteProduct(index, product)"
              class="add-cart py-1 px-2 text-sm font-semibold bg-red-500 hover:bg-red-600 text-white border border-black rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
