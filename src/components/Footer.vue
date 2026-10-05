<script setup>
defineOptions({
  name: 'customFooter',
})
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="relative bottom-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#16a34a"
        fill-opacity="1"
        d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,149.3C672,149,768,171,864,170.7C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
  <footer class="bg-green-600 border-0 flex p-5 text-white align-middle justify-between">
    <h1 class="font-bold text-center neue">&copy; Copyright {{ currentYear }}</h1>
    <div class="flex flex-row gap-5">
      <a
        href="https://www.instagram.com/dimazzbagazz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        class="pi pi-instagram text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></a>
      <a
        href="https://github.com/Diba15"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
        class="pi pi-github text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></a>
      <a
        href="https://www.linkedin.com/in/dimas-bagas-saputro-b2185373/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
        class="pi pi-linkedin text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
      ></a>
    </div>
  </footer>
</template>

<style scoped></style>
