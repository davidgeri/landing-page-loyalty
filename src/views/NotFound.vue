<script setup lang="ts">
import {useSeoMeta, useHead} from "@unhead/vue"

useSeoMeta({
  title: '404 - Halaman Tidak Ditemukan | Cakrasoft',
  description: 'Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan. Kembali ke beranda Cakrasoft untuk melihat solusi teknologi hotel kami.',
  ogTitle: '404 - Halaman Tidak Ditemukan | Cakrasoft',
  ogDescription: 'Halaman yang Anda tuju tidak tersedia. Silakan kembali ke beranda Cakrasoft.',
  ogImage: '/images/Logo-cakra-minimal.png',
  twitterCard: 'summary',
})

useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

import Navbar from '../components/navbar/Navbar.vue';
import { RouterLink } from 'vue-router';
import FooterComponent from '../components/footer/FooterComponent.vue';

const data = {
    logo: "/images/Logo-cakra-minimal.png",
    status_first: "4",
    status_second: "4",
    titile: "Oops! Sorry Something Went Wrong /:",
    desk: "Halaman yang anda cari mungkin sudah dipindahkan, dihapus, atau tidak pernah ada.",
    button : {
        name :  "Kembali ke Beranda",
        navto : "/"
    }
}
</script>

<template>
    <main>
        <Navbar />
        <section class="flex min-h-screen justify-center items-center text-center">
            <div class="flex flex-col gap-2 items-center text-center">

                <div class="flex gap-2">
                    <p class="text-8xl -z-30 -rotate-12 text-stone-500 font-extrabold">{{ data.status_first }}</p>
                    <img :src="data.logo" alt="logo-cakra" width="100" height="80" draggable="false" fetchpriority="high">
                    <p class="text-8xl -z-30 rotate-12 font-extrabold text-stone-500">{{ data.status_second }}</p>
                </div>

                <div class="flex flex-col gap-2">
                    <h1 class="text-2xl font-bold text-stone-600">{{ data.titile }}</h1>
                    <p class="text-sm text-stone-500">{{ data.desk }}</p>
                    <div>
                        <RouterLink class="text-blue-500 font-semibold border-b" :to="data.button.navto">{{ data.button.name }}</RouterLink>
                    </div>
                </div>
                
            </div>
        </section>
        <FooterComponent />
    </main>
</template>