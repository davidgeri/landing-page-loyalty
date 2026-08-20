<script setup lang="ts">
import { Percent, Pointer, CalendarX2, HeartOff } from '@lucide/vue'
import type { Component } from 'vue'

const data = {
    heading : "Client Problem",
    title : "Tantangan yang Sering Dihadapi Hotel",
    desk : "Karena sistem yang Anda gunakan sekarang masih berjalan sendiri-sendiri dan tidak saling terhubung, mengelola hotel jadi jauh lebih sulit dari seharusnya."
}

interface ProblemCard {
    title: string
    desk: string
    icon: Component
    offsetClass?: string
}

const problemCards: ProblemCard[] = [
    {
        title : "Ketergantungan pada OTA",
        desk : "Biaya komisi tinggi menggerus margin, sementara reservasi langsung tetap rendah.",
        icon: Percent,
    },
    {
        title : "Risiko Overbooking",
        desk : "Harga dan inventory yang dikelola manual antar channel rentan tabrakan booking.",
        icon: CalendarX2,
        offsetClass: 'lg:-mt-5 lg:rotate-3',
    },
    {
        title : "Loyalitas Tamu Rendah",
        desk : "Program membership masih manual, sulit mendorong tamu untuk kembali.",
        icon: HeartOff,
        offsetClass: 'lg:-mt-4',
    },
]
</script>

<template>
    <section class="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16" aria-labelledby="client-problem-title">
        <header class="mx-auto flex max-w-xl flex-col gap-3 lg:mx-0">
            <p class="w-fit rounded-xl border border-red-500 px-5 py-1 text-sm font-semibold text-red-600">
                {{ data.heading }}
            </p>
            <h2 id="client-problem-title" class="text-3xl font-semibold leading-tight sm:text-4xl">{{ data.title }}</h2>
            <p class="leading-relaxed text-stone-600 sm:text-lg">{{ data.desk }}</p>
        </header>

        <ul class="mx-auto flex w-full max-w-sm list-none flex-col gap-4 p-0" aria-label="Tantangan operasional hotel">
            <li v-for="card in problemCards" :key="card.title" :class="card.offsetClass">
                <article class="group relative rounded-xl border-2 border-gray-900 bg-white p-6 transition duration-300 hover:z-10 hover:border-red-500 hover:shadow-xl hover:shadow-red-200 lg:hover:scale-105">
                    <Pointer class="absolute -top-10 left-6 hidden rotate-180 animate-bounce lg:group-hover:block" aria-hidden="true" />
                    <div class="mb-4 flex h-8 w-8 items-center justify-center rounded-sm border-2 border-gray-900">
                        <Component :is="card.icon" :size="15" :stroke-width="2.5" class="text-gray-900" aria-hidden="true" />
                    </div>
                    <h3 class="mb-3 text-2xl font-extrabold leading-snug text-[#FF5A5F]">{{ card.title }}</h3>
                    <p class="leading-relaxed text-gray-900">{{ card.desk }}</p>
                </article>
            </li>
        </ul>
    </section>
</template>
