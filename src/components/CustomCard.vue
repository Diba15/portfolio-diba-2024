<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  githubLink: String,
  subjects: Array,
  under_dev: Boolean,
})
</script>

<template>
  <div
    class="flex flex-col-reverse mb-10 text-center items-center gap-3 md:gap-0 md:items-start md:text-start md:flex-row justify-between h-full"
  >
    <div class="flex flex-col justify-between gap-5 w-full">
      <div>
        <div class="flex flex-col-reverse md:flex-row items-center gap-2">
          <a v-bind:href="`${link}`" target="_blank" class="font-bold text-3xl text-green-600">{{
            title
          }}</a>
          <div
            v-if="under_dev"
            class="flex gap-1 items-center bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full ml-2"
          >
            <span class="relative flex size-3">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
              ></span>
              <span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>
            <p>Under Development</p>
          </div>
        </div>
        <h1 class="font-semibold text-md text-gray-300 max-w-lg">{{ description }}</h1>
        <div class="flex flex-wrap gap-2 my-2 justify-center md:justify-start">
          <div
            v-for="subject in subjects"
            v-bind:key="subject"
            class="bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold"
          >
            {{ subject }}
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-center md:justify-start gap-2">
          <a
            :href="link"
            target="_blank"
            class="px-5 py-2 bg-green-600 rounded-lg text-md text-white font-semibold hover:bg-green-700 transition-all duration-300 ease-in-out"
          >
            <i class="pi pi-globe"></i> Website
          </a>
          <a
            :href="githubLink"
            target="_blank"
            class="px-5 py-2 bg-gray-800 rounded-lg text-md text-white font-semibold hover:bg-gray-900 transition-all duration-300 ease-in-out"
          >
            <i class="pi pi-github"></i> Github
          </a>
        </div>
      </div>
    </div>
    <img
      :src="image"
      :alt="title"
      class="min-w-[50%] shadow-lg shadow-green-800 md:w-1/2 hover:scale-110 transition-all duration-300 ease-in-out"
    />
  </div>
</template>

<style scoped></style>
