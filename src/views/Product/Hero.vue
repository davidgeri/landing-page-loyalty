<script setup lang="ts">

  interface Leftside {
    heading : string
    title : string 
    importantTitle : string
    desk : string
  }

  interface RightSide {
    image : string 
    alt : string
    class : string 
  }

  interface Props {
    Leftside : Leftside
    Rightside : RightSide[]
  }

  const props = defineProps<Props>()
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      <div class="lg:col-span-7">
        <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100">
          {{ props.Leftside.heading }}
        </span>
        <div class="text-left md:text-left">
          <h1 class="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            {{ props.Leftside.title }}<span class="text-blue-600">{{ props.Leftside.importantTitle }}</span>
          </h1>
          <p class="mt-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            {{ props.Leftside.desk }}
          </p>
        </div>
      </div>

      <di class="lg:col-span-5 relative w-full h-87.5 md:h-112.5 hidden md:flex justify-center items-center mt-8 lg:mt-0">
        
        <img 
          v-for="(item, index) in props.Rightside"
          :key="index"
          :src="item.image" 
          :alt="item.alt" 
          :class="item.class" 
        />
      </di>
    </div>
  </section>
</template>