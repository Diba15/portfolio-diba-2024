<script setup>
import StudentService from '@/services/model/Student.js'
import WorkService from '@/services/model/Work.js'
import CertificateService from '@/services/model/Certificate.js'
import { ref, onMounted, computed } from 'vue'

defineOptions({
  name: 'AboutMe',
})

const workExperience = ref([])
const currentPageWork = ref(1)
const itemsPerPageWork = ref(3)

const education = ref([])
const currentPageEdu = ref(1)
const itemsPerPageEdu = ref(3)

const certificates = ref([])
const currentPage = ref(1)
const itemsPerPage = ref(3)

onMounted(async () => {
  try {
    const [workRes, eduRes, certRes] = await Promise.all([
      WorkService.getAll(),
      StudentService.getAll(),
      CertificateService.getAll(),
    ])
    workExperience.value = Array.isArray(workRes.data) ? workRes.data.flat() : []
    education.value = Array.isArray(eduRes.data) ? eduRes.data.flat() : []
    certificates.value = Array.isArray(certRes.data) ? certRes.data.flat() : []
  } catch (error) {
    console.error('Error fetching data for about page:', error)
  }
})

const paginatedWorkExperience = computed(() => {
  const start = (currentPageWork.value - 1) * itemsPerPageWork.value
  const end = start + itemsPerPageWork.value
  return workExperience.value.slice(start, end)
})

const totalPagesWork = computed(() => {
  return Math.ceil(workExperience.value.length / itemsPerPageWork.value) || 1
})

const nextPageWork = () => {
  if (currentPageWork.value < totalPagesWork.value) {
    currentPageWork.value++
  }
}

const prevPageWork = () => {
  if (currentPageWork.value > 1) {
    currentPageWork.value--
  }
}

const paginatedEducation = computed(() => {
  const start = (currentPageEdu.value - 1) * itemsPerPageEdu.value
  const end = start + itemsPerPageEdu.value
  return education.value.slice(start, end)
})

const totalPagesEdu = computed(() => {
  return Math.ceil(education.value.length / itemsPerPageEdu.value) || 1
})

const nextPageEdu = () => {
  if (currentPageEdu.value < totalPagesEdu.value) {
    currentPageEdu.value++
  }
}

const prevPageEdu = () => {
  if (currentPageEdu.value > 1) {
    currentPageEdu.value--
  }
}

