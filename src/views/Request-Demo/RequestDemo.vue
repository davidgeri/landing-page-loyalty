<script setup lang="ts">
import { ref } from 'vue'
import { CalendarDays, Share2, Crown } from 'lucide-vue-next'
import Navbar from "../../components/navbar/Navbar.vue"
import Footer from "../../components/footer/FooterComponent.vue"

interface DemoForm {
  firstName: string
  lastName: string
  email: string
  countryCode: string
  phone: string
  country: string
  module: string
  message: string
}

const form = ref<DemoForm>({
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+62',
  phone: '',
  country: '',
  module: '',
  message: ''
})

const isSubmitted = ref<boolean>(false)

const handleFormSubmit = (): void => {
  if (form.value.firstName && form.value.email) {
    isSubmitted.value = true

    setTimeout(() => {
      isSubmitted.value = false

      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+62',
        phone: '',
        country: '',
        module: '',
        message: ''
      }
    }, 4000)
  }
}
</script>

<template>
  <Navbar />

  <div class="bg-white min-h-screen font-sans pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        <div class="lg:col-span-5 space-y-8 text-left">

          <div>
            <span
              class="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-[10px] font-semibold text-[#0c6cf2] rounded-full uppercase tracking-wider">
              Request Demo
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            Kembangkan bisnis hotel Anda dengan produk add-ons
            <span class="text-[#0c6cf2]">Cakrasoft.</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-600 max-w-2xl">
            Booking Engine, Channel Manager, dan Cakra Loyalty solusi
            terintegrasi untuk operasional hotel yang lebih efisien.
          </p>

          <div class="space-y-5">

            <div class="flex items-start gap-4">
              <div class="shrink-0">
                <CalendarDays class="h-6 w-6 text-[#0c6cf2]" />
              </div>

              <div>
                <div class="text-base font-medium text-slate-900">
                  Booking Engine
                </div>

                <p class="text-xs text-slate-500">
                  Reservasi langsung tanpa komisi OTA
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="shrink-0">
                <Share2 class="h-6 w-6 text-[#0c6cf2]" />
              </div>

              <div>
                <div class="text-base font-medium text-slate-900">
                  Channel Manager
                </div>

                <p class="text-xs text-slate-500">
                  Integrasi dengan OTA dan GDS
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="shrink-0">
                <Crown class="h-6 w-6 text-[#0c6cf2]" />
              </div>

              <div>
                <div class="text-base font-medium text-slate-900">
                  Cakra Loyalty
                </div>

                <p class="text-xs text-slate-500">
                  Tingkatkan loyalitas dan retensi tamu
                </p>

                <div class="pt-6 mt-5 border-t border-slate-100">
                  <p class="text-xs font-semibold text-slate-400">
                    Dipercaya oleh lebih dari 250+ hotel
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm">

            <div class="mb-6">
              <h2 class="text-xl sm:text-2xl font-semibold text-slate-900">
                Request <span class="text-[#0c6cf2]">Demo</span>
              </h2>

              <p class="text-sm text-slate-500 leading-relaxed mt-2">
                Jadwalkan demo produk Add-ons Cakrasoft dan temukan solusi terbaik
                untuk bisnis hotel Anda.
              </p>
            </div>

            <form @submit.prevent="handleFormSubmit" class="space-y-5">

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input v-model="form.firstName" type="text" placeholder="John"
                    class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:border-transparent"
                    required />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input v-model="form.lastName" type="text" placeholder="Doe"
                    class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:border-transparent"
                    required />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input v-model="form.email" type="email" placeholder="john.doe@example.com"
                  class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:border-transparent"
                  required />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input v-model="form.phone" type="tel" placeholder="81234567890"
                  class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:border-transparent"
                  required />
              </div>


              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Country *
                </label>
                <input v-model="form.country" type="text" placeholder="Indonesia"
                  class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:border-transparent"
                  required />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Module *
                </label>
                <input v-model="form.module" type="text" placeholder="Booking Engine"
                  class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:border-transparent"
                  required />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea v-model="form.message" placeholder="Your message here..."
                  class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:border-transparent"
                  rows="4"></textarea>

                <button type="submit"
                  class="mt-4 w-full bg-[#0c6cf2] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0a5ac1] focus:outline-none focus:ring-2 focus:ring-[#0c6cf2] focus:ring-opacity-50">
                  Submit
                </button>
                <div v-if="isSubmitted" class="mt-4 text-green-600 font
                    -semibold">
                  Form submitted successfully!
                </div>


              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>