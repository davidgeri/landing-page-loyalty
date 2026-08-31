<script lang="ts" setup>
import TitleHeroBe from './TitleHeroBe.vue';

const data = {
    img : "/images/Mockup(Hero).png"
}
</script>

<template>
    <section class="flex flex-col gap-10 md:gap-5 md:flex-row md:items-center md:justify-center">
        <TitleHeroBe />
    <div class="flex">
        <img :src="data.img" class="auto md:w-lg md:h-lg " alt="hero.image">
    </div>
    </section>
</template>