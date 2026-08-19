<script setup lang="ts">
import FooterComponent from '../components/footer/FooterComponent.vue';
import Navbar from '../components/navbar/Navbar.vue';
import Hero from './Product/Hero.vue';
import Product from './Product/Products.vue';
import Benefit from './Product/Benefit.vue';
import CTA from './Product/Cta.vue';
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">
    
    <div class="sticky top-0 z-50 bg-white w-full shadow-sm pb-16">
      <Navbar />
    </div>

    <Hero />
    <Product />
    <Benefit />
    <CTA />
    <FooterComponent/>
    
  </div>
</template>