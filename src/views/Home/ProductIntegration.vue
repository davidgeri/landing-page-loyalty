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
    <main class="flex flex-col md:flex-row gap-10 justify-center mt-20">
        <section class="flex flex-col gap-5">
           <span class="items-center flex">
            <OutlinePill :text="data.outlinepill" class-pil="border-blue-500 text-blue-500" />
           </span>
            <h1 class="text-4xl font-semibold md:w-xl">{{ data.title }}</h1>
            <p class="w-xl">{{ data.desk }}</p>
        </section>

        <section class="w-105">
            <div v-for="(item, index) in flow" :key="index" v-tooltip="item.flow">
                <div :class="item.class">
                    {{ item.text }}
                </div>

                <div
                    v-if="index < flow.length - 1"
                    class="w-0.5 h-6 bg-blue-600 mx-auto"
                ></div>
            </div>
        </section>
    </main>
</template>