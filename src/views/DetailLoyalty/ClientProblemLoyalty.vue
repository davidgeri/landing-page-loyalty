<script setup lang="ts">
import { RepeatOff, DatabaseX, PencilOff, Target, StarOff, EyeOff } from '@lucide/vue'

interface Problem {
    title: string
    desk: string
    icon: typeof RepeatOff
}

const problems: Problem[] = [
    {
        title: 'Tamu tidak memiliki alasan untuk kembali.',
        desk: 'Tanpa insentif, tamu cenderung memilih tempat lain di kunjungan berikutnya.',
        icon: RepeatOff,
    },
    {
        title: 'Data pelanggan tidak dikelola secara terpusat.',
        desk: 'Informasi tamu tersebut di banyak tempat sehingga sulit dianalisis.',
        icon: DatabaseX,
    },
    {
        title: 'Program membership masih manual.',
        desk: 'Pendaftaran dan pencatatan poin masih dikerjakan lewat kertas atau spreadsheet.',
        icon: PencilOff,
    },
    {
        title: 'Promosi belum terarah.',
        desk: 'Penawaran dikirim ke semua tamu tanpa mempertahankan minat atau kebiasaan mereka.',
        icon: Target,
    },
    {
        title: 'Tidak tersedia sistem poin dan reward.',
        desk: 'Tamu tidak punya cara untuk melihat manfaat nyata dari kesetiaan mereka.',
        icon: StarOff,
    },
    {
        title: 'Riwayat member sulit dipantau.',
        desk: 'Tim tidak punya catatan jelas soal kunjungan dan transaksi tiap member.',
        icon: EyeOff,
    },
]
</script>

<template>
    <section class="flex flex-col items-center justify-center gap-16 px-4 mb-20" aria-labelledby="problems-heading">

        <div class="flex flex-col items-center gap-3 text-center">
            <span class="flex flex-row items-center justify-center gap-2 rounded-md border px-3 p-1">
                <span class="relative flex h-3 w-3" aria-hidden="true">
                    <span class="absolute h-3 w-3 animate-ping rounded-full bg-red-500"></span>
                    <span class="h-3 w-3 rounded-full bg-red-500"></span>
                </span>
                <p class="text-sm font-medium">Client Problem</p>
            </span>
            <h2 id="problems-heading" class="text-3xl font-semibold">Permasalahan</h2>
        </div>

        <div class="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            <article
                v-for="(item, index) in problems"
                :key="index"
                class="flex w-full flex-col gap-5 rounded-xl border p-5"
            >
                <Component :is="item.icon" class="h-6 w-6 text-red-500" aria-hidden="true" />
                <div class="flex flex-col gap-3">
                    <h3 class="text-2xl font-semibold">{{ item.title }}</h3>
                    <p class="text-stone-500">{{ item.desk }}</p>
                </div>
            </article>
        </div>
    </section>
</template>