<script setup lang="ts">
import HeroBe from './HeroBe.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import Navbar from '../../components/navbar/Navbar.vue';
import SolutionBE from './SolutionBE.vue';
import ProblemBe from './ProblemBe.vue';
import MainFeatureBe from './MainFeatureBe.vue';
import WorkFlowBe from './WorkFlowBe.vue';
import FaqBe from './FaqBe.vue';
import Cta from '../../components/cta/Cta.vue';

const viewCta = {
    subheading: "Langkah Selanjutnya",
    title: "Mulai tingkatkan Reservasi Langsung Hotel Anda",
    desk: "Konsultasikan kebutuhan hotel Anda bersama tim Cakrasoft dan dapatkan informasi produk yang sesuai ",
}

const button = {
    leftbtn: {
        name: "Request Demo",
        navto: "/request-demo"
    },
    rightbtn: {
        name: "Contact Our Team",
        navto: "/contact"
    }
}

</script>

<template>
    <main class="w-full overflow-x-clip">
        <Navbar />
        <section
            class="mx-auto w-full max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 md:px-8 md:pt-36 lg:px-10 lg:pb-20 lg:pt-20"
            aria-labelledby="hero-title">
            <HeroBe />
            <div class="mt-8 md:ml-10 flex flex-col gap-8 md:flex-row md:items-start md:gap-10 ">
                <div class="w-full md:w-1/2">
                    <ProblemBe />
                </div>
                <div class="w-full md:w-1/2">
                    <SolutionBE />
                </div>
            </div>
            <MainFeatureBe />
            <WorkFlowBe />
            <FaqBe />
        </section>
    </main>
    <div class="-mb-36">
        <Cta :view="viewCta" :button="button" />
    </div>
    <FooterComponent />
</template>