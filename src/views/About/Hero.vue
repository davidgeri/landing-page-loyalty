<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { Network, TrendingUp, MapPinned} from '@lucide/vue';
import { animate } from 'animejs';

const texts = ['Mendukung', 'Menunjang', 'Memajukan'];
let index = 0;
let intervalId: ReturnType<typeof setInterval>;

function switchText() {
  const el = document.getElementById('text');
  if (!el) return;

  animate(el, {
    translateY: [0, -20],
    opacity: [1, 0],
    duration: 400,
    ease: 'inOutQuad',
    onComplete: () => {
      index = (index + 1) % texts.length;
      el.textContent = texts[index];

      el.style.transform = 'translateY(20px)';
      el.style.opacity = '0';

      animate(el, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000,
        ease: 'outExpo',
      });
    },
  });
}

onMounted(() => {
  intervalId = setInterval(switchText, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});


const data = [
  {
    title : "Integrasi mudah antar produk",
    icon : Network,
    desk : "Semua add-ons terhubung jadi satu ekosistem, bukan sistem terpisah-pisah."
  },
  {
    title : "Scalabel",
    icon : TrendingUp,
    desk : "Tumbuh sesuai bisnis, dari hotel independen sampai chain besar."
  },
  {
    title : " Support lokal",
    icon : MapPinned,
    desk : "Tim support yang paham konteks hotel Indonesia, responsif dan dekat."
  },
]
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7 ">
        <span class="inline-block py-1 px-3 rounded-full  text-blue-600 text-xs font-semibold mb-4 border border-blue-100">
          Cakrasoft Distribution & Revenue Solution
        </span>
        <h1 class="text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
          Solusi Teknologi 
          <span class="inline-block border-dashed border-2 border-stone-400 px-3 py-1 mx-2 align-middle">
            <span class="block text-xs font-semibold text-stone-600 mb-1">p-title</span>
            <span class="block text-2xl font-bold text-stone-900 leading-tight">untuk</span>
          </span>
          <br />
          <span id="text-wrapper" class="inline-block overflow-hidden align-bottom w-72">
            <span id="text" class="inline-block">Mendukung</span>
          </span>
          Operasional <span class="text-blue-600">Hotel</span>
        </h1>
      </div>
      <div class="lg:col-span-4 lg:col-start-9">
        <p class="leading-relaxed text-xl max-w-full">
          Cakrasoft membantu hotel mengelola operasional secara lebih terstruktur melalui sistem berbasis cloud dan
          produk add-ons yang saling terintegrasi.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12">
      <div v-for="(item, index) in data" :key="index">
        <h3 class="font-medium text-[#806F62] flex items-center gap-2 mb-5">
          <span class="text-stone-700"><component :is="item.icon" class="w-5 h-5" /></span> {{ item.title }}
        </h3>
        <p class="text-sm w-60">{{ item.desk }}</p>
      </div>
    </div>
  </section>
</template>