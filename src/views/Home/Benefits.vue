<script setup lang="ts">

import {CircleCheck} from "lucide-vue-next"

interface props {
    benefits : string[]
}

const Props = defineProps<props>()
    const images = "/images/mockup-benefits.png"
</script>

<template>
    <main class="flex flex-col mt-25 md:flex-row items-center justify-center">
        <section>
            <h1 class="text-4xl font-semibold">Mengapa Memilih Cakrasoft <br> Add-ons?</h1> 
            <div class="flex flex-col gap-8 mt-10" >
                <span class="flex gap-2 items-center" v-for="(item, index) in Props.benefits" :key="index">
                    <CircleCheck class="w-10 h-10 text-green-500" />
                    <p class="text-2xl font-semibold">{{ item }}</p>
                </span>
            </div>
        </section>

        <section>
            <img class="w-sm h-md" :src="images" alt="mockup-benefits">
        </section>
    </main>
</template>