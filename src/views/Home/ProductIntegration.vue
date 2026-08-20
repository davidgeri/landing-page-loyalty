<script setup lang="ts">
import OutlinePill from '../../components/outlinepill/OutlinePill.vue';

const data = {
    outlinepill: "Product Integration",
    title: "Semua Produk Terhubung dalam Satu Ekosistem.",
    desk: "Booking Engine, Channel Manager, dan Cakra Loyalty dapat bekerja bersama untuk membantu hotel mengelola reservasi, distribusi kamar, serta hubungan antar tamu."
}

const flow = [
    {
        text: "Tamu melakukan reservasi",
        flow : "Flow 1",
        class: "border-2 border-dashed border-gray-400 rounded-2xl py-4 text-center text-gray-700 text-[15px]"
    },
    {
        text: "Booking Engine",
        flow : "Flow 2",
        class: "bg-blue-600 rounded-2xl py-4 text-center text-white text-[15px] font-medium"
    },
    {
        text: "Cakrasoft Cloud Hotel",
        flow : "Flow 3",
        class: "border-2 border-blue-400 rounded-2xl py-4 text-center text-gray-700 text-[15px]"
    },
    {
        text: "Channel Manager memperbarui inventory",
        flow : "Flow 4",
        class: "bg-blue-600 rounded-2xl py-4 text-center text-white text-[15px] font-medium"
    },
    {
        text: "Tamu memperoleh poin melalui Cakra Loyalty",
        flow : "Flow 5",
        class: "border-2 border-dashed border-gray-400 rounded-2xl py-4 text-center text-gray-700 text-[15px]"
    },
]
</script>

<template>
    <section class="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16" aria-labelledby="integration-title">
        <header class="flex max-w-xl flex-col gap-5">
                <div class="flex justify-start">
                    <OutlinePill :text="data.outlinepill" class-pil="border-blue-500 text-blue-500" />
                </div>
            <h2 id="integration-title" class="text-3xl font-semibold leading-tight sm:text-4xl">
                {{ data.title }}
            </h2>
            <p class="text-base leading-relaxed text-stone-600 sm:text-lg">{{ data.desk }}</p>
        </header>

        <ol class="mx-auto w-full max-w-md list-none p-0" aria-label="Alur integrasi produk">
            <li
                v-for="(item, index) in flow"
                :key="index"
                v-tooltip="item.flow"
                class="flex flex-col items-center"
            >
                <div :class="['w-full px-4 sm:px-6', item.class]">
                    {{ item.text }}
                </div>

                <div
                    v-if="index < flow.length - 1"
                    class="h-6 w-0.5 bg-blue-600"
                    aria-hidden="true"
                ></div>
            </li>
        </ol>
    </section>
</template>
