<script setup lang="ts">
import FooterComponent from '../components/footer/FooterComponent.vue';
import Navbar from '../components/navbar/Navbar.vue';
import Hero from './FAQ/Hero.vue';
import Content from './FAQ/Content.vue';
import CTA from './FAQ/Cta.vue';

</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">
    
    <div class="sticky top-0 z-50 bg-white w-full shadow-sm pb-16">
      <Navbar />
    </div>

    <Hero />
    <Content />
    <CTA />
    <FooterComponent/>
    
  </div>
</template>