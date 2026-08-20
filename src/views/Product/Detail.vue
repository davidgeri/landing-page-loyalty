<script setup lang="ts">
import Navbar from '../../components/navbar/Navbar.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface ProductType {
  slug : string 
  title : string
  icon : string 
  image : string 
  detailDesc : string
  advantages : string[]
}

const route = useRoute()
const router = useRouter()
const product = ref<ProductType>()

const products = [
  {
    slug: 'front-desk',
    title: 'Front Desk',
    icon: '/icon/frontdesk.png', 
    image: '/assets/frontdesk-ui.png',
    detailDesc: 'Cakrasoft Cloud Hotel – Modul Front Desk dirancang agar komprehensif, mudah digunakan, aman, dan akurat. Sistem ini lebih dari sekadar sistem hotel biasa; sistem ini memaksimalkan pendapatan dan mengendalikan biaya, sehingga operasional hotel menjadi efektif dan efisien.',
    advantages: ['Booking Super Mudah', 'Transaksi Cepat Akurat', 'Manajemen Kamar Efisien', 'Bebas Risiko Overbooking', 'Integrasi Sistem Menyeluruh']
  },
  {
    slug: 'point-of-sales',
    title: 'Point Of Sales',
    icon: '/icon/pos.png',
    image: '/assets/pos-ui.png',
    detailDesc: 'Cakrasoft Point of Sales menyediakan solusi bagi manajemen hotel untuk menangani transaksi di berbagai outlet, seperti layanan kamar (room service), restoran, kafe, layanan laundry, pusat bisnis, dan outlet lainnya. Berkat desain yang tangguh dan ramah pengguna, sistem ini menawarkan kemudahan operasional bagi para pengguna. Hanya dengan beberapa kali klik, pengguna dapat mengelola transaksi secara efisien di seluruh outlet.',
    advantages: ['User Friendly Interface', 'Solusi pemecahan masalah tingkat lanjut untuk industri perhotelan', 'Tingkatkan pendapatan melalui metode layanan yang cepat dan mudah.']
  },
  {
    slug: 'accounting',
    title: 'Accounting',
    icon: '/icon/accounting.png',
    image: '/assets/accounting-ui.png',
    detailDesc: 'Sebuah aplikasi sistem akuntansi yang tangguh untuk hotel yang memungkinkan pengguna mengelola transaksi keuangan dengan mudah, cepat, dan akurat. Pengguna tidak dibebani oleh kerumitan pencatatan jurnal, karena setiap proses akan menghasilkan jurnal secara otomatis. Sistem ini meniadakan proses akuntansi lama yang rumit, serta memungkinkan pembuatan laporan keuangan secara instan.Cakrasoft Accounting System merupakan program utama untuk operasional *back-office* bisnis di industri perhotelan, termasuk hotel, restoran, serta berbagai usaha makanan dan minuman lainnya.',
    advantages: ['User Friendly Interface', 'Solusi pemecahan masalah tingkat lanjut untuk industri perhotelan', 'Tingkatkan pendapatan melalui metode layanan yang cepat dan mudah.']
  },
  {
    slug: 'banquet',
    title: 'Banquet',
    icon: '/icon/banquet.png',
    image: '/assets/banquet-ui.png',
    detailDesc: 'Menyediakan solusi untuk kegiatan Meeting, Incentive, Convention, and Exhibition (MICE), reservasi, paket & tarif, pengelolaan tempat, serta penanganan transaksi.',
    advantages: ['User Friendly Interface', 'Solusi pemecahan masalah tingkat lanjut untuk industri perhotelan', 'Tingkatkan pendapatan melalui metode layanan yang cepat dan mudah.']
  },
  {
    slug: 'inventory',
    title: 'Inventory',
    icon: '/icon/inven.png',
    image: '/assets/loyalty-ui.png',
    detailDesc: 'Inventory adalah aplikasi komprehensif berbasis cloud yang dirancang sebagai bagian dari Cakrasoft Cloud Hotel untuk mengefisienkan pengelolaan inventaris dan aset tetap bagi industri perhotelan, termasuk hotel, penginapan, restoran, kafe, serta bisnis terkait pariwisata lainnya. Aplikasi ini dirancang agar dapat beroperasi secara lancar, baik pada komputer yang berdiri sendiri (standalone) maupun dalam lingkungan jaringan, sehingga menawarkan fleksibilitas dan skalabilitas untuk memenuhi kebutuhan berbagai jenis organisasi.',
    advantages: ['User Friendly Interface', 'Solusi pemecahan masalah tingkat lanjut untuk industri perhotelan', 'Tingkatkan pendapatan melalui metode layanan yang cepat dan mudah.']
  },
  {
    slug: 'channel-manager',
    title: 'Channel Manager',
    icon: '/icon/c-manajer.png',
    image: '/assets/c-manajer-ui.png',
    detailDesc: 'Channel manager yang andal memusatkan kendali, memungkinkan bisnis untuk mengelola serta memperbarui inventaris, harga, dan ketersediaan di berbagai saluran distribusi secara real-time. Sistem ini menawarkan integrasi yang mulus dengan beragam agen perjalanan daring, sistem manajemen properti, dan perangkat manajemen hubungan pelanggan (CRM). Fitur otomatisasi mengurangi kesalahan manual dan menghemat waktu, sementara analitik canggih serta penetapan harga dinamis membantu memaksimalkan pendapatan dan meningkatkan pengambilan keputusan. Visibilitas yang lebih baik dan manajemen pengguna menjamin akurasi informasi serta efisiensi operasional, yang pada akhirnya meningkatkan pengalaman pelanggan.',
    advantages: ['User Friendly Interface', 'Solusi pemecahan masalah tingkat lanjut untuk industri perhotelan', 'Tingkatkan pendapatan melalui metode layanan yang cepat dan mudah.']
  },
  {
    slug: 'booking-engine',
    title: 'Booking Engine',
    icon: '/icon/b-engine.png',
    image: '/assets/b-engine-ui.png',
    detailDesc: 'Cakrahub Booking Engine terintegrasi dengan situs web hotel untuk memfasilitasi pemesanan online secara langsung. Sistem ini terhubung dengan Property Management System (PMS), sehingga memastikan setiap pemesanan tercatat secara otomatis dan real-time.',
    advantages: ['User Friendly Interface', 'Solusi pemecahan masalah tingkat lanjut untuk industri perhotelan', 'Tingkatkan pendapatan melalui metode layanan yang cepat dan mudah.']
  }
]

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const found = products.find(p => p.slug === route.params.slug)
  if (found) {
    product.value = found
  } else {
    router.push('/')
  }
})
</script>

