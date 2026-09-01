<script setup lang="ts">
import type{ OutlinePillPing } from '../../type/main';

const props = defineProps<OutlinePillPing>()
</script>

<template>
    <div class="inline-flex items-center justify-center gap-3 rounded-2xl border border-current p-1 px-8 font-semibold">
        <span class="relative flex items-center justify-center">
            <span class="h-3 w-3 rounded-full" :class="props.bgPing"></span>
            <span class="absolute h-3 w-3 animate-ping rounded-full" :class="props.bgPing"></span>
        </span>
        <span :class="props.classPil" class="text-sm sm:text-base">
            {{ props.text }}
        </span>
    </div>
</template>