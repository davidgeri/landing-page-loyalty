<script setup lang="ts">
import HeroBe from './HeroBe.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import Navbar from '../../components/navbar/Navbar.vue';

</script>

<template>
    <main class="w-full overflow-x-clip">
    <Navbar />
    <section
        class="mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:px-8 md:pt-36 lg:px-10 lg:pt-40 lg:pb-24 items-center"
        aria-labelledby="hero-title">
        <HeroBe/>
    </section>
    </main>
    <FooterComponent />
</template>