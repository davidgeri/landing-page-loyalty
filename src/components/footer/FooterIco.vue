<script setup lang="ts">

interface Images {
    images: string
    alt_Data: string
}

interface Data {
    titles: string
    sub_title: string
    desk: string
}

interface Props {
    asset_image : Images
    data: Data
}

const props = defineProps<Props>()

</script>

<template>
    <div class="flex gap-2">
        <img :src="props.asset_image.images" fetchpriority="low" :alt="props.asset_image.alt_Data" width="50" height="50">
        <span class="flex flex-col -space-y-1">
            <h2 class="font-semibold text-2xl">{{ props.data.titles }}</h2>
            <p>{{ props.data.sub_title }}</p>
        </span>
    </div>

    <p class="text-[13px] md:w-60 mt-3 md:mb-20">{{ props.data.desk }}</p>
</template>