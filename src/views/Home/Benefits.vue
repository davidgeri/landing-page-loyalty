<script setup lang="ts">

import {CircleCheck} from "@lucide/vue"

interface props {
    benefits : string[]
}

const Props = defineProps<props>()
    const images = "/images/mockup-benefits.png"
</script>

<template>
    <section class="mt-16 flex flex-col items-center justify-center gap-10 md:mt-25 md:flex-row md:gap-16"
        aria-labelledby="benefits-title">
        <div class="w-full md:max-w-xl">
            <h2 id="benefits-title" class="text-3xl font-semibold leading-tight sm:text-4xl">
                Mengapa Memilih Cakrasoft <br class="hidden sm:block"> Add-ons?
            </h2>
            <ul class="mt-8 flex flex-col gap-5 sm:mt-10 sm:gap-8">
                <li v-for="(item, index) in Props.benefits" :key="index" class="flex items-center gap-3">
                    <CircleCheck class="h-7 w-7 shrink-0 text-green-500 sm:h-8 sm:w-8 md:h-10 md:w-10"
                        aria-hidden="true" />
                    <span class="text-lg font-semibold leading-snug sm:text-xl md:text-2xl">{{ item }}</span>
                </li>
            </ul>
        </div>

        <figure class="w-full max-w-sm md:max-w-md">
            <img class="h-auto w-full" :src="images" alt="Tampilan fitur add-ons Cakrasoft">
        </figure>
    </section>
</template>
