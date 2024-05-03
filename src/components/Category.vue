<script setup>
import { reactive, ref } from "vue";
import { togCategoryMenu } from "../store/controller";

const categories = reactive({
  Electronics: {
    Mobiles: ["Samsung", "Apple", "OnePlus"],
    Laptops: ["Dell", "HP", "Apple"],
    Accessories: ["Headphones", "Chargers", "Cables"],
  },
  Fashion: {
    Men: ["Shirts", "Pants", "Shoes"],
    Women: ["Dresses", "Tops", "Shoes"],
    Kids: ["T-shirts", "Shorts", "Shoes"],
  },
  "Home and Kitchen": {
    Furniture: ["Beds", "Sofas", "Tables"],
    Kitchen: ["Cookware", "Tableware", "Storage"],
    Decor: ["Lamps", "Wall Art", "Clocks"],
  },
});

const openedCategory = ref(null);
const openedSubCategory = ref(null);

const toggleCategory = (categoryName) => {
  if (openedCategory.value === categoryName) {
    openedCategory.value = null;
  } else {
    openedCategory.value = categoryName;
  }
};

const toggleSubCategory = (subCategoryName) => {
  if (openedSubCategory.value === subCategoryName) {
    openedSubCategory.value = null;
  } else {
    openedSubCategory.value = subCategoryName;
  }
};
</script>
<template>
  <div class="w-auto mx-auto bg-gray-600  rounded-b-lg overflow-hidden">
    <div
      v-for="(category, categoryName) in categories"
      :key="categoryName"
      class="border-gray-200"
    >
      <!-- category -->
      <div
        @click="toggleCategory(categoryName)"
        class="w-full px-4 pt-4 flex justify-between items-center text-left"
      >
        <h2
          :class="` font-semibold text-lg hover:text-red-400 cursor-pointer transition-transform duration-200 ease-in-out ${
            openedCategory === categoryName ? 'text-red-400' : ''
          }`"
        >
          {{ categoryName }}
        </h2>
        <p
          :class="` transition-transform duration-200 ease-in-out ms-2 ${
            openedCategory === categoryName ? 'transform rotate-90' : ''
          }`"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </div>
      <!-- category -->

      <div
        v-if="openedCategory === categoryName"
        v-for="(subCategory, subCategoryName) in category"
        :key="subCategoryName"
        class="ml-4 p-1"
      >
        <!-- Sub category -->
        <div class="ps-6 pr-8 flex justify-between items-center">
          <button
            @click="toggleSubCategory(subCategoryName)"
            :class="`font-semibold text-md hover:text-blue-400 ${
              openedSubCategory === subCategoryName ? 'text-blue-400' : ''
            }`"
          >
            {{ subCategoryName }}
          </button>
          <p
            :class="` transition-transform duration-200 ease-in-out ${
              openedSubCategory === subCategoryName ? 'transform rotate-90' : ''
            }`"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </p>
        </div>
        <!-- Sub category -->

        <!-- Subcategory Items -->
        <ul
          v-if="
            openedSubCategory === subCategoryName &&
            openedCategory === categoryName
          "
          class="list-disc list-inside ml-8 text-sm font-semibold"
        >
          <li
            v-for="(item, index) in subCategory"
            :key="index"
            class="hover:text-purple-400 cursor-pointer"
          >
            {{ item }}
          </li>
        </ul>
        <!-- Subcategory Items -->
      </div>
    </div>
    <hr class="border-gray-200 mt-5 dark:border-gray-700" />
    <button
      @click="togCategoryMenu()"
      class="Close w-full py-1 border-gray-200 hover:bg-gray-700 px-5 text-red-600 font-semibold text-center "
    >
      Close
    </button>
  </div>
</template>
