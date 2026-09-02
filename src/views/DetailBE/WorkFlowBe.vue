<script lang="ts" setup>
import FlowChartBE from './FlowChartBE.vue';
import OutlinePill from '../../components/outlinepill/OutlinePill.vue';

const data = {
    OutlinePill: {
        text: "Work Flow",
        class: "text-blue-500"
    },
    title: "Alur Reservasi Booking Engine Cakrasoft",
    image : "/public/images/mocupFlowBe.png",
    alt : "mocup flowBe"
}
</script>

<template>
    <section class="w-full py-8 md:py-14 mt-10" aria-labelledby="workflow-title">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center flex-col md:flex-row md:justify-between md:items-start ">
                <article class="flex flex-col gap-2">
                    <div class="flex justify-start">
                        <OutlinePill :text="data.OutlinePill.text" :class-pil="data.OutlinePill.class" />
                    </div>

                    <header class="flex flex-col gap-5">
                        <h2 id="workflow-title"
                            class="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 md:text-5xl">
                            {{ data.title }}
                        </h2>
                        <img class="w-120 h-100" :src="data.image" :alt="data.alt">
                    </header>
                </article>

                <div class="flex justify-center w-full md:w-auto">
                    <FlowChartBE />
                </div>
            </div>
        </div>
    </section>
</template>
