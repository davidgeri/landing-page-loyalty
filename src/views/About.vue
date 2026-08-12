<script setup lang="ts">
import FooterComponent from '../components/footer/FooterComponent.vue';
import Navbar from '../components/navbar/Navbar.vue';
import Hero from './About/Hero.vue';
import About from './About/About.vue';
import CTA from './About/Cta.vue';
import Ekosistem from './About/Ekosistem.vue';
import Visimisi from './About/Visimisi.vue';
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">
    
    <div class="sticky top-0 z-50 bg-white w-full shadow-sm pb-16">
      <Navbar />
    </div>

    <Hero />
    <About />
    <Visimisi />
    <Ekosistem />
    <CTA />
    <FooterComponent/>
    
  </div>
</template>