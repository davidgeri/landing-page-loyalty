<script setup lang="ts">
import { useSeoMeta, useHead } from '@unhead/vue'

const env = import.meta.env

useSeoMeta({
  title: 'Request Demo Gratis | Cakrasoft Cloud Hotel',
  description: 'Jadwalkan demo gratis solusi add-ons Cakrasoft. Coba langsung Booking Engine, Channel Manager, dan Cakra Loyalty untuk bisnis hotel Anda.',
  ogTitle: 'Request Demo Gratis Produk Add-ons Cakrasoft',
  ogDescription: 'Konsultasikan kebutuhan hotel Anda dan lihat bagaimana sistem Booking Engine, Channel Manager, & Loyalty kami bekerja meningkatkan pendapatan hotel.',
  ogImage: '/images/og-request-demo-cakrasoft.jpg',
  ogUrl: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/request-demo`,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'canonical', href: `${env.VITE_STATUS === 'DEV' ? env.VITE_URL_DEV : env.VITE_URL_PROD}/request-demo` }
  ],
  meta: [
    { name: 'robots', content: 'index, follow' }
  ]
})

import { ref } from 'vue'
import Navbar from '../../components/navbar/Navbar.vue'
import Footer from '../../components/footer/FooterComponent.vue'
import LeftSideRequestDemo from './LeftSideRequestDemo.vue'
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { CalendarDays, CheckCircle2, Crown, Share2 } from '@lucide/vue'

interface Country {
  name: string
  code: string
  dial: string
  flag: string
}

interface DemoForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: Country | null
  message: string
}

const data = {
  heading: 'Request Demo',
  title: {
    titleFirst: 'Kembangkan bisnis hotel Anda dengan produk add-ons',
    titleSecond: 'Cakrasoft'
  },
  desk: 'Booking Engine, Channel Manager, dan Cakra Loyalty solusi terintegrasi untuk operasional hotel yang lebih efisien.'
}

const Products = [
  { title: 'Booking Engine', desk: 'Reservasi langsung tanpa komisi OTA', icon: CalendarDays },
  { title: 'Channel Manager', desk: 'Integrasi dengan OTA dan GDS', icon: Share2 },
  { title: 'Cakra Loyalty', desk: 'Tingkatkan loyalitas dan retensi tamu', icon: Crown }
]

const countries: Country[] = [
  { name: 'Amerika Serikat', code: 'US', dial: '+1', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'Australia', code: 'AU', dial: '+61', flag: 'https://flagcdn.com/w40/au.png' },
  { name: 'Indonesia', code: 'ID', dial: '+62', flag: 'https://flagcdn.com/w40/id.png' },
  { name: 'Jepang', code: 'JP', dial: '+81', flag: 'https://flagcdn.com/w40/jp.png' },
  { name: 'Singapura', code: 'SG', dial: '+65', flag: 'https://flagcdn.com/w40/sg.png' },
  { name: 'Malaysia', code: 'MY', dial: '+60', flag: 'https://flagcdn.com/w40/my.png' },
  { name: 'China', code: 'CN', dial: '+86', flag: 'https://flagcdn.com/w40/cn.png' },
]

const indonesia = countries.find((country) => country.code === 'ID')!
const phoneCountry = ref<Country>(indonesia)
const form = ref<DemoForm>(createEmptyForm())
const isSubmitted = ref(false)
const selectPt = {
  overlay: { class: '!z-[9999] !mt-1 !overflow-hidden !rounded-lg !border !border-slate-200 !bg-white !opacity-100 !shadow-xl' },
  listContainer: { class: '!max-h-[220px] !overflow-y-auto !bg-white' },
  list: { class: 'm-0 list-none p-1' },
  option: { class: 'cursor-pointer rounded-md px-2 py-2 text-base text-slate-700 hover:bg-blue-50' },
  dropdown: { class: '!w-8' },
  dropdownIcon: { class: '!h-3 !w-3' }
}
const phoneSelectPt = {
  ...selectPt,
  overlay: { class: '!z-[9999] !mt-1 !w-56 !overflow-hidden !rounded-lg !border !border-slate-200 !bg-white !opacity-100 !shadow-xl' },
  label: { class: '!px-5 !py-0 !text-xs' },
  dropdown: { class: '!w-6' },
  dropdownIcon: { class: '!h-3 !w-3' }
}

function createEmptyForm(): DemoForm {
  return { firstName: '', lastName: '', email: '', phone: '', country: null, message: '' }
}

function resetForm(): void {
  form.value = createEmptyForm()
  phoneCountry.value = indonesia
  isSubmitted.value = false
}

function handleFormSubmit(): void {
  isSubmitted.value = true
}
</script>

<template>
  <Navbar />

  <main class="min-h-screen bg-white pt-20 font-sans">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <LeftSideRequestDemo :small-products="Products" :data="data" />

        <section class="lg:col-span-7" aria-labelledby="request-demo-heading">
          <div class="mx-auto max-w-[540px] rounded-xl border border-slate-300 bg-white p-4 shadow-sm sm:p-5">
            <header class="mb-7">
              <h1 id="request-demo-heading" class="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
                Request <span class="text-[#075fe8]">Demo</span>
              </h1>
              <p class="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                Jadwalkan demo produk Add-ons Cakrasoft dan temukan solusi terbaik untuk bisnis hotel Anda.
              </p>
            </header>

            <form class="space-y-5" @submit.prevent="handleFormSubmit" @reset.prevent="resetForm">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <fieldset class="min-w-0 rounded-lg border border-slate-300 px-3 transition focus-within:border-[#075fe8]  focus-within:ring-[#075fe8]/15">
                  <legend class="mr-auto px-3 text-xs font-medium text-slate-500">First Name *</legend>
                  <InputText id="first-name" v-model="form.firstName" name="firstName" autocomplete="given-name"
                    placeholder="First Name" required aria-label="First Name" class="h-12! w-full! border-0! bg-transparent! p-0! text-base! text-slate-700! shadow-none! outline-none!" />
                </fieldset>
                <fieldset class="min-w-0 rounded-lg border border-slate-300 px-3 transition focus-within:border-[#075fe8]  focus-within:ring-[#075fe8]/15">
                  <legend class="mr-auto px-3 text-xs font-medium text-slate-500">Last Name *</legend>
                  <InputText id="last-name" v-model="form.lastName" name="lastName" autocomplete="family-name"
                    placeholder="Last Name" required aria-label="Last Name" class="h-12! w-full! border-0! bg-transparent! p-0! text-base! text-slate-700! shadow-none! outline-none!" />
                </fieldset>
              </div>

              <fieldset class="min-w-0 rounded-lg border border-slate-300 px-3 transition focus-within:border-[#075fe8]  focus-within:ring-[#075fe8]/15">
                <legend class="mr-auto px-3 text-xs font-medium text-slate-500">Email *</legend>
                <InputText id="work-email" v-model="form.email" name="email" type="email" autocomplete="email"
                  placeholder="Example@gmail.com" required aria-label="Work Email" class="h-12! w-full! border-0! bg-transparent! p-0! text-lg! text-slate-700! shadow-none! outline-none! placeholder:text-slate-300!" />
              </fieldset>

              <fieldset class="min-w-0 rounded-lg border border-slate-300 px-3 transition focus-within:border-[#075fe8]  focus-within:ring-[#075fe8]/15">
                <legend class="mr-auto px-3 text-xs font-medium text-slate-500">Phone Number *</legend>
                <InputGroup class="h-12 w-full items-center gap-0">
                  <InputGroupAddon class="border-0! bg-transparent! p-0! pr-2!">
                    <Select v-model="phoneCountry" :options="countries" option-label="name" aria-label="Kode negara nomor telepon"
                      :pt="phoneSelectPt" scroll-height="220px" class="w-auto! border-0! bg-transparent! text-base! shadow-none! scrollbar-hide" append-to="body">
                      <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex items-center gap-1 whitespace-nowrap px-0">
                          <img :src="slotProps.value.flag" :alt="`Bendera ${slotProps.value.name}`" class="h-3 w-4 rounded-[1px] object-cover" />
                          <span class="text-sm font-medium">{{ slotProps.value.dial }}</span>
                        </div>
                        <span v-else class="text-sm">Pilih</span>
                      </template>
                      <template #option="slotProps">
                        <div class="flex w-full items-center gap-2 px-3 py-2">
                          <img :src="slotProps.option.flag" :alt="`Bendera ${slotProps.option.name}`" class="h-3 w-4 rounded-[1px] object-cover" />
                          <span class="text-sm">{{ slotProps.option.dial }}</span>
                          <span class="text-xs text-slate-500">{{ slotProps.option.name }}</span>
                        </div>
                      </template>
                    </Select>
                  </InputGroupAddon>
                  <div class="w-px h-6 bg-slate-300"></div>
                  <InputText id="phone-number" v-model="form.phone" name="phone" type="tel" inputmode="tel"
                    autocomplete="tel-national" placeholder="81234567890" aria-label="Phone Number"
                    class="h-12! min-w-0! flex-1! border-0! bg-transparent! p-0! pl-3! text-base! text-slate-700! shadow-none! outline-none! placeholder:text-slate-300!" />
                </InputGroup>
              </fieldset>

              <fieldset class="min-w-0 rounded-lg border border-slate-300 px-3 transition focus-within:border-[#075fe8]  focus-within:ring-[#075fe8]/15">
                <legend class="mr-auto px-3 text-xs font-medium text-slate-500">Country or Region *</legend>
                <Select id="country-region" v-model="form.country" :options="countries" option-label="name" name="country"
                  placeholder="Select Country" required aria-label="Country or Region" :pt="selectPt" scroll-height="220px"
                  class="relative h-12! w-full! border-0! bg-transparent! text-base! shadow-none! scrollbar-hide pt-2" append-to="body">
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <img :src="slotProps.value.flag" :alt="`Bendera ${slotProps.value.name}`" class="h-3 w-5 rounded-[1px] object-cover" />
                      <span>{{ slotProps.value.name }}</span>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center px-3 py-2 text-sm gap-2">
                      <img :src="slotProps.option.flag" :alt="`Bendera ${slotProps.option.name}`" class="h-3 w-5 rounded-[1px] object-cover" />
                      <span>{{ slotProps.option.name }}</span>
                    </div>
                  </template>
                </Select>
              </fieldset>

              <div>
                <div class="mb-2 flex items-center justify-between gap-3">
                  <label for="more-information" class="text-xs font-medium text-slate-700">Provide more information *</label>
                  <span class="text-[10px] text-slate-400">(Optional)</span>
                </div>
                <Textarea id="more-information" v-model="form.message" name="message" rows="7"
                  placeholder="Where you know cakra . . ." class="w-full! resize-y! rounded-lg! border-slate-300! p-3! text-base! shadow-none! outline-none! placeholder:text-slate-300! focus:border-[#075fe8]! focus:ring-2! focus:ring-[#075fe8]/15!" />
              </div>

              <p class="text-sm text-slate-400">If you send this you agree to start Demo .</p>

              <div class="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                <Button type="submit" label="Start Demo" class=" justify-center! rounded-md! border-[#075fe8]! bg-[#075fe8]! p-3! text-md! font-bold! text-white! shadow-none! hover:bg-[#0751ca]!" />
                
                <Button type="reset" label="Cancel" class=" justify-center! border!  rounded-md! border-[#075fe8]! bg-white! p-3! text-xs! font-bold! text-[#075fe8]! shadow-none! hover:bg-blue-50!" />
              </div>

              <div v-if="isSubmitted" class="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700" role="status">
                <CheckCircle2 class="h-4 w-4" />
                Form berhasil dikirim. Tim kami akan segera menghubungi Anda.
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </main>
  <Footer />
</template>