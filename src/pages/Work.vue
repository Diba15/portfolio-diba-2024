<script setup>
import CustomCard from '@/components/CustomCard.vue'
import ProjectService from '@/services/model/Project.js'
import { computed, onMounted, ref } from 'vue'

defineOptions({
  name: 'WorkPage',
})

const projects = ref([])

// fetch projects
onMounted(async () => {
  try {
    const response = await ProjectService.getAll()
    projects.value = Array.isArray(response.data) ? response.data.flat() : []
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
})

const currentPage = ref(1)
const itemsPerPage = ref(3)

const paginatedProjects = computed(() => {
  const sortedProjects = [...projects.value].sort((a, b) => b.id_project - a.id_project)
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return sortedProjects.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(projects.value.length / itemsPerPage.value) || 1
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<template>
  <div class="py-5 flex flex-col gap-5 min-h-fit max-w-screen-xl mx-auto px-5 my-5 text-white">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="font-bold text-3xl">Portfolio</h1>
        <p class="text-sm text-gray-300">Here are some of my projects that I have worked on.</p>
      </div>
      <div class="flex gap-4 justify-end self-end">
        <button @click="prevPage" :disabled="currentPage <= 1">
          <i class="pi pi-chevron-circle-left"></i>
        </button>
        <span> {{ currentPage }}/{{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage >= totalPages">
          <i class="pi pi-chevron-circle-right"></i>
        </button>
      </div>
    </div>
    <hr />
    <div class="flex flex-col gap-5">
      <div v-if="paginatedProjects.length > 0" class="flex flex-col gap-5">
        <CustomCard
          v-for="project in paginatedProjects"
          v-bind:key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :subjects="project.subjects"
          :link="project.link"
          :githubLink="project.githubLink"
          :under_dev="project.under_dev"
        />
        <p
          v-if="currentPage === totalPages && totalPages > 0"
          class="text-center text-sm text-gray-300 mb-10"
        >
          Stay tuned for more updates!
        </p>
      </div>
      <div v-else class="flex items-center justify-center">
        <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
