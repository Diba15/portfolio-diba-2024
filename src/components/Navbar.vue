<script setup>
import MainIcon from '@/components/icons/MainIcon.vue'

defineOptions({
  name: 'customNavbar',
})
</script>

<template>
  <nav class="bg-transparent flex p-5 text-white align-middle justify-between px-5">
    <MainIcon
      class="border animateIcon border-white p-5 transition-all duration-300 ease-in-out hover:scale-110"
    />
    <ul class="hidden md:flex flex-row gap-5 text-lg items-center">
      <li>
        <RouterLink
          class="py-2 px-8 flex gap-2 items-center hover:bg-green-600 rounded-3xl transition-all duration-300 ease-in-out hover:scale-110"
          to="/"
          ><i class="pi pi-home"></i> Home
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="py-2 px-8 flex gap-2 items-center hover:bg-green-600 rounded-3xl transition-all duration-300 ease-in-out hover:scale-110"
          to="/About"
          ><i class="pi pi-user"></i> Profile
        </RouterLink>
      </li>
      <li>
        <RouterLink
          class="py-2 px-8 flex gap-2 items-center hover:bg-green-600 rounded-3xl transition-all duration-300 ease-in-out hover:scale-110"
          to="/Work"
          ><i class="pi pi-briefcase"></i> Projects
        </RouterLink>
      </li>
    </ul>
    <div class="flex flex-row gap-5 items-center">
      <a
        href="https://www.instagram.com/dimazzbagazz/"
        target="_blank"
        class="pi pi-instagram text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
        aria-label="Instagram"
        aria-hidden="false"
        role="img"
        aria-labelledby="instagram"
      ></a>
      <a
        href="https://github.com/Diba15"
        target="_blank"
        class="pi pi-github text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
        aria-label="Github"
        aria-hidden="false"
        role="img"
        aria-labelledby="github"
      ></a>
      <a
        href="https://www.linkedin.com/in/dimas-bagas-saputro-b2185373/"
        target="_blank"
        class="pi pi-linkedin text-2xl transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
        aria-label="Linkedin"
        aria-hidden="false"
        role="img"
        aria-labelledby="linkedin"
      ></a>
    </div>
  </nav>
</template>

<style scoped>
.animateIcon:hover {
  animation: animateIcon 2s linear infinite;
}

@keyframes animateIcon {
  0% {
    left: 0;
  }
  50% {
    background-color: #16a34a;
    left: 100%;
  }
  100% {
    left: 0;
  }
}
</style>
