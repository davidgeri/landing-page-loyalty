<script setup lang="ts">
import {useSeoMeta, useHead} from "@unhead/vue"

const env = import.meta.env

useSeoMeta({
  title: 'FAQ | Cakrasoft — Pertanyaan Seputar Sistem Hotel',
  description: 'Temukan jawaban seputar Cakrasoft: sistem cloud hotel, integrasi OTA, harga, keamanan data, dan fitur PMS. Pertanyaan yang sering diajukan.',
  ogTitle: 'FAQ Cakrasoft — Pertanyaan Seputar Sistem Hotel',
  ogDescription: 'Jawaban lengkap seputar PMS cloud, Channel Manager, integrasi OTA, skema harga, dan keamanan data hotel di Cakrasoft.',
  ogImage: '/images/og-faq-cakrasoft.jpg',
  ogUrl: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/faq`,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/faq` }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})

import FooterComponent from '../../components/footer/FooterComponent.vue';
import Navbar from '../../components/navbar/Navbar.vue';
import Hero from './Hero.vue';
import Content from './Content.vue';
import Cta from '../../components/cta/Cta.vue';

const views = {
  subheading: "Langkah Selanjutnya",
  title: "Masih punya pertanyaan ?",
  desk: "Konsultasikan kebutuhan hotel Anda bersama tim Cakrasoft dan dapatkan informasi produk yang sesuai.",
}

const button = {
  leftbtn: {
    name: "Request Demo",
    navto: "/request-demo"
  },
  rightbtn: {
    name: "Contact Our Team",
    navto: "/contact-team"
  }
}

</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">

    <Navbar />

    <section class="pt-24">
      <Hero />
      <Content />
      <div class="-mb-36">
        <Cta :view="views" :button="button" />
      </div>
      <FooterComponent />
    </section>

  </div>
</template>