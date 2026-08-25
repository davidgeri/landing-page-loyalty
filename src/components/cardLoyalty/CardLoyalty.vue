<script setup lang="ts">
import { BadgeCheck, Crown, Check } from '@lucide/vue'
interface Required {
    title: string
    require: string
}

interface Benefit {
    text: string
}

interface Tier {
    bg : string 
    icon : string 
}

interface Required {
    title : string 
    require : string 
}

interface Card {
    header : string
    tier : Tier 
    desk : string 
    bgico : string 
    required : string 
}

interface Props {
    tier: string
    title: string
    desk: string
    required: Required[]
    benefit: Benefit[]
    card : Card
}

const Tier = {
    bg : "border-[#9486BC] bg-[#cfc0fc43]",
    icon : "text-[#E5DDFF]"
}

const Required = {
    title : "text-[#909090] font-medium",
    require : "text-[#6A6A6A] font-semibold"
}

const classes = {
    header : "bg-linear-to-r from-[#2D1B69] to-[#3D2680]",
    tier : Tier,
    desk : "text-[#C7C7CC]",
    bgico : "border-[#AFA9FC] bg-[#564097]",
    required : Required
}



const props = defineProps<Props>()
</script>

<template>
    <section class="w-full">
        <div :class="classes.header" class="border rounded-2xl rounded-b-none p-4 sm:p-5">
            <div class="flex flex-col gap-3">
                <div class="flex items-center justify-between gap-3 sm:gap-4">
                    <span class="flex min-w-0 items-center gap-3 sm:gap-5">
                        <span :class="classes.bgico" class="shrink-0 border rounded-lg p-2">
                            <Crown class="h-6 w-6 text-white sm:h-7 sm:w-7" />
                        </span>
                        <h1 class="truncate text-2xl font-bold text-white">{{ props.tier }}</h1>
                    </span>


                    <span class="flex shrink-0 justify-end">
                        <span :class="classes.tier.bg" class="rounded-2xl border p-1 px-3 sm:px-5">
                            <span class="flex items-center gap-1.5 sm:gap-2">
                                <BadgeCheck :class="classes.tier.icon" class="h-4 w-4 sm:h-5 sm:w-5" />
                                <h1 class="text-sm font-semibold text-white sm:text-base">{{ props.title }}</h1>
                            </span>
                        </span>
                    </span>
                </div>
                <h1 class="text-[13px]" :class="classes.desk">{{ props.desk }}</h1>
            </div>
        </div>

        <div class="border rounded-2xl rounded-t-none border-t-0 p-4 sm:p-5">
            <div class="flex flex-col gap-2 border-b pb-4 sm:pb-5">
                <span class="flex justify-between" v-for="(item, index) in props.required" :key='index'>
                    <h1 :class="classes.required.title">{{ item.title }}</h1>
                    <h1 :class="classes.required.require">{{ item.require }}</h1>
                </span>
            </div>

            <div class="grid grid-cols-2 gap-1.5 pt-3 sm:gap-2">
                <span :class="classes.tier.bg" class="flex min-w-0 items-center gap-2 border rounded-2xl p-1 px-3" v-for="(item, index) in props.benefit"
                    :key="index">
                    <Check class="h-3 w-3 shrink-0" />
                    <p class="break-words text-[11px] sm:text-[12px]">{{ item.text }}</p>
                </span>
            </div>
        </div>
    </section>
</template>
