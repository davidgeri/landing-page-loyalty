<script lang="ts" setup>
import OutlinePill from '../../components/outlinepill/OutlinePill.vue';
import { CircleCheck } from '@lucide/vue';


const OutlinePillDat = {
    Title : "Main Features",
    class : "text-blue-500 border-blue-500"
}

const Feature = [
    "Pendaftaran Member",
    "Tier Member",
    "Informasi Reward",
    "Promosi",
    "Riwayat Poin",
    "Penukaran Reward"
]

const data = {
    title : "Fitur Membership",
    desk : "Semua Informasi member profile, status, hingga riwayat tersedia dalam satu sistem",
    Feature : Feature
}

</script>

<template>
    <section class="mx-auto mb-20 flex max-w-7xl flex-col gap-10 px-4 sm:px-6 md:mb-28 md:flex-row md:items-center md:justify-between md:gap-16 lg:px-8" aria-labelledby="features-heading">

        <div class="flex max-w-xl flex-col gap-3">
            <span class="flex">
                <OutlinePill :class-pil="OutlinePillDat.class" :text="OutlinePillDat.Title" />
            </span>
            <h2 id="features-heading" class="text-3xl font-semibold text-slate-900 md:text-4xl">{{ data.title }}</h2>
            <p class="text-lg leading-relaxed text-slate-600 md:text-xl">{{ data.desk }}</p>
        </div>

        <ul class="grid w-full max-w-xl gap-4 sm:grid-cols-2" aria-label="Daftar fitur membership">
            <li class="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-50 duration-100 hover:scale-[1.02]"
                v-for="(item, index) in data.Feature"
                :key="index"
            >
                <CircleCheck class="h-6 w-6 shrink-0 text-green-500" aria-hidden="true" />
                <span class="font-medium text-slate-800">{{ item }}</span>
            </li>
        </ul>

    </section>
</template>
