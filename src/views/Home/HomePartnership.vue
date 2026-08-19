<script setup lang="ts">
import { computed } from 'vue'

interface Heading {
    title: string
    desk: string
}

interface Props {
    heading: Heading
    images: string[]
}
const props = defineProps<Props>()

const duplicatedImages = computed(() => [...props.images, ...props.images])
</script>

<template>
    <main class="w-full flex justify-center">
        <section class="w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div class="flex flex-col gap-6 items-center text-center">
                <div class="max-w-3xl">
                    <h1 class="text-3xl sm:text-4xl font-semibold text-stone-700">{{ props.heading.title }}</h1>
                    <p class="mt-3 text-base sm:text-lg text-blue-600 font-semibold">{{ props.heading.desk }}</p>
                </div>
                <div class="relative w-full overflow-hidden rounded-3xl  bg-white/90 py-6">
                    <div class="partnership-track flex justify-between items-center gap-3 px-4 sm:px-8">
                    <span class="absolute z-50">250 +</span>
                        <div v-for="(item, index) in duplicatedImages" :key="`partner-${index}`" class="flex min-w-35 items-center justify-center p-2">
                            <img class="h-20 w-auto object-contain" :src="item" alt="partner logo">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.partnership-track {
    display: inline-flex;
    animation: slide-right 24s linear infinite;
    white-space: nowrap;
}

.partnership-track:hover {
    animation-play-state: paused;
}

@keyframes slide-right {
    0% {
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