<template>

  <Navbar />

  <div v-if="product" class="max-w-5xl mx-auto px-4 pt-16 sm:px-6 lg:px-8 py-16">
    
    <button @click="router.back()" class="text-gray-500 hover:text-blue-600 mb-10 flex items-center gap-2 font-medium">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      Kembali ke Daftar Produk
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      <div>
        <div class="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
          <img :src="product.icon" class="w-16 h-16 object-contain" alt="Icon">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800">{{ product.title }}</h1>
        </div>

        <div v-if="product.image" class="block lg:hidden bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
          <img :src="product.image" :alt="`Preview ${product.title}`" class="w-full h-auto rounded-xl shadow-sm">
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mb-3">Tentang Modul Ini</h3>
        <p class="text-gray-600 leading-relaxed mb-8 text-base">
          {{ product.detailDesc }}
        </p>

        <h3 class="text-lg font-semibold text-gray-800 mb-4">Keunggulan Utama:</h3>
        <ul class="space-y-4 mb-10">
          <li v-for="(adv, i) in product.advantages" :key="i" class="flex items-start gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-gray-700">{{ adv }}</span>
          </li>
        </ul>
        <button class="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md w-full sm:w-auto">
          Request Demo Sekarang
        </button>
      </div>

      <div v-if="product.image" class="hidden lg:block bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <img :src="product.image" :alt="`Preview ${product.title}`" class="w-full h-auto rounded-xl shadow-sm">
      </div>      
    </div>
  </div>
  <FooterComponent />
</template>