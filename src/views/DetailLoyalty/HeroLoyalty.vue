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
    <section class="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:flex-row lg:gap-16 lg:px-8" aria-labelledby="loyalty-heading">
        <div class="flex max-w-xl flex-1 flex-col gap-5">
            <div class="flex justify-start items-center">
                <span class="flex items-center justify-center gap-3 border p-1 rounded-lg px-8">
                    <span class="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true"></span>
                    <span class="font-semibold text-blue-500">{{ props.Leftside.heading }}</span>
                </span>
            </div>
            <h1 id="loyalty-heading" class="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">Bangun <span class="text-blue-500">Loyalitas
                    Tamu </span> Melalui Membership, Poin, dan Reward</h1>
            <p class="max-w-lg leading-relaxed text-slate-600">{{ props.Leftside.desk }}</p>
        </div>

        <aside class="relative isolate mx-auto w-full max-w-md px-3 pb-14 pt-12 sm:px-5 sm:pt-14 lg:mx-0 lg:flex-1" aria-label="Contoh kartu keanggotaan loyalitas">

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

        </aside>
    </section>
</template>
