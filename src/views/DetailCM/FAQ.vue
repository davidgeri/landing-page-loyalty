<script setup lang="ts">
import { ref } from 'vue'

const openFaqId = ref<number | null>(0) 

const faqs = [
  { 
    question: 'Bagaimana jika terjadi gangguan koneksi?', 
    answer: 'Sistem akan otomatis mencoba menyambungkan kembali begitu koneksi pulih. Data terakhir tetap tersimpan sehingga tidak ada informasi yang hilang.' 
  },
  { 
    question: 'Seberapa cepat proses sinkronisasi?', 
    answer: 'Proses sinkronisasi berjalan secara *real-time* untuk meminimalisir risiko terjadinya overbooking di berbagai channel.' 
  },
  {  
    question: 'Apakah reservasi OTA masuk ke Cakrasoft?', 
    answer: 'Ya, semua reservasi yang masuk dari berbagai Online Travel Agent (OTA) akan otomatis tercatat dan masuk ke dalam sistem Cakrasoft secara langsung.' 
  },
  { 
    question: 'Channel apa saja yang dapat dihubungkan?', 
    answer: 'Cakrasoft dapat dihubungkan ke berbagai OTA populer seperti Agoda, Booking.com, Traveloka, Expedia, dan puluhan channel lainnya.'
  },
  {
    question: 'Apakah harga bisa diatur beda tiap channel?', 
    answer: 'Sangat bisa. Anda dapat melakukan *rate management* dan menyesuaikan harga kamar secara fleksibel untuk masing-masing channel yang terhubung.' 
  },
]

const toggleFaq = (index: number) => {
  openFaqId.value = openFaqId.value === index ? null : index
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900 mb-3">
        FAQ <span class="text-blue-600">Channel Manager</span>
      </h2>
      <p class="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
        Masih ada yang ingin ditanyakan? Berikut jawaban atas pertanyaan yang paling sering muncul dari hotel yang menggunakan Cakrasoft.
      </p>
    </div>

    <div class="space-y-4">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index" 
        class="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow"
      >
        <button 
          @click="toggleFaq(index)" 
          class="w-full flex items-center justify-between p-5 text-left focus:outline-none"
        >
          <div class="flex items-center space-x-4">
            <span class="font-bold text-gray-900 text-base sm:text-lg">{{ faq.question }}</span>
          </div>
          
          <svg 
            class="w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ml-4"
            :class="{ 'rotate-180': openFaqId === index }"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <div 
          class="grid transition-all duration-300 ease-in-out"
          :class="openFaqId === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
        >
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