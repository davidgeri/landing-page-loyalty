<script setup lang="ts">
import Navbar from '../../components/navbar/Navbar.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import HomeHero from './HomeHero.vue';
import HomePartnership from './HomePartnership.vue';
import ProblemClientHome from './ProblemClientHome.vue';
import Solution from './Solution.vue';
import Benefits from './Benefits.vue';
import HowWork from './HowWork.vue';
import { Award } from '@lucide/vue';
import ProductIntegration from './ProductIntegration.vue';
import Testimonial from './Testimonial.vue';
import Cta from '../../components/cta/Cta.vue';
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
    title: "Dipercayai oleh Berbagai Hotel dalam mengelola Operasionalnya",
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

const solutionDat = [
    {
        ico: "/images/logo-channel-manager.png",
        title: "Channel Manager",
        desk: "membantu hotel mengelola harga dan ketersediaan kamar pada berbagai channel penjualan melalui satu sistem.",
        button: {
            name: "Pelajari Lebih Lanjut",
            navto: "/product/channel-manager"
        }
    },
    {
        ico: "/images/logo-booking-engine-2.png",
        title: "Booking Engine",
        desk: "Membantu hotel menerima reservasi langsung melalui website dengan proses pemesanan yang mudah dan terintegrasi.",
        button: {
            name: "Pelajari Lebih Lanjut",
            navto: "/product/booking-engine"
        }
    },
    {
        ico: Award,
        title: "Cakra Loyalty",
        desk: "Membantu Hotel membangun Loyalitas tamu melalui membership, tier, poin, promosi, dan reward",
        button: {
            name: "Pelajari Lebih Lanjut",
            navto: "/product/cakra-loyalty"
        },
    },
]

const benefits = [
    "Terintegrasi dengan Cakrasoft Cloud Hotel.",
    "Data dikelola melalui sistem yang terpusat.",
    "Meningkatkan efisiensi operasional.",
    "Mengurangi pekerjaan manual.",
    "Mendukung strategi pemasaran hotel.",
    "Mudah di gunakan oleh tim hotel."
]

const viewCta = {
    subheading: "Langkah Selanjutnya",
    title: "Temukan Solusi Add-ons yang Tepat untuk Hotel",
    desk: " Konsultasikan kebutuhan hotel Anda bersama tim Cakrasoft dan dapatkan informasi produk yang sesuai.",
}

const button =  {
    leftbtn : {
      name: "Request Demo",
      navto: "/request-demo"
    },
    rightbtn : {
      name: "Contact Our Team",
      navto : "/contact-team"
    }
}
</script>

<template>
    <Navbar />
    <main class="w-full overflow-x-clip">
        <section
            class="mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:px-8 md:pt-36 lg:px-10 lg:pt-40 lg:pb-24"
            aria-labelledby="hero-title">
            <HomeHero :data-hero="dataHero" :tool-tip="toolTip" />
            <HomePartnership :heading="partnershipHeading" :images="partnershipImages" />
            <ProblemClientHome />
            <Solution :datas="solutionDat" />
            <Benefits :benefits="benefits" />
            <HowWork />
            <ProductIntegration />
            <Testimonial />
        </section>
    </main>
    <div class="-mb-36">
        <Cta :view="viewCta" :button="button" />
    </div>
    <FooterComponent />
</template>
