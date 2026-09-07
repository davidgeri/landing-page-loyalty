<script setup lang="ts">
import type { ButtonProps } from '../../type/main';

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  disabled: false,
  title: '',
  onClick: undefined,
})
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    class="flex items-center"
    :class="props.class"
    @click="props.onClick"
  >
    <slot>{{ props.title }}</slot>
  </button>
</template>