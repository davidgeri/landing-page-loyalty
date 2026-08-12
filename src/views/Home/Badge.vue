<script setup lang="ts">
import {Target, ArrowBigUp, Headset} from "lucide-vue-next"

const data = {
    first_badge : {
        name: "Target Attainment",
        target: "89%"
    },
    second_badge : {
        name: "Room Revenue",
        target: "72%",
        achive: "12%",
    },
    third_badge : {
        name: "Support system",
        target: "24/7",
    },
}
</script>

<template>
    <div class="grid grid-cols-2 gap-2 text-blue-500 mt-5 md:grid-cols-3">
        <span class="p-1 rounded-sm border border-blue-500 items-center flex gap-1 px-2 font-semibold text-[10px] md:text-sm">
            <p>{{ data.first_badge.target }}</p>
            <p>{{ data.first_badge.name }}</p> 
            <Target class="w-3.5 h-3.5" />
        </span>
        <span class="p-1 rounded-sm border border-blue-500 items-center flex gap-1 px-2 font-semibold text-sm text-[10px] md:text-sm">
            <p>{{ data.second_badge.target }}</p>
            <p>{{ data.second_badge.name }}</p> 
            <ArrowBigUp class="w-3.5 h-3.5" />
            <p>{{ data.second_badge.achive }}</p> 
        </span>
        <span class="p-1 rounded-sm border border-blue-500 items-center flex gap-1 px-2 font-semibold text-sm text-[10px] md:text-sm">
            <p>{{ data.third_badge.target }}</p>
            <p>{{ data.third_badge.name }}</p> 
            <Headset class="w-3.5 h-3.5" />
        </span>
    </div>
</template>