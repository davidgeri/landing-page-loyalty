<script setup lang="ts">
import FooterComponent from '../../components/footer/FooterComponent.vue';
import Navbar from '../../components/navbar/Navbar.vue';
import Hero from './Hero.vue';
import Cta from '../../components/cta/Cta.vue';
import Problem from './Problem.vue';
import Solution from './Solution.vue';
import Fitur from './Fitur.vue';
import Flow from './Flow.vue';
import Benefit from './Benefit.vue';
import OTA from './OTA.vue';
import FAQ from './FAQ.vue';

const viewCta = {
    subheading: "Langkah Selanjutnya",
    title: "Temukan Solusi Add-ons yang Tepat untuk Hotel",
    desk: " Konsultasikan kebutuhan hotel Anda bersama tim Cakrasoft dan dapatkan informasi produk yang sesuai.",
}

const button = {
  leftbtn: {
    name: "Request Demo",
    navto: "/request-demo"
  },
  rightbtn: {
    name: "Contact Our Team",
    navto: "/contact-team"
  }
}

</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-800 selection:bg-blue-100">
    <Navbar />

    <section class="pt-24">
      <Hero />
      <Problem />
      <Solution />
      <Fitur />
      <Flow />
      <Benefit />
      <OTA />
      <FAQ />
        <div class="-mb-36">
            <Cta :view="viewCta" :button="button" />
        </div>
      <FooterComponent />
    </section>

  </div>
</template>