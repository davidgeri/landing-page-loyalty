<script setup lang="ts">
import Navbar from '../../components/navbar/Navbar.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import HeroLoyalty from './HeroLoyalty.vue';

import ClientProblemLoyalty from './ClientProblemLoyalty.vue';
import SolutionLoyalty from './SolutionLoyalty.vue';
import FeatureLoyalty from './FeatureLoyalty.vue';
import TierFeature from './TierFeature.vue';

const LeftSide = {
    heading: "Loyalty is Priority",
    desk: "Cakra Loyalty membantu hotel mengelola member, tier, poin, promosi, dan reward melalui sistem yang terintegrasi."
}

const SolutionDat = {
    Title : "Penjelasan Solusi",
    Desk : "Cakra Loyalty membantu hotel memberikan pengalaman yang lebih personal serta membangun hubungan jangka panjang dengan tamu melalui program loyalitas."
}

</script>

<template>
    <Navbar />
    <main class="overflow-hidden pt-20 justify-center flex flex-col">
        <HeroLoyalty :Leftside="LeftSide" />
        <ClientProblemLoyalty />
        <div class="w-full" v-animateonscroll="{ enterClass: 'animate__animated animate__fadeInUp', threshold: 0.5 }">
            <SolutionLoyalty :Title="SolutionDat.Title" :Desk="SolutionDat.Desk" />
        </div>
        <FeatureLoyalty />
        <TierFeature />
    </main>
    <FooterComponent />
</template>

<style scoped>
.animate__animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

.animate__fadeInUp {
    animation-name: fadeInUp;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
</style>
