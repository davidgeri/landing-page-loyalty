<script lang="ts" setup>
import { defineComponent, h, type PropType } from 'vue';
import OutlinePill from '../../components/outlinepill/OutlinePill.vue';
import type { CardPoinFeature } from '../../components/outlinepill/types/main.ts';

const OutlinePillDat = {
    text: "Poin Feature",
    classPil: "text-blue-500"
}

const dat = {
    title: "Fitur Poin",
    desk: "Kelola perolehan, penggunaan, dan riwayat poin member secara terpisah"
}

interface props {
    cardFirst: CardPoinFeature[]
    cardSecond: CardPoinFeature[]
}

const props = defineProps<props>()

const FeatureCard = defineComponent({
    name: 'FeatureCard',
    props: { item: { type: Object as PropType<CardPoinFeature>, required: true } },
    setup(cardProps) {
        return () => h('article', { class: 'point-card group relative isolate min-h-48 overflow-hidden rounded-xl border border-black bg-white p-6' }, [
            h('div', { class: 'point-card__mask', 'aria-hidden': 'true' }),
            h('div', { class: 'relative z-10 flex h-full flex-col gap-3' }, [
                h('div', { class: 'point-card__icon flex h-11 w-11 items-center justify-center rounded-lg border border-black bg-white text-blue-500' }, [h(cardProps.item.icon, { class: 'h-5 w-5' })]),
                h('h2', { class: 'point-card__title text-lg font-semibold' }, cardProps.item.title),
                h('p', { class: 'point-card__desk text-sm leading-relaxed text-gray-500' }, cardProps.item.desk),
            ]),
        ]);
    },
});

</script>

<template>
    <section class="mx-auto mb-20 flex w-full max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 md:mb-28 lg:px-8">
        <div class="flex max-w-2xl flex-col items-center gap-3 text-center">
            <OutlinePill :text="OutlinePillDat.text" :class-pil="OutlinePillDat.classPil" />
            <h1 class="text-3xl font-semibold md:text-4xl">{{ dat.title }}</h1>
            <p class="text-sm leading-relaxed text-gray-500 sm:text-base">{{ dat.desk }}</p>
        </div>

        <div class="w-full max-w-5xl space-y-5">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
                <FeatureCard v-for="(item, index) in props.cardFirst" :key="`first-${index}`" :item="item" />
            </div>
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-5 md:grid-cols-2">
                <FeatureCard v-for="(item, index) in props.cardSecond" :key="`second-${index}`" :item="item" />
            </div>
        </div>
    </section>
</template>

<style scoped>
:deep(.point-card__mask) {
    position: absolute;
    z-index: 0;
    inset: 0;
    background: #3b82f6;
    clip-path: circle(0% at 100% 100%);
    transition: clip-path 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

:deep(.point-card:hover .point-card__mask),
:deep(.point-card:focus-within .point-card__mask) {
    clip-path: circle(150% at 100% 100%);
}

:deep(.point-card__icon),
:deep(.point-card__title),
:deep(.point-card__desk) {
    transition: color 300ms ease, background-color 300ms ease;
}

:deep(.point-card:hover .point-card__icon),
:deep(.point-card:focus-within .point-card__icon) {
    border-color: black;
    background-color: rgb(255 255 255 / 0.2);
    color: white;
}

:deep(.point-card:hover .point-card__title),
:deep(.point-card:focus-within .point-card__title),
:deep(.point-card:hover .point-card__desk),
:deep(.point-card:focus-within .point-card__desk) {
    color: white;
}
</style>
