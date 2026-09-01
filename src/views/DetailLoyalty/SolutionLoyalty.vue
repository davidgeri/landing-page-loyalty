<script setup lang="ts">
import OutlinePillPing from '../../components/outlinepill/OutlinePillPing.vue';

import type { PropsSolutionLoyalty } from '../../type/main.ts';

const Pill = {
    textStyle : "text-blue-500",
    pingStyle : "bg-blue-500",
    text : "Solution"

}

const props = defineProps<PropsSolutionLoyalty>()

</script>

<template>
    <section class="mx-auto mb-20 max-w-7xl px-4 sm:px-6 md:mb-28 lg:px-8" aria-labelledby="solution-heading">
        
        <div class="grid items-center gap-8 md:grid-cols-2 md:gap-16">
            <div class="flex flex-col gap-3">
                <span class="flex">
                    <OutlinePillPing :text="Pill.text" :class-pil="Pill.textStyle" :bg-ping="Pill.pingStyle" />  
                </span>
                <h2 id="solution-heading" class="text-3xl font-semibold text-slate-900 md:text-4xl">{{ props.Title }}</h2>
            </div>

            <div class="flex justify-center md:justify-start">
                <p class="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">{{ props.Desk }}</p>
            </div>
        </div>            

    </section>
</template>
