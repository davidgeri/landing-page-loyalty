<script setup lang="ts">
import { useSeoMeta, useHead } from "@unhead/vue"

const env = import.meta.env

useSeoMeta({
  title: 'Tentang Cakrasoft | Solusi Teknologi Hotel Indonesia',
  description: 'Cakrasoft by PT. Cakra Media Data penyedia solusi teknologi hotel berbasis cloud sejak 2007. Channel Manager, Booking Engine, dan sistem hospitality terintegrasi.',
  ogTitle: 'Tentang Cakrasoft — Teknologi Hotel yang Terintegrasi',
  ogDescription: 'Kenali Cakrasoft: perusahaan IT hospitality Indonesia berdiri sejak 2007. Kami hadir dengan solusi cloud untuk hotel — dari Channel Manager hingga Loyalty Program.',
  ogImage: '/images/og-about-cakrasoft.jpg',
  ogUrl: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/about`,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/about` }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})

import FooterComponent from '../../components/footer/FooterComponent.vue';
import Navbar from '../../components/navbar/Navbar.vue';
import Hero from './Hero.vue';
import AboutCompany from './AboutCompany.vue';
import Visimisi from './Visimisi.vue';
import Cta from '../../components/cta/Cta.vue';
import Ekosistem from './Ekosistem.vue';


const views = {
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
      <AboutCompany />
      <Visimisi />
      <Ekosistem />
      <div class="-mb-36">
        <Cta :view="views" :button="button" />
      </div>
      <FooterComponent />
    </section>

  </div>
</template>