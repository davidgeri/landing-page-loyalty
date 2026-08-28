<script setup lang="ts">
import Navbar from '../../components/navbar/Navbar.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import HeroLoyalty from './HeroLoyalty.vue';
import { Gift, RotateCcwClock, Clock4, Plus, Minus } from "@lucide/vue"
import PromotionFeature from './PromotionFeature.vue';

import ClientProblemLoyalty from './ClientProblemLoyalty.vue';
import SolutionLoyalty from './SolutionLoyalty.vue';
import FeatureLoyalty from './FeatureLoyalty.vue';
import TierFeature from './TierFeature.vue';
import PoinFeature from './PoinFeature.vue';
import RewardFeature from './RewardFeature.vue';
import FlowLoyalty from './FlowLoyalty.vue';
import BenefitLoyalty from './BenefitLoyalty.vue';
import Cta from '../../components/cta/Cta.vue';
import FaqLoyalty from './FaqLoyalty.vue';

const LeftSide = {
    heading: "Loyalty is Priority",
    desk: "Cakra Loyalty membantu hotel mengelola member, tier, poin, promosi, dan reward melalui sistem yang terintegrasi."
}

const SolutionDat = {
    Title: "Penjelasan Solusi",
    Desk: "Cakra Loyalty membantu hotel memberikan pengalaman yang lebih personal serta membangun hubungan jangka panjang dengan tamu melalui program loyalitas."
}

const PoinFeatureDatFirst = [
    {
        icon: Gift,
        title: "Bonus Poin",
        desk: "Poin tambahan dari promo, ulang tahun, atau event khusus"
    },
    {
        icon: RotateCcwClock,
        title: "Riwayat Poin",
        desk: "semua pergerakan poin tercatat dan bisa di telusuri member"
    },
    {
        icon: Clock4,
        title: "Masa Berlaku Poin",
        desk: "Poin memiliki priode aktif sesuai kebijakan hotel"
    },
]

const PoinFeatureDatSecond = [
    {
        icon: Plus,
        title: "Penambahan Poin",
        desk: "Poin bertambah otomatis dari aktivitas member"
    },
    {
        icon: Minus,
        title: "Penukaran Poin",
        desk: "Poin berkurang saat di tukar reward atau kadaluarsa"
    },
]

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
    <Navbar />
    <main class="overflow-hidden pt-20 justify-center flex flex-col">
        <HeroLoyalty :Leftside="LeftSide" />
        <ClientProblemLoyalty />
        <div class="w-full" v-animateonscroll="{ enterClass: 'animate__animated animate__fadeInUp', threshold: 0.5 }">
            <SolutionLoyalty :Title="SolutionDat.Title" :Desk="SolutionDat.Desk" />
        </div>
        <FeatureLoyalty />
        <TierFeature />
        <PoinFeature :cardFirst="PoinFeatureDatFirst" :cardSecond="PoinFeatureDatSecond" />
        <PromotionFeature />
        <RewardFeature />
        <FlowLoyalty />
        <BenefitLoyalty />
        <FaqLoyalty />
        <div class="-mb-36">
            <Cta :view="viewCta" :button="button" />
        </div>
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
