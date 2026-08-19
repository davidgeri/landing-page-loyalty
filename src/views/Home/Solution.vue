<script setup lang="ts">
import { MoveRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import type { Component } from 'vue'
import OutlinePill from '../../components/outlinepill/OutlinePill.vue'

interface SolutionAction {
    name: string
    navto: string
}

interface SolutionItem {
    ico: string | Component
    title: string
    desk: string
    button: SolutionAction
}

interface Props {
    datas: SolutionItem[]
}

const { datas } = defineProps<Props>()
</script>

<template>
    <section class="mt-14" aria-labelledby="solution-title">
        <header class="mb-10 flex flex-col items-center gap-3 text-center">
            <OutlinePill text="Solution" class-pil="border-blue-500 text-blue-500" />
            <h2 id="solution-title" class="text-3xl font-semibold sm:text-4xl">Solusi Add-ons Cakrasoft</h2>
        </header>

        <ul class="grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3" aria-label="Daftar solusi Cakrasoft">
            <li v-for="item in datas" :key="item.title" class="h-full">
                <article class="group/card flex h-full flex-col gap-4 rounded-lg border bg-white p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <img
                        v-if="typeof item.ico === 'string'"
                        :src="item.ico"
                        :alt="`Ikon ${item.title}`"
                        class="h-10 w-10 transition-transform duration-300 group-hover/card:-translate-y-1"
                    >
                    <Component
                        :is="item.ico"
                        v-else
                        class="h-10 w-10 text-blue-500 transition-transform duration-300 group-hover/card:-translate-y-1"
                        aria-hidden="true"
                    />
                    <h3 class="text-2xl font-semibold sm:text-3xl">{{ item.title }}</h3>
                    <p class="leading-relaxed text-stone-600">{{ item.desk }}</p>
                    <RouterLink
                        class="group mt-auto flex items-center justify-center gap-3 rounded-md border-2 border-blue-500 p-2 text-center"
                        :to="item.button.navto"
                    >
                        <span class="font-semibold text-blue-500">{{ item.button.name }}</span>
                        <MoveRight class="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </RouterLink>
                </article>
            </li>
        </ul>
    </section>
</template>
