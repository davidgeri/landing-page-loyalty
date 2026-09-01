//! Masih dalam pengembangan

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
</script>

<template>
  <section class="w-full py-8 md:py-14" aria-labelledby="main-feature-title">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <article class="flex flex-col gap-5">
          <OutlinePill
            text="Main Feature"
            class-pil="border-slate-300 text-slate-700 bg-white px-4 py-1 text-sm"
          />

          <header>
            <h2
              id="main-feature-title"
              class="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 md:text-5xl"
            >
              Fitur Utama Sistem Booking Engine CakraSoft
            </h2>
          </header>

          <p class="max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
            Distribusi kamar lebih cepat, sinkron lebih akurat, tanpa kerumitan manual.
          </p>
        </article>

        <ul class="flex flex-col gap-4 md:gap-5" aria-label="Daftar fitur utama">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-center gap-4"
          >
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-50 text-emerald-600">
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