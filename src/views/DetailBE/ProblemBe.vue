<script lang="ts" setup>
import OutlinePillPing from '../../components/outlinepill/OutlinePillPing.vue';


const data = {
    title: "Kurangi Ketergantungan terhadap Reservasi dari OTA",
    outlinePillProblem: {
        text: "Problem",
        classPil: "border-red-500 text-red-500",
        bgPing: "bg-red-500"
    },
}

import { DollarSign, Feather, CloudDownload, BookAlert, ClockFading } from "@lucide/vue"

const dataProblem = [
    {
        title: "Biaya mahal",
        desk: "Biaya Komisi reservasi tinggi.",
        icon: DollarSign
    },
    {
        title: "Proses Manual",
        desk: "Reservasi langsung masih di proses manual.",
        icon: Feather
    },
    {
        title: "Kesulitan Update",
        desk: "Informasi harga sulit di perbarui.",
        icon: CloudDownload
    },
    {
        title: "Tidak Bisa Booking",
        desk: "Website hotel belum dapat menerima pemesanan.",
        icon: BookAlert
    },
    {
        title: "Proses Lama",
        desk: "Proses reservasi membutuhkan waktu lama.",
        icon: ClockFading
    },
]

</script>

<template>
    <section class="flex flex-col gap-6">
        <header class="flex flex-col gap-4">
            <div class="flex justify-start">
                <OutlinePillPing :text="data.outlinePillProblem.text" :class-pil="data.outlinePillProblem.classPil"
                    :bg-ping="data.outlinePillProblem.bgPing" />
            </div>
            <h2 class="text-2xl font-semibold text-slate-900 md:text-3xl">{{ data.title }}</h2>
        </header>

        <ul class="flex flex-col gap-4">
            <li v-for="(item, index) in dataProblem" :key="index" class="flex items-start gap-3">
                <component :is="item.icon" class="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div class="min-w-0">
                    <h3 class="text-lg font-semibold text-slate-900">{{ item.title }}</h3>
                    <p class="text-sm leading-relaxed text-slate-600 md:text-base">{{ item.desk }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>