<script setup lang="ts">
import type { ButtonProps } from '../../type/main';

const props = defineProps<ButtonProps>()
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