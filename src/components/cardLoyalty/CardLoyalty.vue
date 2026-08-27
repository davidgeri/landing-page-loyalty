<script setup lang="ts">
import { BadgeCheck, Crown, Check } from '@lucide/vue'
import type { PropsLoyaltyCard } from '../../types/main'

const tierStyle = {
    bg: "border-[#9486BC] bg-[#cfc0fc43]",
    icon: "text-[#E5DDFF]"
}

const requirementStyle = {
    title: "text-[#909090] font-medium",
    require: "text-[#6A6A6A] font-semibold"
}

const classes = {
    header: "bg-linear-to-r from-[#2D1B69] to-[#3D2680]",
    tier: tierStyle,
    desk: "text-[#C7C7CC]",
    bgico: "border-[#AFA9FC] bg-[#564097]",
    required: requirementStyle
}

const props = defineProps<PropsLoyaltyCard>()
</script>

<template>
    <article class="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
        <header :class="classes.header" class="p-4 sm:p-5">
            <div class="flex flex-col gap-3">
                <div class="flex items-center justify-between gap-3 sm:gap-4">
                    <span class="flex min-w-0 items-center gap-3 sm:gap-5">
                        <span :class="classes.bgico" class="shrink-0 border rounded-lg p-2">
                            <Crown class="h-6 w-6 text-white sm:h-7 sm:w-7" />
                        </span>
                        <h2 class="truncate text-2xl font-bold text-white">{{ props.tier }}</h2>
                    </span>

                    <span class="flex shrink-0 justify-end">
                        <span :class="classes.tier.bg" class="rounded-2xl border p-1 px-3 sm:px-5">
                            <span class="flex items-center gap-1.5 sm:gap-2">
                                <BadgeCheck :class="classes.tier.icon" class="h-4 w-4 sm:h-5 sm:w-5" />
                                <span class="text-sm font-semibold text-white sm:text-base">{{ props.title }}</span>
                            </span>
                        </span>
                    </span>
                </div>
                <p class="text-[13px]" :class="classes.desk">{{ props.desk }}</p>
            </div>
        </header>

        <div class="p-4 sm:p-5">
            <dl class="flex flex-col gap-2 border-b pb-4 sm:pb-5">
                <div class="flex justify-between gap-4" v-for="item in props.required" :key="item.title">
                    <dt :class="classes.required.title">{{ item.title }}</dt>
                    <dd :class="classes.required.require">{{ item.require }}</dd>
                </div>
            </dl>

            <ul class="grid grid-cols-1 gap-1.5 pt-3 sm:grid-cols-2 sm:gap-2" aria-label="Manfaat tier membership">
                <li
                    :class="classes.tier.bg"
                    class="flex min-w-0 items-center gap-2 border rounded-2xl p-1 px-3"
                    v-for="item in props.benefit"
                    :key="item.text"
                >
                    <Check class="h-3 w-3 shrink-0" aria-hidden="true" />
                    <p class="break-words text-[11px] sm:text-[12px]">{{ item.text }}</p>
                </li>
            </ul>
        </div>
    </article>
</template>
