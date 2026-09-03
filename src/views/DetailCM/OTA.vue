<script setup lang="ts">
// Daftar logo OTA pakai link CDN publik yang aman & stabil
const otaList = [
  { name: "Traveloka", logo: "../../../public/OTA/traveloka.png" },
  { name: "Airbnb", logo: "../../../public/OTA/airbnb.png" },
  { name: "Tiket.com", logo: "../../../public/OTA/tiket.png" },
  { name: "Agoda", logo: "../../../public/OTA/agoda.png" },
  { name: "Booking.com", logo: "../../../public/OTA/booking.png" },
  { name: "Hopper", logo: "../../../public/OTA/hopper.png" },
  { name: "Expedia", logo: "../../../public/OTA/expedia.png" },
  { name: "Pegipegi", logo: "../../../public/OTA/pegipegi.png" },
  { name: "Bookeasy", logo: "../../../public/OTA/bookeasy.png" },
  { name: "Hostelworld", logo: "../../../public/OTA/hostelworld.png" }
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="max-w-2xl space-y-4">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Terintegrasi Oleh Online 
            <span class="inline-block border-2 border-dashed border-blue-600 px-3 py-0.5 rounded-xl text-blue-600 mx-1">
              OTA
            </span>
          </h2>

          <p class="text-lg text-slate-600 leading-relaxed">
            Bekerja sama dengan berbagai platform distribusi hotel untuk memastikan kamar Anda menjangkau lebih banyak tamu.
          </p>
        </div>

      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div 
          v-for="(ota, index) in otaList" 
          :key="index"
          class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex items-center justify-center h-28 group"
        >
          <img 
            :src="ota.logo" 
            :alt="ota.name" 
            class="max-h-10 max-w-30 opacity-100 object-contain filter md:grayscale md:opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          />
        </div>
      </div>

    </div>
  </section>
</template>