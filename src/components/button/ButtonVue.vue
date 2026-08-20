<script setup lang="ts">

interface Props {
    onClick: (e: MouseEvent) => void
    class? : string
    title? : string
}

const props = defineProps<Props>()
</script>

<template>
    <button 
        class="flex items-center"
        :class="props.class"
        @click="props.onClick"
    >
        <slot />
    </button>
</template>