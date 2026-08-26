<script setup lang="ts">
import FooterComponent from '../../components/footer/FooterComponent.vue';
import Navbar from '../../components/navbar/Navbar.vue';
import Hero from './Hero.vue';
import Product from './Products.vue';
import Benefit from './Benefit.vue';
import Cta from '../../components/cta/Cta.vue';

const views = {
  subheading : "Langkah selanjutnya",
  title : "Belum yakin produk mana yang sesuai ?",
  desk : "Konsultasikan kebutuhan hotel Anda bersama tim Cakrasoft dan dapatkan informasi produk yang sesuai."
}

const ctaButton = {
  leftbtn : {
    name : "Request Demo",
    navto: "/request-demo"
  },
  rightbtn : {
    name: "Contact Our Team",
    navto : "/contact"
  }
}

const RightsideHero = [
  {
    image : "/assets/c-manajer-ui.png",
    alt : "Dashboard 1",
    class : "absolute top-2 md:top-4 right-10 md:right-16 w-50 md:w-70 rounded-lg shadow-xl bg-white z-10 rotate-[5deg] transition-transform duration-300 hover:-translate-y-3 cursor-pointer"
  },
  {
    image : "/assets/frontdesk-desktop-1.png",
    alt : "Dashboard 2",
    class : "absolute top-16 md:top-20 left-4 md:left-12 w-50 md:w-70 rounded-lg shadow-xl bg-white z-20 rotate-[-8deg] transition-transform duration-300 hover:hover:-translate-y-3 cursor-pointer"
  },
  {
    image : "/assets/loyalty-mobile-2.png",
    alt : "Dashboard 3",
    class : "absolute bottom-6 md:top-30 right-2 md:right-4 w-50 md:w-70 rounded-lg shadow-2xl border border-gray-100 bg-white z-30 rotate-12 transition-transform duration-300 hover:hover:-translate-y-3 cursor-pointer"
  },
]

const LeftSideHero = {
  heading : "Solusi Cloud Terbaik",
  title : "Produk Add-ons untuk Mendukung Pemasaran dan",
  importantTitle : " Operasional Hotel",
  desk : "Pilih solusi yang sesuai dengan kebutuhan hotel, mulai dari reservasi langsung, pengelolaan channel, hingga program loyalitas tamu."
}
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">
    <Navbar />

    <main class="pt-24">
      <Hero 
        :-leftside="LeftSideHero"
        :-rightside="RightsideHero"
      />
      <Product />
      <Benefit />
      
      <div class="-mb-36">
        <Cta 
          :view="views" 
          :button="ctaButton"
        />
      </div>
      
      <FooterComponent />
    </main>
  </div>
</template>