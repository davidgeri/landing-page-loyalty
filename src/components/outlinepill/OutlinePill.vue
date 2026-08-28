<script setup lang="ts">

interface Props {
    text: string | undefined
    classPil? : string
}

const props = defineProps<Props>()
</script>

<template>
    <p 
        :class="classPil === undefined ? 'text-blue-500' : classPil"
        class="p-1 px-10 rounded-2xl border font-semibold">
        {{ props.text }}
    </p>
</template>