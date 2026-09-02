<script lang="ts" setup>
import { Check } from '@lucide/vue';
import OutlinePill from '../../components/outlinepill/OutlinePill.vue';

const features = [
  'Promosi hotel reservasi.',
  'Voucher code.',
  'Bookings',
  'Room Settings',
  'Membership',
  'Invoice Payments',
];

const data = {
  title: "Fitur Utama Sistem Booking Engine CakraSoft",
  desk: "Distribusi kamar lebih cepat, sinkron lebih akurat, tanpa kerumitan manual.",
}

</script>

<template>
  <section class="w-full py-8 md:py-14 mt-10" aria-labelledby="main-feature-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center flex-col md:flex-row md:justify-between md:items-start gap-8">
        <article class="flex flex-col gap-5">
          <div class="flex justify-start">
            <OutlinePill text="Main Feature" class-pil="text-blue-500" />
          </div>

          <header>
            <h2 id="main-feature-title"
              class="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 md:text-5xl">
              {{ data.title }}
            </h2>
          </header>

          <p class="max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
            {{ data.desk }}
          </p>
        </article>

        <ul class="flex flex-col gap-4 md:gap-5" aria-label="Daftar fitur utama">
          <li v-for="(feature, index) in features" :key="index" class="flex items-center gap-4">
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 text-emerald-500">
              <Check class="h-4 w-4" stroke-width="3" />
            </span>
            <span class="text-base font-medium text-slate-800 md:text-lg">
              {{ feature }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>