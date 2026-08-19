<script setup lang="ts">

import { MoveRight } from "lucide-vue-next"

import { RouterLink } from "vue-router"

interface Cta {
  subheading: string
  title: string
  desk: string
}

interface Button {
    leftbtn: {
      name: string
      navto: string
    }
    rightbtn: {
      name: string
      navto: string
    }
}

interface Props {
  view : Cta
  button : Button
}

const props = defineProps<Props>()

</script>

<template>
  <section class="py-20 px-4">
    <div class="max-w-4xl mx-auto cursor-help hover:border-black hover:shadow-xl duration-300 bg-white border border-gray-200 rounded-2xl rounded-b-none p-10 text-center shadow-sm">
      <span class="flex justify-center">
        <div class="flex items-center py-1 text-md font-semibold rounded-full mb-4 gap-3">
          <p class="w-4 h-4 rounded-full bg-green-500 absolute animate-ping"></p>
          <p class="w-4 h-4 rounded-full bg-green-500"></p>
          <p>{{ props.view.subheading }}</p>
        </div>
      </span>
      <h2 class="text-2xl md:text-5xl font-bold text-gray-900 mb-4">{{ props.view.title }}</h2>
      <p class="text-md text-gray-500 mb-8 max-w-lg mx-auto">
        {{ props.view.desk }}
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <RouterLink :to="props.button.leftbtn.navto"
          class=" bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-md text-xl font-semibold transition-colors">
          {{ props.button.leftbtn.name }}
          </RouterLink>
        <RouterLink
          :to="props.button.rightbtn.navto"
          class="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-xl font-semibold transition-colors flex items-center justify-center gap-2 group">
          <span class="flex gap-3">
            {{ props.button.rightbtn.name }}
            <MoveRight class="group-hover:translate-x-2 duration-300" />
          </span>
          </RouterLink>
      </div>
    </div>
  </section>

  <div class="w-full h-16 bg-[#111827]"></div>
</template>