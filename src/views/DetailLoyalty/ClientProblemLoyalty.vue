<script setup lang="ts">
import { RepeatOff, DatabaseX, PencilOff, Target, StarOff, EyeOff } from '@lucide/vue'
import type { Component } from 'vue';

interface Problem {
    title: string
    desk: string
    icon: Component
    tooltip : string

}

const problems: Problem[] = [
    {
        title: 'Tamu tidak memiliki alasan untuk kembali.',
        desk: 'Tanpa insentif, tamu cenderung memilih tempat lain di kunjungan berikutnya.',
        icon: RepeatOff,
        tooltip: "Visitor"
    },
    {
        title: 'Data pelanggan tidak dikelola secara terpusat.',
        desk: 'Informasi tamu tersebar di banyak tempat sehingga sulit dianalisis.',
        icon: DatabaseX,
        tooltip: "Customer"
    },
    {
        title: 'Program membership masih manual.',
        desk: 'Pendaftaran dan pencatatan poin masih dikerjakan lewat kertas atau spreadsheet.',
        icon: PencilOff,
        tooltip : "Membership"
    },
    {
        title: 'Promosi belum terarah.',
        desk: 'Penawaran dikirim ke semua tamu tanpa mempertahankan minat atau kebiasaan mereka.',
        icon: Target,
        tooltip : "Promotion"
    },
    {
        title: 'Tidak tersedia sistem poin dan reward.',
        desk: 'Tamu tidak punya cara untuk melihat manfaat nyata dari kesetiaan mereka.',
        icon: StarOff,
        tooltip : "Reward"
    },
    {
        title: 'Riwayat member sulit dipantau.',
        desk: 'Tim tidak punya catatan jelas soal kunjungan dan transaksi tiap member.',
        icon: EyeOff,
        tooltip : "Member History"
    },
]

const tooltipFunc = (value : string ) => {
    const ProbelmDat = `<div class="flex gap-3 ">${value}  <span class="-mr-1 inline-flex items-center justify-center leading-none px-1.5 rounded-sm bg-red-600 text-green-50 text-xs font-medium font-mono">ERROR</span></div>`;

    return ProbelmDat
}

const classCard = "group relative flex min-h-56 w-full flex-col gap-5 overflow-hidden rounded-xl border  bg-white p-5 transition duration-300 before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-red-500 before:transition-transform before:duration-300 before:ease-out hover:-translate-y-0 hover:border-red-500 hover:shadow-xl hover:before:scale-y-100 hover:scale-105" 

</script>

<template>
    <section class="mx-auto mb-20 flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 md:mb-28 md:gap-14 lg:px-8" aria-labelledby="problems-heading">

        <div class="flex flex-col items-center gap-3 text-center">
            <span class="flex flex-row items-center justify-center gap-2 rounded-md border px-3 p-1">
                <span class="relative flex h-3 w-3" aria-hidden="true">
                    <span class="absolute h-3 w-3 animate-ping rounded-full bg-red-500"></span>
                    <span class="h-3 w-3 rounded-full bg-red-500"></span>
                </span>
                <span class="text-sm font-medium">Client Problem</span>
            </span>
            <h2 id="problems-heading" class="text-3xl font-semibold">Permasalahan</h2>
        </div>

        <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article v-for="(item, index) in problems" 
            :key="index" :class="classCard" v-tooltip.top="{ value: tooltipFunc(item.tooltip), escape: false }">
                <Component :is="item.icon"
                    class="relative z-10 h-6 w-6 text-red-500 transition-colors duration-300 group-hover:text-white"
                    aria-hidden="true" />
                <div class="relative z-10 flex flex-col gap-3">
                    <h3 class="text-xl font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-white">
                        {{ item.title }}
                    </h3>
                    <p class="text-stone-500 transition-colors duration-300 group-hover:text-white">
                        {{ item.desk }}
                    </p>
                </div>
            </article>
        </div>
    </section>
</template>
