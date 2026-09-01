<script setup lang="ts">
import { ref } from 'vue'
import Navbar from "../../components/navbar/Navbar.vue"
import Footer from "../../components/footer/FooterComponent.vue"
import {useSeoMeta, useHead} from "@unhead/vue"

const env = import.meta.env

useSeoMeta({
  title: 'Hubungi Kami | Cakrasoft',
  description: 'Hubungi tim Cakrasoft untuk konsultasi solusi teknologi hotel. Tersedia via WhatsApp, email, dan form pesan. Kantor di Makassar & Bali.',
  ogTitle: 'Hubungi Tim Cakrasoft',
  ogDescription: 'Punya pertanyaan soal solusi hotel kami? Tim Cakrasoft siap membantu — kirim pesan atau hubungi langsung via WhatsApp dan email.',
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


const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

const handleFormSubmit = () => {
  console.log(form.value)
}

const ourSupport = [
  {
    name: "Join/Support : (+62) 811 3970 899"
  },
  {
    name: "Help/Support : (+62) 811 3970 899"
  }
]
</script>

<template>
  <Navbar />

  <div class="bg-white min-h-screen font-sans pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        <div class="lg:col-span-5 space-y-8 text-left">

          <h1 class="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            Contact Us
          </h1>

          <p class="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
            Kami menghargai setiap masukan dan pertanyaan yang Anda sampaikan.
            Tim kami siap membantu dan memberikan dukungan terbaik untuk kebutuhan Anda.
          </p>

          <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Our Contact
          </h2>

          <ul class="text-sm sm:text-base text-slate-600 space-y-4">

            <li>
              • Phone : (+62) 811 3970 899
            </li>

            <li class="break-words">
              • Email :
              <a
                href="mailto:bdsalescakrasoft@gmail.com"
                class="text-blue-500 font-semibold"
              >
                bdsalescakrasoft@gmail.com
              </a>
            </li>

            <li>
              • Address :
              <div class="ml-4 mt-2 leading-relaxed">
                Head Office : Jl. Abdul Kudus Perumahan Barombong Permai C5 Kel.
                Tamalate Kec. Barombong, Makassar, Sulawesi Selatan
              </div>
            </li>

            <li>
              • WhatsApp : (+62) 811 3970 899
            </li>

            <li class="break-words">
              • Email :
              <a
                href="mailto:info@cakrasoft.net"
                class="text-blue-500 font-semibold"
              >
                info@cakrasoft.net
              </a>
            </li>

            <li>
              • Branch Office :
              <div class="ml-4 mt-2 leading-relaxed">
                Jl. Raya Mambal Ubud No. 46, Br. Sigaran, Desa Mekar Bhuwana,
                Badung, Bali 80352
              </div>
            </li>

            <li>
              • WhatsApp : (+62) 811 3970 899
            </li>

          </ul>

          <!-- Support -->
          <div class="space-y-3">

            <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              Our Support
            </h2>

            <ul class="ml-3 space-y-2 text-sm sm:text-base text-slate-600">
              <li
                v-for="(item, index) in ourSupport"
                :key="index"
              >
                • {{ item.name }}
              </li>
            </ul>

          </div>

        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-7 w-full">

          <form
            @submit.prevent="handleFormSubmit"
            class="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm w-full"
          >

            <div class="mb-6">

              <h2 class="text-xl sm:text-2xl font-bold text-slate-900">
                Send
                <span class="text-[#0c6cf2]">
                  Message
                </span>
              </h2>

              <p class="text-sm sm:text-base text-slate-500 leading-relaxed mt-2">
                Ada pertanyaan lebih lanjut? Kirim pesan dan tim kami akan segera merespons.
              </p>

            </div>

       
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <label class="text-sm text-slate-500 bg-white px-2 relative left-3 top-2">
                  Name
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Nama Lengkap Anda"
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label class="text-sm text-slate-500 bg-white px-2 relative left-3 top-2">
                  Email
                </label>

                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Example@gmail.com"
                  class="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

            </div>

            <div class="mt-4">

              <label class="text-sm text-slate-500 bg-white px-2 relative left-3 top-2">
                Subject
              </label>

              <input
                v-model="form.subject"
                type="text"
                placeholder="Masalah yang Anda hadapi"
                class="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>
            
            <div class="mt-5">

              <h2 class="text-sm sm:text-base font-semibold text-slate-700 mb-2">
                Tulis pesan Anda *
              </h2>

              <textarea
                v-model="form.message"
                placeholder="Apa pertanyaan Anda..."
                rows="7"
                class="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm sm:text-base resize-none outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:border-transparent"
              ></textarea>

            </div>

           
            <div class="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-5">

              <button
                type="button"
                @click="resetForm"
                class="w-full sm:w-auto border border-blue-500 text-blue-600 font-semibold py-2 px-8 sm:px-10 rounded-lg hover:bg-blue-50 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="w-full sm:w-auto bg-[#0c6cf2] text-white font-semibold py-2 px-8 sm:px-10 rounded-lg hover:bg-[#0a5ac1] transition"
              >
                Submit
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  </div>

  <Footer />
</template>