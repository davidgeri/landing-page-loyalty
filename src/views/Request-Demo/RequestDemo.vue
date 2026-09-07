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

import { onUnmounted, ref } from 'vue'
import { HandleFetchApi } from '../../composable/FetchApi'
import Navbar from '../../components/navbar/Navbar.vue'
import Footer from '../../components/footer/FooterComponent.vue'
import LeftSideRequestDemo from './LeftSideRequestDemo.vue'
import InputText from 'primevue/inputtext'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { CheckCircle2, CircleAlert, X } from '@lucide/vue'
import type { DemoForm, Country } from '../../type/main.ts'
import { ArticleReqDemo, DataRequestDemo, PhoneSelectPt, SelectPt, countriesReqDemo } from "../../constant/RequestDemoConstant.ts"
import {  PhoneNumber, EmailSchema } from '../../validate/RequestDemoValidations.ts'


const indonesia = countriesReqDemo.find((country) => country.code === 'ID')!
const createEmptyForm = (): DemoForm => {
  return { firstName: '', lastName: '', email: '', phone: '', country: null, message: '' }
}
const phoneCountry = ref<Country>(indonesia)
const form = ref<DemoForm>(createEmptyForm())
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errors = ref<Partial<Record<keyof DemoForm, string>>>({})
let notificationTimeout: ReturnType<typeof setTimeout> | undefined

const clearNotificationTimeout = () => {
  if (notificationTimeout) {
    clearTimeout(notificationTimeout)
    notificationTimeout = undefined
  }
}

const showNotification = (status: 'success' | 'error') => {
  clearNotificationTimeout()
  submitStatus.value = status
  notificationTimeout = setTimeout(() => {
    submitStatus.value = 'idle'
    notificationTimeout = undefined
  }, 10000)
}

const closeNotification = () => {
  clearNotificationTimeout()
  submitStatus.value = 'idle'
}

const resetForm = (): void => {
  form.value = createEmptyForm()
  phoneCountry.value = indonesia
  errors.value = {}
  closeNotification()
}

const validateForm = (): boolean => {
  const nextErrors: Partial<Record<keyof DemoForm, string>> = {}
  const firstName = form.value.firstName.trim()
  const lastName = form.value.lastName.trim()
  const email = form.value.email.trim()
  const phone = form.value.phone.trim()
  const message = form.value.message.trim()

  const parseEmail = EmailSchema.safeParse({email : email})
  const parsePhone = PhoneNumber.safeParse({phoneNumber : phone})

  if (!firstName) nextErrors.firstName = 'Nama depan wajib diisi.'
  if (!lastName) nextErrors.lastName = 'Nama belakang wajib diisi.'

  if (!email) {
    nextErrors.email = 'Email wajib diisi.'
  } else if (!parseEmail.success) {
    nextErrors.email = 'Masukkan alamat email yang valid.'
  }
  if (!parsePhone) {
    nextErrors.phone = 'Nomor telepon wajib diisi.'
  } else if (!parsePhone.success) {
    nextErrors.phone = 'Masukkan nomor telepon yang valid.'
  }
  if (!form.value.country) nextErrors.country = 'Pilih negara atau wilayah.'
  if (!message) nextErrors.message = 'Informasi tambahan wajib diisi.'

  errors.value = nextErrors
  return Object.keys(nextErrors).length === 0

}

const EmailFormSubmit = import.meta.env.VITE_EMAIL
const url = `https://formsubmit.co/ajax/${EmailFormSubmit}`

const handleFormSubmit = async (): Promise<void> => {
  closeNotification()
  if (!validateForm()) {
    showNotification('error')
    return
  }

  isSubmitting.value = true

  try {
    const payload = {
      name: `${form.value.firstName.trim()} ${form.value.lastName.trim()}`,
      email: form.value.email.trim(),
      phone: `${phoneCountry.value.dial} ${form.value.phone.trim()}`,
      country: form.value.country?.name,
      _subject: 'Request Demo Cakrasoft',
      message: form.value.message.trim(),
      _template: 'basic',
      _captcha: 'false'
    }

    const { error } = await HandleFetchApi(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: JSON.stringify(payload)
    })

    if (error.value) throw new Error('Gagal mengirim pesan')

    resetForm()
    showNotification('success')
  } catch {
    showNotification('error')
  } finally {
    isSubmitting.value = false
  }
}

onUnmounted(clearNotificationTimeout)
</script>

