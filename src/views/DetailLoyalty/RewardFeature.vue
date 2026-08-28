<script setup lang="ts">
import {
    Ticket,
    LayoutPanelTop,
    ArrowUpToLine,
    Bell,
    UtensilsCrossed,
    Crown,
} from "@lucide/vue";

import OutlinePill from "../../components/outlinepill/OutlinePill.vue";

const rewardFeatures = [
    { icon: Ticket, label: "Points Required to Redeem" },
    { icon: LayoutPanelTop, label: "Minimum Membership Tier" },
    { icon: ArrowUpToLine, label: "Remaining Stock" },
    { icon: Bell, label: "Redemption Period" },
    { icon: UtensilsCrossed, label: "Available Redeem Hours" },
    { icon: Crown, label: "Terms & Conditions of Use" },
];

const data = {
    outlinePill: "Reward Feature",
    tyleOutlinePill: "text-blue-500",
    title: "Fitur Reward",
    MockupImage: "/images/Reward-mockup.png"
}

</script>

<template>
    <section aria-labelledby="reward-feature-title" class="w-full py-16 px-4 sm:px-6 lg:px-8">

        <header class="flex flex-col items-center text-center gap-4 mb-12 lg:mb-16">
            <OutlinePill :text="data.outlinePill" :style="data.tyleOutlinePill" />
            <h2 id="reward-feature-title" class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {{ data.title }}
            </h2>
        </header>

        <section class="flex justify-center">
            <div
                class="mx-auto flex max-w-5xl flex-col  gap-10 md:flex-row md:items-center md:justify-between md:gap-50">
                <figure class="w-full max-w-55 shrink-0 sm:max-w-48 md:max-w-60">
                    <img :src="data.MockupImage" alt="Tampilan aplikasi fitur redeem reward pada perangkat mobile"
                        class="h-auto w-full object-contain" loading="lazy" />
                </figure>

                <ul class="flex w-full flex-col gap-5 sm:gap-6 md:max-w-md">
                    <li v-for="feature in rewardFeatures" :key="feature.label" class="flex items-center gap-4">
                        <span aria-hidden="true"
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm sm:h-11 sm:w-11">
                            <component :is="feature.icon" class="h-5 w-5" :stroke-width="2" />
                        </span>
                        <span class="text-sm font-semibold text-slate-800 sm:text-base">
                            {{ feature.label }}
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </section>
</template>