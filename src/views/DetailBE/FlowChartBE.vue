<script lang="ts" setup>
import { MoveDown } from '@lucide/vue';

const steps = [
  {
    title: 'Tamu membuka website hotel',
    variant: 'primary'
  },
  {
    title: 'Tamu memilih tanggal check-in dan check-out',
    variant: 'secondary'
  },
  {
    title: 'Tamu memilih tipe kamar yang diinginkan',
    variant: 'primary'
  },
  {
    title: 'Tamu memilih kamar yang tersedia',
    variant: 'secondary'
  },
  {
    title: 'Tamu melakukan konfirmasi pemesanan',
    variant: 'primary'
  },
  {
    title: 'Reservasi masuk ke sistem hotel',
    variant: 'secondary'
  }
];
</script>

<template>
  <section class="w-full py-10 sm:py-14">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <div class="mx-auto flex max-w-100 flex-col items-center">
        <div v-for="(step, index) in steps" :key="step.title" class="w-full">
          <div class="flex justify-center">
            <div
              :class="[
                'flex w-full items-center justify-center rounded-2xl border px-3 py-3 text-center transition-all duration-200 sm:px-4',
                step.variant === 'primary'
                  ? 'border-blue-200 bg-blue-600 text-white shadow-md'
                  : 'border border-slate-200 bg-white text-slate-700 shadow-md'
              ]"
            >
              <span class="text-xl font-medium leading-relaxed sm:text-lg">
                {{ step.title }}
              </span>
            </div>
          </div>

          <div v-if="index < steps.length - 1" class="flex justify-center py-2.5">
            <div class="flex w-7 items-center justify-center rounded-full text-blue-600 sm:w-8">
              <MoveDown class="h-3.5 w-3.5 sm:h-4 sm:w-4" stroke-width="2.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
