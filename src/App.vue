<script setup>
import { RouterView } from 'vue-router'
import BottomNavigation from '@/components/BottomNavigation.vue'
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <custom-navbar class="sticky top-0" />
  <main class="scroll-smooth animate-showFromTop px-5" role="main">
    <RouterView />
  </main>
  <BottomNavigation class="flex md:hidden" />
</template>

<style scoped>
.animate-showFromTop {
  animation: showFromTop 2s ease-in-out;
}

@keyframes showFromTop {
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
