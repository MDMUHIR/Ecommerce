<script setup></script>

<template>
  <!-- component -->
  <form>
    <div class="md:px-20 pt-6">
      <div class="bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
        <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
          ADD POST
        </h1>
        <div class="space-y-4">
          <div>
            <label for="title" class="text-lx font-serif">Title:</label>
            <input
              type="text"
              placeholder="title"
              id="title"
              class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
            />
          </div>
          <div>
            <label for="description" class="block mb-2 text-lg font-serif"
              >Description:</label
            >
            <textarea
              id="description"
              cols="30"
              rows="10"
              placeholder="whrite here.."
              class="w-full font-serif p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
            ></textarea>
          </div>

          <!-- icons -->
          <div class="icons flex text-gray-500 m-2">
            <label id="select-image">
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
                />
              </svg>
              <input
                hidden
                type="file"
                multiple
                @change="
                  images = Array.from($event.target.files).map((file) => ({
                    url: URL.createObjectURL(file),
                    name: file.name,
                    preview: ['jpg', 'jpeg', 'png', 'gif'].includes(
                      file.name.split('.').pop().toLowerCase()
                    ),
                    size:
                      file.size > 1024
                        ? file.size > 1048576
                          ? Math.round(file.size / 1048576) + 'mb'
                          : Math.round(file.size / 1024) + 'kb'
                        : file.size + 'b',
                  }))
                "
                x-ref="fileInput"
              />
            </label>
            <div class="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
          </div>

          <!-- Preview image here -->
          <div id="preview" class="my-4 flex">
            <template x-for="(image, index) in images" :key="index">
              <div class="relative w-32 h-32 object-cover rounded">
                <div
                  x-show="image.preview"
                  class="relative w-32 h-32 object-cover rounded"
                >
                  <img
                    :src="image.url"
                    class="w-32 h-32 object-cover rounded"
                  />
                  <button
                    @click="images.splice(index, 1)"
                    class="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"
                  >
                    <span class="mx-auto">×</span>
                  </button>
                  <div
                    x-text="image.size"
                    class="text-xs text-center p-2"
                  ></div>
                </div>
                <div
                  x-show="!image.preview"
                  class="relative w-32 h-32 object-cover rounded"
                >
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-white stroke-indigo-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg> -->
                  <svg
                    class="fill-current w-32 h-32 ml-auto pt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z"
                    />
                  </svg>
                  <button
                    @click="images.splice(index, 1)"
                    class="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"
                  >
                    <span class="mx-auto">×</span>
                  </button>
                  <div
                    x-text="image.size"
                    class="text-xs text-center p-2"
                  ></div>
                </div>
              </div>
            </template>
          </div>

          <button
            class="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600"
          >
            ADD POST
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped></style>
