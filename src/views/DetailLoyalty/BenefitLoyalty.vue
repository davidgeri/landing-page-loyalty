<script setup lang="ts">
import { useSeoMeta} from '@unhead/vue'

const env = import.meta.env

// useSeoMeta({
//     title: '',
//     description: '',
//     ogTitle: '',
//     ogDescription: '',
//     ogImage: '',
//     ogUrl: '',
// })

// useHead({
//     link: [
//         {rel: 'canonical', href: env.VITE_STATUS === 'DEV'? env.VITE_URL_DEV : env.VITE_URL_PROD}
//     ]
// })

import {
    Building2,
    User,
    RefreshCcw,
    Database,
    Target,
    MessagesSquare,
    TrendingUp,
    Coins,
    BadgePercent,
    Gift,
    Crown,
    Sparkles,
} from "@lucide/vue";

import OutlinePillPing from "../../components/outlinepill/OutlinePillPing.vue";

interface BenefitItem {
    icon: unknown;
    text: string;
}

interface BenefitGroup {
    title: string;
    icon: unknown;
    items: BenefitItem[];
}

const benefitGroups: BenefitGroup[] = [
    {
        title: "Bagi Hotel",
        icon: Building2,
        items: [
            { icon: RefreshCcw, text: "Meningkatkan kunjungan kembali." },
            { icon: Database, text: "Membangun database pelanggan." },
            { icon: Target, text: "Mendukung promosi yang lebih terarah." },
            { icon: MessagesSquare, text: "Meningkatkan interaksi dengan tamu." },
            { icon: TrendingUp, text: "Mendorong peningkatan revenue" },
        ],
    },
    {
        title: "Bagi Tamu",
        icon: User,
        items: [
            { icon: Coins, text: "Mendapatkan poin." },
            { icon: BadgePercent, text: "Mendapatkan promo khusus." },
            { icon: Gift, text: "Mendapatkan reward." },
            { icon: Crown, text: "Mendapatkan keuntungan sesuai tier." },
            { icon: Sparkles, text: "Memperoleh pengalaman yang lebih personal." },
        ],
    },
];

const data = {
    pillText: "Loyalty Flow",
    pillClassPil: "text-blue-500",
    pillBgPing: "bg-blue-500",
    title: "Manfaat Loyalty",
};

</script>

<template>
    <section aria-labelledby="loyalty-benefits-title" class="w-full py-16 px-4 sm:px-6 lg:px-8">
        <header class="mb-12 flex flex-col items-center gap-3 text-center lg:mb-16">
            <OutlinePillPing :text="data.pillText" :classPil="data.pillClassPil" :bgPing="data.pillBgPing" />
            <h2 id="loyalty-benefits-title" class="text-2xl font-bold text-slate-900 sm:text-3xl">
                {{ data.title }}
            </h2>
        </header>

        <div class="mx-auto grid w-full max-w-4xl grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
            <article v-for="group in benefitGroups" :key="group.title" class="flex flex-col">
                <header class="flex items-center justify-center gap-2 border-b border-slate-200 pb-3">
                    <component :is="group.icon" class="h-5 w-5 shrink-0 text-slate-700" :stroke-width="1.75" />
                    <h3 class="font-semibold text-slate-900">{{ group.title }}</h3>
                </header>

                <ul class="divide-y divide-slate-100">
                    <li v-for="item in group.items" :key="item.text" class="flex items-start gap-3 py-3">
                        <component :is="item.icon" class="mt-0.5 h-4 w-4 shrink-0 text-slate-500" :stroke-width="1.75" />
                        <span class="text-sm text-slate-700">{{ item.text }}</span>
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>