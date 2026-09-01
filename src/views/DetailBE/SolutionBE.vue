<script lang="ts" setup>
import OutlinePillPing from '../../components/outlinepill/OutlinePillPing.vue';

const data = {
    title: "Gunakan sistem Booking Engine",
    outlineSolution: {
        text: "Solution",
        classPil: "text-blue-500  ",
        bgPing: "bg-blue-500"
    },
    solution: "Booking Engine memungkinkan tamu melihat ketersediaan kamar, memilih tipe kamar, mengisi data, voucher, dan melakukan reservasi langsung melalui website hotel."
}

</script>

<template>
    <section class="flex flex-col gap-6">
        <header class="flex flex-col gap-4">
            <div class="flex justify-start">
                <OutlinePillPing :text="data.outlineSolution.text" :class-pil="data.outlineSolution.classPil"
                    :bg-ping="data.outlineSolution.bgPing" />
            </div>
            <h2 class="text-2xl font-semibold text-slate-900 md:text-3xl">{{ data.title }}</h2>
        </header>

        <p class="text-base leading-relaxed text-slate-600 md:text-lg">
            {{ data.solution }}
        </p>
    </section>
</template>