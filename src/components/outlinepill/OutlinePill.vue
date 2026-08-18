<script setup lang="ts">

interface Props {
    text: string
    classPil : string
}

const props = defineProps<Props>()
</script>

<template>
    <p 
        :class="classPil"
        class="p-1 px-10 rounded-2xl border font-semibold">
        {{ props.text }}
    </p>
</template>