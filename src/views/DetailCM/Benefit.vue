<script setup lang="ts">
import { ShieldCheck, Clock, Tag, SlidersHorizontal, CheckSquare, Globe2 } from '@lucide/vue';

const benefits = [
  {
    icon: ShieldCheck,
    title: "Mengurangi resiko overbooking",
    desc: "Sinkron otomatis, kamar tidak terjual dua kali."
  },
  {
    icon: Clock,
    title: "Menghemat waktu operasional.",
    desc: "Update sekali, langsung ke semua platform."
  },
  {
    icon: Tag,
    title: "Menjaga konsistensi harga.",
    desc: "Harga tetap konsisten dan teratur."
  },
  {
    icon: SlidersHorizontal,
    title: "Mempermudah pengelolaan OTA.",
    desc: "Semua akun OTA sangat mudah untuk di jangkau."
  },
  {
    icon: CheckSquare,
    title: "Mengurangi kesalahan input.",
    desc: "Otomatisasi, minim human error"
  },
  {
    icon: Globe2,
    title: "Membantu hotel meluaskan distribusi kamar.",
    desc: "Terhubung ke lebih banyak OTA dengan cepat."
  }
];
</script>

<template>
  <section class="py-20 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
          Manfaat yang Anda 
          <span class="inline-block border-2 border-dashed border-blue-600 px-3 py-0.5 rounded-sm text-blue-600 mx-1">
            Rasakan
          </span>
        </h2>

        <p class="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Setiap fitur Cakrasoft dirancang untuk membuat operasional hotel Anda lebih ringan, lebih akurat, dan lebih menguntungkan.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in benefits" 
          :key="index"
          class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div class="w-12 h-12 rounded-xl text-blue-600 flex items-center justify-center mb-6 border border-blue-500 group-hover:scale-110 transition-transform duration-300">
              <component :is="item.icon" class="w-8 h-8" />
            </div>

            <h3 class="text-2xl font-bold text-slate-900 mb-3">
              {{ item.title }}
            </h3>

            <p class="text-slate-600 text-lg leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>