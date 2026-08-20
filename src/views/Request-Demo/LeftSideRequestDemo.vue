<script lang="ts" setup>
import type { Component } from 'vue'

interface Title {
    titleFirst: string
    titleSecond: string
}

interface Data {
    heading: string
    title: Title
    desk: string
}

interface Product {
    title: string
    desk: string
    icon: Component
}

interface Props {
    data: Data
    smallProducts: Product[]
}

const props = defineProps<Props>()

</script>

<template>
    <div class="lg:col-span-5 space-y-8 text-left">
        <div>
            <span
                class="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-[10px] font-semibold text-[#0c6cf2] rounded-full uppercase tracking-wider">
                {{ props.data.heading }}
            </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
            {{ props.data.title.titleFirst }}
            <span class="text-[#0c6cf2]">{{ props.data.title.titleSecond }}</span>
        </h1>

        <p class="text-base sm:text-lg text-slate-600 max-w-2xl">
            {{ props.data.desk }}
        </p>

        <div class="space-y-5" v-for="(item, index) in props.smallProducts" :key="index">

            <div class="flex items-start gap-4">
                <div class="shrink-0">
                    <component :is="item.icon" class="h-6 w-6 text-[#0c6cf2]" />
                </div>

                <div>
                    <div class="text-base font-medium text-slate-900">
                        {{ item.title }}
                    </div>

                    <p class="text-xs text-slate-500">
                        {{ item.desk }}
                    </p>
                </div>
            </div>

        </div>
        <div class="pt-6 mt-5 border-t border-slate-100">
            <p class="text-xs font-semibold text-slate-400">
                Dipercaya oleh lebih dari 250+ hotel
            </p>
        </div>
    </div>
</template>