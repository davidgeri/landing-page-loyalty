<script setup lang="ts">
import Navbar from "../../components/navbar/Navbar.vue"
import Footer from "../../components/footer/FooterComponent.vue"
import LeftSideContact from './LeftSideContact.vue'
import RightSideContact from './RightSideContact.vue'
import { useSeoMeta, useHead } from "@unhead/vue"

const env = import.meta.env

useSeoMeta({
  title: 'Hubungi Kami | Cakrasoft',
  description: 'Hubungi tim Cakrasoft untuk konsultasi solusi teknologi hotel. Tersedia via WhatsApp, email, dan form pesan. Kantor di Makassar & Bali.',
  ogTitle: 'Hubungi Tim Cakrasoft',
  ogDescription: 'Punya pertanyaan soal solusi hotel kami? Tim Cakrasoft siap membantu - kirim pesan atau hubungi langsung via WhatsApp dan email.',
  ogImage: '/images/og-contact-cakrasoft.jpg',
  ogUrl: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/contact`,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/contact` }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})

</script>

<template>
  <Navbar />

  <main class="bg-white min-h-screen font-sans pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <LeftSideContact />
        <RightSideContact />
      </div>
    </div>
  </main>

  <Footer />
</template>
