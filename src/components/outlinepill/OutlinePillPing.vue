<script setup lang="ts">

interface Props {
    text: string
    classPil: string
    bgPing: string
}

const props = defineProps<Props>()
</script>

<template>
    <div class="p-1 px-8 rounded-2xl border font-semibold flex gap-3 items-center justify-center">
        <span class="flex justify-center">
            <p class="w-3 h-3 rounded-full" :class="props.bgPing"></p>
            <p class="w-3 h-3 rounded-full absolute animate-ping" :class="props.bgPing"></p>
        </span>
        <p :class="classPil" class="">
            {{ props.text }}
        </p>
    </div>
</template>