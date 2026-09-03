<script lang="ts" setup>
import type { FloatingTextCm } from '../../type/main';

const Props = defineProps<FloatingTextCm>()
</script>

<template>
  <div
    :class="[
      'absolute z-20 flex max-w-[calc(100%-1rem)] items-center gap-2 rounded-xl border border-slate-200/60 bg-white/90 px-2.5 py-2 shadow-lg backdrop-blur-md sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3',
      Props.positionClass || 'left-4 bottom-4 sm:left-6 sm:bottom-6'
    ]"
  >
    <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-blue-600 sm:h-9 sm:w-9 sm:rounded-xl">
      <component :is="Props.icon" class="h-4 w-4 sm:h-5 sm:w-5" />
    </div>
    <div class="min-w-0">
      <p class="text-[10px] font-medium text-gray-500 sm:text-[11px]">{{ Props.heading }}</p>
      <p class="text-[11px] font-bold leading-tight text-slate-800 sm:text-sm">{{ Props.title }}</p>
    </div>
  </div>
</template>