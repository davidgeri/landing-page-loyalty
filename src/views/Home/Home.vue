<script setup lang="ts">
import Navbar from '../../components/navbar/Navbar.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import HomeHero from './HomeHero.vue';
import HomePartnership from './HomePartnership.vue';
import ProblemClientHome from './ProblemClientHome.vue';

// import {useHomeSeo} from './UseHomeSeo.ts'

// * SEO 

// useHomeSeo()

const dataHero = {
    images: "/images/Mockup(Hero).png",
    alt_img: "Mockup produk CakraSoft Cloud Hotel",
    desk: "maksimalkan reservasi langsung, kendalikan semua channel penjualan, dan tingkatkan loyalitas tamu berkat add-ons yang terintegrasi mulus dengan cakrasoft Cloud Hotel.",
    title: "Terintegrasi dengan CakraSoft Cloud",
    left_button: {
        name: "Request Demo",
        navto: "request-demo"
    },
    right_button: {
        name: "Explore Products",
        navto: "products"
    },
}

const toolTip = '<div class="flex mb-1 border bg-stone-600 text-white p-1 rounded-xl px-5 gap-1">Mulai coba <span class="-mr-1 inline-flex items-center justify-center leading-none px-1.5 rounded-sm bg-blue-600 text-blue-50 text-xs font-medium font-mono">Now</span></div>';

const partnershipHeading = {
    title : "Dipercayai oleh Berbagai Hotel dalam mengelola Operasionalnya",
    desk: "Lebih dari 250 Perusahaan Telah memilih PT Cakra Media Data untuk Solusi Terbaik"
}

const partnershipImages = [
    "/images/partnership/client-1.png",
    "/images/partnership/client-2.png",
    "/images/partnership/client-3.png",
    "/images/partnership/client-4.png",
    "/images/partnership/client-5.png",
    "/images/partnership/client-6.png",
    "/images/partnership/client-8.png",
    "/images/partnership/client-9.png",
    "/images/partnership/client-12.png",
    "/images/partnership/client-13.png",
    "/images/partnership/client-14.png",
    "/images/partnership/client-15.png",
    "/images/partnership/client-16.png",
]

</script>

<template>
    <Navbar />
    <main class="flex flex-col overflow-hidden md:flex-row md:justify-center">
        <section class="pt-25 ml-10 mr-10 justify-center items-center" aria-labelledby="hero-title">
            <HomeHero :data-hero="dataHero" :tool-tip="toolTip" />
            <HomePartnership :heading="partnershipHeading"
            :images="partnershipImages"/>
            <ProblemClientHome />
        </section>
    </main>
    <FooterComponent />
</template>