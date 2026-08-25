<script setup lang="ts">
import { Handshake, Gift, Award } from '@lucide/vue'
import CardLoyalty from '../../components/cardLoyalty/CardLoyalty.vue'

const FloatText = [
    {
        ico : Handshake,
        text : "Loyalitas"
    },
    {
        ico : Gift,
        text : "Reward"
    },
    {
        ico : Award,
        text : "Membership"
    },
]

const Required = [
    {
        title : "Point Required",
        require : "280 + pts"
    },
    {
        title : "Bonus Earned",
        require : "+20.00%"
    }
]

const Benefit = [
    {
        text : "20% Bonus Points",
    },
    {
        text : "Free Railway Station Transfer",
    },
    {
        text : "Vip Lounge Accsess",
    },
    {
        text : "Dedicated Manager",
    },
]

const Card = {
    title : "Your Tier",
    tier : "Platinum",
    desk : "Top-tier membership with maximum benefits and privilages",
    required : Required,
    benefit : Benefit
}

interface LeftSide {
    heading: string
    desk: string
}

interface Props {
    Leftside: LeftSide
}

const props = defineProps<Props>()

</script>

<template>
    <main class="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:px-8">
        <section class="flex max-w-xl flex-1 flex-col gap-4">
            <div class="flex justify-start items-center">
                <span class="flex items-center justify-center gap-3 border p-1 rounded-lg px-8">
                    <p class="w-2 h-2 rounded-full bg-blue-500"></p>
                    <p class="font-semibold text-blue-500">{{ props.Leftside.heading }}</p>
                </span>
            </div>
            <h1 class="text-4xl font-semibold leading-tight md:text-5xl">Bangun <span class="text-blue-500">Loyalitas
                    Tamu </span> Melalui Membership, Poin, dan Reward</h1>
            <p class="leading-relaxed text-slate-600">{{ props.Leftside.desk }}</p>
        </section>

        <section class="relative isolate mx-auto w-full max-w-md px-3 pt-12 pb-14 sm:px-5 sm:pt-14 lg:mx-0 lg:flex-1">

            <div
                v-for="(item, index) in FloatText"
                :key="item.text"
                class="pointer-events-none absolute z-10 flex items-center gap-2 rounded-md border border-slate-100 bg-white px-5 py-2 text-md font-semibold text-slate-800 shadow-md shadow-slate-200/70 sm:px-4 sm:py-2.5 sm:text-sm"
                :class="[
                    index === 0 && 'left-0 top-1 -rotate-3',
                    index === 1 && 'right-0 top-1 rotate-3',
                    index === 2 && 'bottom-1 left-2 -rotate-3 sm:left-0',
                ]"
            >
                <component :is="item.ico" class="h-4 w-4 text-blue-500 sm:h-5 sm:w-5" />
                <span>{{ item.text }}</span>
            </div>

            <div class="relative z-0 transition duration-150 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
                <CardLoyalty 
                    :title="Card.title"  
                    :tier="Card.tier"
                    :desk="Card.desk"
                    :required="Card.required"
                    :benefit="Card.benefit"
                />
            </div>

        </section>
    </main>
</template>
