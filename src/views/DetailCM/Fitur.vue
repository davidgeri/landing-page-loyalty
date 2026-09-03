<script setup lang="ts">
import { CheckCircle2 } from '@lucide/vue';
import OutlinePillPing from '../../components/outlinepill/OutlinePillPing.vue';

const features = [
  "Sinkronisasi inventory.",
  "Pengelolaan harga kamar.",
  "Pengelolaan room allotment.",
  "Pembaruan data otomatis.",
  "Pemantauan status koneksi.",
  "Penerimaan reservasi dari OTA.",
];

const OutlinePill = {
  text : "Main Feature",
  classPill : "text-blue-500",
  bgPill : "bg-blue-500"
}
</script>

<template>
  <section class="py-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="mx-auto mb-12 max-w-3xl space-y-4 text-center">
        <div class="inline-flex items-center tracking-wide">
          <OutlinePillPing :bg-ping="OutlinePill.bgPill" :class-pil="OutlinePill.classPill" :text="OutlinePill.text" />
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
          Fitur Utama Sistem Channel Manager Cakrasoft
        </h2>

        <p class="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
          Distribusi kamar lebih cepat, sinkron lebih akurat, tanpa kerumitan manual.
        </p>
      </header>

      <ul class="mx-auto grid max-w-4xl grid-cols-1 gap-4 p-0 sm:grid-cols-2" aria-label="Fitur utama Channel Manager">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-center gap-4 rounded-2xl p-4 transition-colors duration-200 hover:bg-slate-50 md:ml-15"
        >
          <div class="shrink-0 text-emerald-500">
            <CheckCircle2 class="w-8 h-8" />
          </div>

          <span class="text-lg sm:text-xl font-medium text-slate-800">
            {{ feature }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>