<script setup lang="ts">
import { MoveRight } from "lucide-vue-next"
import { RouterLink } from "vue-router";
import OutlinePill from "../../components/outlinepill/OutlinePill.vue";
import type{ Component } from "vue";

interface Button {
    name: string
    navto: string
}

interface Solution {
    ico: string | Component
    title: string
    desk: string
    button: Button
}

interface Props {
    datas: Solution[]
}

const props = defineProps<Props>()
</script>

<template>
    <main class="flex flex-col mt-14 gap-3">

        <header class="flex mb-10 flex-col justify-center text-center items-center">
            <OutlinePill text="Solution" class-pil="border-blue-500 text-blue-500" />
            <h2 class="text-4xl font-semibold">Solusi Add-ons Cakrasoft</h2>
        </header>

        <section aria-label="Daftar solusi Cakrasoft">
            <ul class="grid grid-cols-1 md:grid-cols-3 md:flex-row list-none p-0 m-0">

                <li
                    class="flex bg-white flex-col gap-3 p-5 border rounded-md hover:scale-105 duration-300 group/card w-full md:w-sm"
                    v-for="(item, index) in props.datas"
                    :key="index"
                >
                    <article class="flex flex-col gap-3 h-full">
                        <div v-if="typeof item.ico === 'string'">
                            <img
                            :src="item.ico"
                            :alt="`Ikon ${item.title}`"
                            class="w-10 h-10 text-blue-500 group-hover/card:-translate-y-2 duration-300"
                        />
                        </div>
                        <div v-else>
                            <Component :is="item.ico" class="w-10 h-10 text-blue-500 group-hover/card:-translate-y-2 duration-300"
                            aria-hidden="true" />
                        </div>
                        <h3 class="text-3xl font-semibold">{{ item.title }}</h3>
                        <p>{{ item.desk }}</p>
                        <RouterLink
                            class="mt-10 border-2 rounded-md border-blue-500 p-2 flex gap-3 items-center justify-center group"
                            :to="item.button.navto"
                        >
                            <span class="font-semibold text-blue-500">{{ item.button.name }}</span>
                            <MoveRight class="w-5 h-5 text-blue-500 group-hover:translate-x-2 duration-300" />
                        </RouterLink>
                    </article>
                </li>
            </ul>
        </section>
    </main>
</template>