const paginatedCertificates = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return certificates.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(certificates.value.length / itemsPerPage.value) || 1
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
  <div
    class="animate-showFromTop flex flex-col-reverse min-h-fit md:flex-row gap-10 md:gap-48 max-w-screen-lg mx-auto items-center md:items-start justify-center text-white"
  >
    <div class="max-h-fit">
      <h1 class="font-bold text-3xl">Dimas Bagas Saputro</h1>
      <h3 class="font-bold text-2xl text-green-600">Frontend Developer</h3>
      <a href="mailto:dimaabagas73@gmail.com" class="text-gray-300 hover:underline"
        >dimaabagas73@gmail.com</a
      >
      <p class="mt-5 max-w-72">
        Greetings, my name is <span class="text-green-600">Dimas Bagas Saputro</span>, and I hold a
        Bachelor’s degree in Informatics Engineering from Telkom University. I possess a keen
        interest and am presently dedicating my efforts towards the domains of
        <span class="text-green-600">Frontend Web Development</span> and
        <span class="text-green-600">Backend Web Development</span>.
      </p>
    </div>
    <div class="max-h-fit">
      <img src="@/assets/Dimas.png" alt="Illustration Coffee" class="img" />
    </div>
  </div>

  <div
    class="animate-showFromTop flex flex-col min-h-fit my-20 gap-10 max-w-screen-md mx-auto items-center md:items-start justify-center align-middle text-white"
  >
    <div class="">
      <h1 class="font-bold text-2xl md:text-3xl flex flex-row gap-5 items-center">
        <i class="pi pi-briefcase"></i> Work Experience
      </h1>
      <h1></h1>
    </div>
    <div
      class="flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-between w-fit mx-10 md:mx-0"
      v-for="work in paginatedWorkExperience"
      v-bind:key="work._id"
    >
      <div class="flex flex-row gap-5">
        <i class="pi pi-briefcase text-5xl text-green-600"></i>
        <div class="grow">
          <span class="font-bold text-md">{{ work.company }}</span> <br />
          <span class="font-semibold text-sm text-green-600">{{ work.title }}</span>
          <h6 class="text-gray-300">{{ work.duration }}</h6>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="skill in work.skills"
              v-bind:key="skill"
              class="bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-4 justify-end w-full mt-2">
      <button @click="prevPageWork" :disabled="currentPageWork === 1">
        <i class="pi pi-chevron-circle-left"></i>
      </button>
      <span> {{ currentPageWork }}/{{ totalPagesWork }}</span>
      <button @click="nextPageWork" :disabled="currentPageWork === totalPagesWork">
        <i class="pi pi-chevron-circle-right"></i>
      </button>
    </div>
  </div>

  <div
    class="animate-showFromTop flex flex-col min-h-fit gap-10 mb-20 max-w-screen-md mx-auto items-center md:items-start justify-center text-white"
  >
    <div class="">
      <h1 class="font-bold text-2xl md:text-3xl flex flex-row gap-5 items-center">
        <i class="pi pi-graduation-cap"></i> Education
      </h1>
      <h1></h1>
    </div>
    <div
      class="flex flex-col md:flex-row gap-3 md:gap-10 justify-between items-center mx-10 md:mx-0"
      v-for="edu in paginatedEducation"
      v-bind:key="edu._id"
    >
      <div class="flex flex-row gap-5">
        <img class="w-20 h-20" src="@/assets/tel_u_logo.png" alt="" />
        <div class="grow">
          <span class="font-bold text-md">{{ edu.company }}</span> <br />
          <span class="font-semibold text-sm text-green-600">{{ edu.title }}</span>
          <h6 class="text-gray-300 items-start">{{ edu.duration }}</h6>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="subject in edu.subjects"
              v-bind:key="subject"
              class="bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {{ subject }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-4 justify-end w-full mt-2">
      <button @click="prevPageEdu" :disabled="currentPageEdu === 1">
        <i class="pi pi-chevron-circle-left"></i>
      </button>
      <span> {{ currentPageEdu }}/{{ totalPagesEdu }}</span>
      <button @click="nextPageEdu" :disabled="currentPageEdu === totalPagesEdu">
        <i class="pi pi-chevron-circle-right"></i>
      </button>
    </div>
  </div>

  <div
    class="animate-showFromTop flex flex-col min-h-fit my-20 gap-10 max-w-screen-md mx-auto items-center md:items-start justify-center align-middle text-white"
  >
    <div class="">
      <h1 class="font-bold text-2xl md:text-3xl flex flex-row gap-5 items-center">
        <i class="pi pi-verified"></i> Certificate
      </h1>
      <h1></h1>
    </div>
    <div
      class="flex flex-col md:flex-row gap-3 md:gap-10 items-center justify-between w-fit mx-10 md:mx-0"
      v-for="certificate in paginatedCertificates"
      v-bind:key="certificate.id"
    >
      <div class="flex flex-row gap-5">
        <i class="pi pi-file-check text-5xl text-green-600"></i>
        <div class="grow">
          <span class="font-bold text-md"
            >{{ certificate.title }} -
            <a :href="certificate.url" target="__blank" class="text-green-600"
              >Credentials <i class="pi pi-external-link text-sm"></i
            ></a>
          </span>
          <br />
          <span class="font-semibold text-sm text-green-600">{{ certificate.issuer }}</span>
          <h6 class="text-gray-300">
            {{ certificate.issue_date }} -
            {{ certificate.expiry_date ? certificate.expiry_date : 'Present' }}
          </h6>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="skill in certificate.skills"
              v-bind:key="skill"
              class="bg-gray-800 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-4 justify-end w-full mt-2">
      <button @click="prevPage" :disabled="currentPage === 1">
        <i class="pi pi-chevron-circle-left"></i>
      </button>
      <span> {{ currentPage }}/{{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        <i class="pi pi-chevron-circle-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.img {
  width: 300px;
  height: 300px;
  object-position: bottom;
  border-radius: 50%;
  object-fit: cover;
}

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