<template>
  <Navbar />

  <main class="min-h-screen bg-white pt-20 font-sans">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <LeftSideRequestDemo :small-products="ArticleReqDemo" :data="DataRequestDemo" />

        <section class="lg:col-span-7" aria-labelledby="request-demo-heading">
          <div class="mx-auto max-w-135 rounded-xl border border-slate-300 bg-white p-4 shadow-sm sm:p-5">
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
                <fieldset
                  :class="['min-w-0 rounded-lg border px-3 transition focus-within:border-[#075fe8] focus-within:ring-[#075fe8]/15', errors.firstName ? 'border-red-500' : 'border-slate-300']">
                  <legend class="mr-auto px-3 text-xs font-medium text-slate-500">First Name *</legend>
                  <InputText id="first-name" v-model="form.firstName" name="firstName" autocomplete="given-name"
                    placeholder="First Name" required aria-label="First Name" :aria-invalid="!!errors.firstName"
                    class="h-12! w-full! border-0! bg-transparent! p-0! text-base! text-slate-700! shadow-none! outline-none!" />
                  <p v-if="errors.firstName" class="pb-2 text-xs text-red-600">{{ errors.firstName }}</p>
                </fieldset>
                <fieldset
                  :class="['min-w-0 rounded-lg border px-3 transition focus-within:border-[#075fe8] focus-within:ring-[#075fe8]/15', errors.lastName ? 'border-red-500' : 'border-slate-300']">
                  <legend class="mr-auto px-3 text-xs font-medium text-slate-500">Last Name *</legend>
                  <InputText id="last-name" v-model="form.lastName" name="lastName" autocomplete="family-name"
                    placeholder="Last Name" required aria-label="Last Name" :aria-invalid="!!errors.lastName"
                    class="h-12! w-full! border-0! bg-transparent! p-0! text-base! text-slate-700! shadow-none! outline-none!" />
                  <p v-if="errors.lastName" class="pb-2 text-xs text-red-600">{{ errors.lastName }}</p>
                </fieldset>
              </div>

              <fieldset
                :class="['min-w-0 rounded-lg border px-3 transition focus-within:border-[#075fe8] focus-within:ring-[#075fe8]/15', errors.email ? 'border-red-500' : 'border-slate-300']">
                <legend class="mr-auto px-3 text-xs font-medium text-slate-500">Email *</legend>
                <InputText id="work-email" v-model="form.email" name="email" type="email" autocomplete="email"
                  placeholder="Example@gmail.com" required aria-label="Work Email" :aria-invalid="!!errors.email"
                  class="h-12! w-full! border-0! bg-transparent! p-0! text-lg! text-slate-700! shadow-none! outline-none! placeholder:text-slate-300!" />
                <p v-if="errors.email" class="pb-2 text-xs text-red-600">{{ errors.email }}</p>
              </fieldset>

              <fieldset
                :class="['min-w-0 rounded-lg border px-3 transition focus-within:border-[#075fe8] focus-within:ring-[#075fe8]/15', errors.phone ? 'border-red-500' : 'border-slate-300']">
                <legend class="mr-auto px-3 text-xs font-medium text-slate-500">Phone Number *</legend>
                <InputGroup class="h-12 w-full items-center gap-0">
                  <InputGroupAddon class="border-0! bg-transparent! p-0! pr-2!">
                    <Select v-model="phoneCountry" :options="countriesReqDemo" option-label="name"
                      aria-label="Kode negara nomor telepon" :pt="PhoneSelectPt" scroll-height="220px"
                      class="w-auto! border-0! bg-transparent! text-base! shadow-none! scrollbar-hide" append-to="body">
                      <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex items-center gap-1 whitespace-nowrap px-0">
                          <img :src="slotProps.value.flag" :alt="`Bendera ${slotProps.value.name}`"
                            class="h-3 w-4 rounded-[1px] object-cover" />
                          <span class="text-sm font-medium">{{ slotProps.value.dial }}</span>
                        </div>
                        <span v-else class="text-sm">Pilih</span>
                      </template>
                      <template #option="slotProps">
                        <div class="flex w-full items-center gap-2 px-3 py-2">
                          <img :src="slotProps.option.flag" :alt="`Bendera ${slotProps.option.name}`"
                            class="h-3 w-4 rounded-[1px] object-cover" />
                          <span class="text-sm">{{ slotProps.option.dial }}</span>
                          <span class="text-xs text-slate-500">{{ slotProps.option.name }}</span>
                        </div>
                      </template>
                    </Select>
                  </InputGroupAddon>
                  <div class="w-px h-6 bg-slate-300"></div>
                  <InputText id="phone-number" v-model="form.phone" name="phone" type="tel" inputmode="tel"
                    autocomplete="tel-national" placeholder="81234567890" aria-label="Phone Number"
                    :aria-invalid="!!errors.phone"
                    class="h-12! min-w-0! flex-1! border-0! bg-transparent! p-0! pl-3! text-base! text-slate-700! shadow-none! outline-none! placeholder:text-slate-300!" />
                </InputGroup>
                <p v-if="errors.phone" class="pb-2 text-xs text-red-600">{{ errors.phone }}</p>
              </fieldset>

              <fieldset
                :class="['min-w-0 rounded-lg border px-3 transition focus-within:border-[#075fe8] focus-within:ring-[#075fe8]/15', errors.country ? 'border-red-500' : 'border-slate-300']">
                <legend class="mr-auto px-3 text-xs font-medium text-slate-500">Country or Region *</legend>
                <Select id="country-region" v-model="form.country" :options="countriesReqDemo" option-label="name"
                  name="country" placeholder="Select Country" required aria-label="Country or Region" :pt="SelectPt"
                  scroll-height="220px"
                  class="relative h-12! w-full! border-0! bg-transparent! text-base! shadow-none! scrollbar-hide pt-2"
                  append-to="body">
                  <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center gap-2">
                      <img :src="slotProps.value.flag" :alt="`Bendera ${slotProps.value.name}`"
                        class="h-3 w-5 rounded-[1px] object-cover" />
                      <span>{{ slotProps.value.name }}</span>
                    </div>
                    <span v-else>{{ slotProps.placeholder }}</span>
                  </template>
                  <template #option="slotProps">
                    <div class="flex items-center px-3 py-2 text-sm gap-2">
                      <img :src="slotProps.option.flag" :alt="`Bendera ${slotProps.option.name}`"
                        class="h-3 w-5 rounded-[1px] object-cover" />
                      <span>{{ slotProps.option.name }}</span>
                    </div>
                  </template>
                </Select>
                <p v-if="errors.country" class="pb-2 text-xs text-red-600">{{ errors.country }}</p>
              </fieldset>

              <div>
                <div class="mb-2 flex items-center justify-between gap-3">
                  <label for="more-information" class="text-xs font-medium text-slate-700">Provide more information
                    *</label>
                  <span class="text-[10px] text-slate-400">Wajib diisi</span>
                </div>
                <Textarea id="more-information" v-model="form.message" name="message" rows="7"
                  placeholder="Where you know cakra . . ." required :aria-invalid="!!errors.message"
                  :class="['w-full! resize-y! rounded-lg! p-3! text-base! shadow-none! outline-none! placeholder:text-slate-300! focus:border-[#075fe8]! focus:ring-2! focus:ring-[#075fe8]/15!', errors.message ? 'border-red-500!' : 'border-slate-300!']" />
                <p v-if="errors.message" class="mt-1 text-xs text-red-600">{{ errors.message }}</p>
              </div>

              <p class="text-sm text-slate-400">If you send this you agree to start Demo .</p>

              <div class="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                <Button type="submit" :label="isSubmitting ? 'Mengirim...' : 'Start Demo'" :disabled="isSubmitting"
                  class=" justify-center! rounded-md! border-[#075fe8]! bg-[#075fe8]! p-3! text-md! font-bold! text-white! shadow-none! hover:bg-[#0751ca]!" />

                <Button type="reset" label="Cancel"
                  class=" justify-center! border!  rounded-md! border-[#075fe8]! bg-white! p-3! text-xs! font-bold! text-[#075fe8]! shadow-none! hover:bg-blue-50!" />
              </div>

            </form>
          </div>
        </section>
      </div>
    </div>
  </main>
  <Footer />

  <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="translate-x-8 opacity-0"
    enter-to-class="translate-x-0 opacity-100" leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-x-0 opacity-100" leave-to-class="translate-x-8 opacity-0">
    <div v-if="submitStatus !== 'idle'"
      class="fixed right-4 top-5 z-50 flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-2xl bg-white/95 p-4 shadow-sm shadow-[#b9b9b941] backdrop-blur-md sm:right-6 sm:top-6"
      role="status">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        :class="submitStatus === 'success' ? 'text-emerald-600' : 'text-red-600'">
        <CheckCircle2 v-if="submitStatus === 'success'" class="h-8 w-8" />
        <CircleAlert v-else class="h-8 w-8" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="font-semibold text-slate-900">{{ submitStatus === 'success' ? 'Pesan berhasil dikirim' : 'Pesan gagal dikirim' }}</p>
        <p class="mt-1 leading-relaxed">{{ submitStatus === 'success' ? 'Tim kami akan segera merespons.' : 'Periksa input atau koneksi lalu coba lagi.' }}</p>
      </div>
      <button type="button" aria-label="Tutup notifikasi"
        class="shrink-0 rounded-lg p-1 text-slate-400 transition-colors hover:bg-stone-100 hover:text-stone-700"
        @click="closeNotification">
        <X class="h-4 w-4" />
      </button>
    </div>
  </Transition>
</template>