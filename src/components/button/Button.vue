<script setup lang="ts">

    const Props_Button = defineProps({
        onclik : Function,
        class : String,
        title : String
    })

</script>

<template>
    <button 
            class="flex items-center"
            :class="Props_Button.class"
        >
        <slot />
    </button>
</template>