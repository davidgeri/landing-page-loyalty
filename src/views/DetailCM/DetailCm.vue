<script setup lang="ts">
import {useSeoMeta, useHead} from "@unhead/vue"

const env = import.meta.env

useSeoMeta({
  title: 'Channel Manager Hotel | Cakrasoft',
  description: 'Kelola harga dan ketersediaan kamar di semua OTA dari satu sistem. Cakrasoft Channel Manager — sinkronisasi real-time, integrasi luas, user friendly.',
  ogTitle: 'Cakrasoft Channel Manager — Satu Sistem untuk Semua Channel',
  ogDescription: 'Update harga dan inventori kamar hotel ke berbagai OTA sekaligus, otomatis dan real-time. Kurangi overbooking, tingkatkan revenue.',
  ogImage: '/images/og-channel-manager-cakrasoft.jpg',
  ogUrl: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/channel-manager`,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/channel-manager` }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})


import FooterComponent from '../../components/footer/FooterComponent.vue';
import Navbar from '../../components/navbar/Navbar.vue';
import Hero from './Hero.vue';
import Cta from '../../components/cta/Cta.vue';
import Problem from './Problem.vue';
import Solution from './Solution.vue';
import Fitur from './Fitur.vue';
import Flow from './Flow.vue';
import Benefit from './Benefit.vue';
import OTA from './OTA.vue';
import FAQ from './FAQ.vue';

const viewCta = {
    subheading: "Langkah Selanjutnya",
    title: "Temukan Solusi Add-ons yang Tepat untuk Hotel",
    desk: " Konsultasikan kebutuhan hotel Anda bersama tim Cakrasoft dan dapatkan informasi produk yang sesuai.",
}

const button = {
  leftbtn: {
    name: "Request Demo",
    navto: "/request-demo"
  },
  rightbtn: {
    name: "Contact Our Team",
    navto: "/contact"
  }
}

</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">
    <Navbar />

    <section class="pt-24">
      <Hero />
      <Problem />
      <Solution />
      <Fitur />
      <Flow />
      <Benefit />
      <OTA />
      <FAQ />
        <div class="-mb-36">
            <Cta :view="viewCta" :button="button" />
        </div>
      <FooterComponent />
    </section>

  </div>
</template>