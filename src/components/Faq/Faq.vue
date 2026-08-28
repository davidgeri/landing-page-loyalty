<script lang="ts" setup>
import { ref } from 'vue'
import type { FaqComponent } from '../../types/main'
import OutlinePill from '../outlinepill/OutlinePill.vue';

const openFaqId = ref<number | null>(0)

const props = defineProps<FaqComponent>()

const toggleFaq = (index: number) => {
  openFaqId.value = openFaqId.value === index ? null : index
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div class="flex justify-center mb-4"  :class="props.pill === undefined ? 'hidden' : 'block'">
        <OutlinePill :text="props.pill" :class-pil="props.style" />
      </div>

    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-stone-800 mb-3">
        {{ props.HeadTitle }} <span :class="props.style === undefined ? 'text-stone-800' : props.style">{{ props.Title
          }}</span>
      </h2>
      <p class="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">{{ props.desk }}</p>
    </div>

    <div class="space-y-4">
      <div v-for="(faq, index) in props.faqComp" :key="index"
        class="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-300">
        <button @click="toggleFaq(index)"
          class="w-full flex items-center justify-between p-5 text-left focus:outline-none">
          <div class="flex items-center space-x-4">
              <component :is="faq.icon"></component>
            <span class="font-bold text-gray-900 text-base sm:text-lg">{{ faq.question }}</span>
          </div>

          <svg class="w-5 h-5 text-gray-600 shrink-0 transition-transform duration-300 ml-4"
            :class="{ 'rotate-180': openFaqId === index }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <div class="grid transition-all duration-300 ease-in-out"
          :class="openFaqId === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
          <div class="overflow-hidden">
            <div class="px-5 pb-6 pt-0 text-gray-500 text-sm sm:text-base leading-relaxed">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>