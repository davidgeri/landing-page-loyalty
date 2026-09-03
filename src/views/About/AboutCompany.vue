<script setup lang="ts">
import { ref } from 'vue';
import { Hotel, Clock4, BriefcaseBusiness, Building2, MapPin } from '@lucide/vue';

const activeMenu = ref('profil');

const detailData = {
  profil: {
    title: "Cakra Media Data",
    type: "text",
    content: "PT. Cakra Media Data adalah perusahaan jasa konsultasi teknologi informasi yang berfokus pada program development, web design, dan IT consultant. Berdiri sejak Maret 2007, perusahaan ini berpusat di Makassar dan telah memiliki legalitas dan terdaftar pada DEPKUMHAM serta memiliki izin operasional. Sebelumnya, dikenal sebagai CV. Cakra Media Data."
  },
  latarBelakang: {
    title: "Transformasi Perusahaan",
    type: "text",
    content: "Perusahaan kami pertama kali berdiri pada Maret 2007 dengan nama CV. Cakra Media Data. Seiring dengan peningkatan kinerja dan kepercayaan dari para pemangku kepentingan bisnis, perusahaan kemudian bertransformasi menjadi PT. Cakra Media Data pada tanggal 12 Februari 2014. Langkah ini diambil agar produk-produk yang dihasilkan mampu bersaing di pasar global."
  },
  bidangUsaha: {
    title: "Layanan Utama",
    type: "text",
    content: " Perusahaan kami bergerak di bidang jasa konsultasi teknologi informasi (IT). Fokus layanan utama kami meliputi: Program Development (Pengembangan Program), Web Design (Desain Web), IT Consultant (Konsultan IT)"
  },
  fokusSolusi: {
    title: "Produk Unggulan",
    type: "text",
    content: "Hingga saat ini, kami telah menghasilkan berbagai produk unggulan yang siap memenuhi kebutuhan hotel Anda: Cakrasoft Hotel System, Cakrasoft Point of Sales, Cakrasoft Accounting System, Cakrasoft Asset Management System, dan Cakrasoft Banquet System, serta Cakrahub Channel Manager dan Booking Engine."
  },
  areaOperasional: {
    title: "Kantor & Lokasi Operasional",
    type: "offices",
    offices: [
      {
        name: "Head Office",
        city: "Makassar",
        address: "Jl. Abdul Kudus Perumahan Barombong Permai C5 Kel. Tamalate Kec. Barombong, Makassar, Sulawesi Selatan",
        whatsapp: "+62 811 3970 899",
        email: "info@cakrasoft.net"
      },
      {
        name: "Branch Office",
        city: "Bali",
        address: "Jl. Raya Mambal Ubud No. 46, Br. Sigaran, Desa Mekar Bhuwana, Badung, Bali 80352",
        whatsapp: "+62 855 7229 777",
        email: null
      }
    ]
  }
};
</script>

<template>
  <section class=" py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <span class="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-semibold mb-4">Tentang Kami</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang <span class="text-blue-600">Cakrasoft</span>
          </h2>
          <p class="text-gray-600 mb-8 text-base leading-relaxed">
            PT Cakra Media Data mengembangkan Cakrasoft, solusi cloud yang membantu industri perhotelan mengelola operasional secara lebih terstruktur dan terintegrasi.
          </p>

          <div class="space-y-2">
            <button @click="activeMenu = 'profil'" :class="['w-full flex gap-4 p-4 rounded-md text-left transition-all duration-300 border-l-4', activeMenu === 'profil' ? ' border-blue-500 shadow-sm' : 'border-transparent hover:bg-gray-100']">
              <div class="text-blue-500 mt-1"><Hotel /></div>
              <div>
                <h4 class="font-bold text-base text-gray-800">Profile Perusahaan</h4>
                <p class="text-sm text-gray-500">PT. Cakra Media Data</p>
              </div>
            </button>

            <button @click="activeMenu = 'latarBelakang'" :class="['w-full flex gap-4 p-4 rounded-md text-left transition-all duration-300 border-l-4', activeMenu === 'latarBelakang' ? ' border-blue-600 shadow-sm' : 'border-transparent hover:bg-gray-100']">
              <div class="text-blue-500 mt-1"><Clock4 /></div>
              <div>
                <h4 class="font-bold text-base text-gray-800">Latar Belakang</h4>
                <p class="text-sm text-gray-500">Awal Pengembangan Cakrasoft</p>
              </div>
            </button>

            <button @click="activeMenu = 'bidangUsaha'" :class="['w-full flex gap-4 p-4 rounded-md text-left transition-all duration-300 border-l-4', activeMenu === 'bidangUsaha' ? ' border-blue-600 shadow-sm' : 'border-transparent hover:bg-gray-100']">
              <div class="text-blue-500 mt-1"><BriefcaseBusiness /></div>
              <div>
                <h4 class="font-bold text-base text-gray-800">Bidang Usaha</h4>
                <p class="text-sm text-gray-500">Teknologi & Software Hospitality</p>
              </div>
            </button>

            <button @click="activeMenu = 'fokusSolusi'" :class="['w-full flex gap-4 p-4 rounded-md text-left transition-all duration-300 border-l-4', activeMenu === 'fokusSolusi' ? ' border-blue-600 shadow-sm' : 'border-transparent hover:bg-gray-100']">
              <div class="text-blue-500 mt-1"><Building2 /></div>
              <div>
                <h4 class="font-bold text-base text-gray-800">Fokus Solusi</h4>
                <p class="text-sm text-gray-500">Industri perhotelan</p>
              </div>
            </button>

            <button @click="activeMenu = 'areaOperasional'" :class="['w-full flex gap-4 p-4 rounded-md text-left transition-all duration-300 border-l-4', activeMenu === 'areaOperasional' ? ' border-blue-600 shadow-sm' : 'border-transparent hover:bg-gray-100']">
              <div class="text-blue-500 mt-1"><MapPin /></div>
              <div>
                <h4 class="font-bold text-base text-gray-800">Area Operasional</h4>
                <p class="text-sm text-gray-500">Cakupan wilayah layanan</p>
              </div>
            </button>
          </div>
        </div>

        <div class="min-h-125 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
          <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-50 opacity-50 z-0 pointer-events-none"></div>
          <div class="relative z-10">
            <span class="inline-block py-1.5 px-4 rounded-full text-blue-500 border text-xs font-bold mb-6 tracking-wide">
              Informasi Detail
            </span>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {{ detailData[activeMenu as keyof typeof detailData].title }}
            </h3>

            <template v-if="detailData[activeMenu as keyof typeof detailData].type === 'offices'">
              <div class="space-y-4">
                <div 
                  v-for="(office, idx) in detailData.areaOperasional.offices" 
                  :key="idx"
                  class="p-4 bg-gray-50 rounded-md border border-gray-200/80 hover:border-blue-300 transition-colors"
                >
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-gray-800 text-base flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                      {{ office.name }} ({{ office.city }})
                    </h4>
                  </div>
                  <p class="text-xs text-gray-600 leading-relaxed mb-3">
                    {{ office.address }}
                  </p>
                  <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 font-medium pt-2 border-t border-gray-200">
                    <span>WhatsApp: <strong class="text-gray-800">{{ office.whatsapp }}</strong></span>
                    <span v-if="office.email">Email: <strong class="text-gray-800">{{ office.email }}</strong></span>
                  </div>
                </div>
              </div>
            </template>

            <template v-else>
              <p class="text-gray-600 text-base md:text-lg leading-relaxed">
                {{ (detailData[activeMenu as keyof typeof detailData] as any).content }}
              </p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>