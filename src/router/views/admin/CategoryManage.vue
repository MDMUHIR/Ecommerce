<script setup>
import {
  fetchUploadApi,
  fetchAuthorizedApi,
  getCategories,
  apiBase,
} from "../../../store/store";
import { data } from "../../../store/data";
import AddPostForm from "../../../components/reusable/AddPostForm.vue";
import { reactive, ref } from "vue";

const categoryData = reactive({
  name: "",
  description: "",
  image: null,
});
const previewImage = ref(null);
const showAddForm = ref(false);

const selectFile = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);

    categoryData.image = file;
  }
};

const addCategory = () => {
  const res = fetchUploadApi("/api/admin/categories/add", categoryData);
  res.then((response) => {
    data.categories.push(response.data);
    showAddForm.value = false;
    categoryData.name = "";
    categoryData.description = "";
    categoryData.image = null;
    previewImage.value = null;
  });
};

const deleteCategory = (index, item) => {
  const res = fetchAuthorizedApi(
    "/api/admin/categories/delete/" + item.id,
    {},
    "DELETE"
  );
  res.then((response) => {
    data.categories.splice(index, 1);
  });
};
</script>

<template>
  <div class="mt-10">
    <button
      v-show="!showAddForm"
      @click="showAddForm = true"
      type="submit"
      class="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600 hover:bg-indigo-700 duration-150 mb-6"
    >
      Add New Category
    </button>
    <!-- <AddPostForm /> -->
    <form v-if="showAddForm" @submit.prevent="addCategory()">
      <div class="md:px-20 pt-6 mb-6">
        <div class="bg-white rounded-md p-6 max-w-2xl mx-auto">
          <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
            Add Category
          </h1>
          <div class="space-y-4">
            <div>
              <label for="title" class="text-lx font-serif">Title:</label>
              <input
                v-model="categoryData.name"
                type="text"
                placeholder="Category name"
                id="title"
                class="w-full outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label for="description" class="block mb-2 text-lg font-serif"
                >Description:</label
              >
              <textarea
                v-model="categoryData.description"
                id="description"
                cols="30"
                rows="5"
                placeholder="whrite here.."
                class="w-full font-serif p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
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
                @click="showAddForm = false"
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

    <!-- /////////////////// -->
    <div class="rounded-lg border-2">
      <template v-for="(item, index) in data.categories" :key="index">
        <div
          class="justify-between items-center rounded-lg p-6 shadow-md sm:flex sm:justify-start"
        >
          <p class="text-xl font-semibold mr-4">{{ index + 1 }}</p>
          <img
            :src="apiBase + '/' + item.image"
            alt="product-image"
            class="w-full rounded-lg sm:w-40"
          />
          <div
            class="sm:ml-4 sm:flex sm:w-full sm:justify-between items-center"
          >
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ item.name }}</h2>
              <p class="mt-1 text-xs text-gray-700">{{ item.description }}</p>
            </div>
            <div
              class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
            >
              <div class="flex items-center space-x-4">
                <!-- <button class="cursor-pointer duration-150 hover:text-red-500">
                  Edit
                </button> -->

                <button @click="deleteCategory(index, item)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
