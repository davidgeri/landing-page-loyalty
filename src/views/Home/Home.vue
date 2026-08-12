<script setup lang="ts">
import Navbar from '../../components/navbar/Navbar.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import HomeHero from './HomeHero.vue';

// import {useHomeSeo} from './UseHomeSeo.ts'

// * SEO 

// useHomeSeo()

const dataHero = {
    images: "/images/Mockup(Hero).png",
    alt_img: "Mockup produk CakraSoft Cloud Hotel",
    desk: "maksimalkan reservasi langsung, kendalikan semua channel penjualan, dan tingkatkan loyalitas tamu berkat add-ons yang terintegrasi mulus dengan cakrasoft Cloud Hotel.",
    title: "Terintegrasi dengan CakraSoft Cloud Hotel",
    left_button: {
        name: "Request Demo",
        navto: "request-demo"
    },
    right_button: {
        name: "Explore Products",
        navto: "products"
    },
}

const flight1 = '<div class="flex mb-1 border bg-stone-600 text-white p-1 rounded-xl px-5 gap-1">Mulai coba <span class="-mr-1 inline-flex items-center justify-center leading-none px-1.5 rounded-sm bg-blue-600 text-blue-50 text-xs font-medium font-mono">Now</span></div>';



</script>

<template>
    <Navbar />
    <main class="flex flex-col overflow-hidden md:flex-row md:justify-center">
        <section class="pt-25 ml-10 mr-10 justify-center" aria-labelledby="hero-title">
            <HomeHero :data-hero="dataHero" :flight1="flight1" />
        </section>
    </main>
    <FooterComponent />
</template>