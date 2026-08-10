<script setup>
const props = defineProps({
    onClick: Function,
    class: String,
    title: String
})
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