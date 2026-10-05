<script setup>
defineOptions({
  name: 'BottomNavigation',
})
</script>

<template class="sticky bottom-0">
  <nav class="text-white flex justify-between fixed bottom-0 left-0 right-0 bg-[#212124]">
    <RouterLink
      to="/"
      class="flex items-center w-full gap-2 p-5 mx-auto text-center justify-center RouterLink"
    >
      <i class="pi pi-home text-2xl"></i>
      <span>Home</span>
    </RouterLink>
    <RouterLink
      to="/About"
      class="flex items-center w-full gap-2 mx-auto text-center justify-center RouterLink"
    >
      <i class="pi pi-user text-2xl"></i>
      <span>Profile</span>
    </RouterLink>
    <RouterLink
      to="/Work"
      class="flex items-center w-full gap-2 mx-auto text-center justify-center RouterLink"
    >
      <i class="pi pi-briefcase text-2xl"></i>
      <span>Projects</span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.RouterLink {
  transition: all 0.2s ease-in-out;
}
.RouterLink:hover {
  transform: scale(1.1);
}
.RouterLink:active {
  transform: scale(1.05);
}
</style>
