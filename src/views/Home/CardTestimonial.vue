<script setup lang="ts">

import { Quote, User } from '@lucide/vue'

interface ClientSay {
    message: string
    name: string
    profession: string
}

interface Props {
    clientsay: ClientSay[]
}

const props = defineProps<Props>()
</script>

<template>
    <ul class="grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3" aria-label="Testimoni klien">
        <li
            v-for="(item, index) in props.clientsay" :key="index"
            class="h-full rounded-lg border p-5 text-center hover:-translate-y-1 duration-200 hover:shadow-xl"
        >
            <article class="flex h-full flex-col items-center">
                <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900">
                    <User class="text-white" aria-hidden="true" />
                </div>
                <header>
                    <h3 class="text-2xl font-semibold">{{ item.name }}</h3>
                    <p class="mb-5 text-sm font-medium text-gray-500">{{ item.profession }}</p>
                </header>
                <blockquote class="mb-8 text-lg text-balance text-stone-700">
                    <p>“{{ item.message }}”</p>
                </blockquote>
                <footer class="mt-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-300">
                    <Quote class="h-6 w-6 rotate-180 text-gray-300" aria-hidden="true" />
                </footer>
            </article>
        </li>
    </ul>
</template>
