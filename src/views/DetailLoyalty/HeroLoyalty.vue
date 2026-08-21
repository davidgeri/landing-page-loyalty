<script setup lang="ts">
import type { Component } from 'vue'

import { BadgeCheck } from '@lucide/vue'

interface Benefits {
    ico : Component
    benefit : string 
}

interface Point {
    amount : string 
}

interface Bonus {
    name : string 
    amount : string 
}

interface FloatText {
    ico : Component
    text : string
}

interface Card {
    icon : Component
    title : string 
    tag : string 
    subTitle : string 
    point : Point
    bonus : Bonus
    Benefits : Benefits[]
}

interface RightSide {
    floatText : FloatText[]
    Card : Card
}

interface LeftSide {
    heading : string 
    desk : string 
}

interface Props {
    Leftside : LeftSide
    RightSide : RightSide
}

const props = defineProps<Props>()
</script>

<template>
    <main class="flex flex-col md:flex-row gap-10 items-center justify-center">
        <section class="flex flex-col gap-4">
            <div class="flex justify-center items-center">
                <span class="flex items-center justify-center gap-3">
                    <p class="w-2 h-2 rounded-full bg-blue-500"></p>
                    <p>{{ props.Leftside.heading }}</p>
                </span>
            </div>
            <h1 class="text-5xl font-semibold">Bangun <span class="text-blue-500">Loyalitas Tamu </span> Melalui Membership, Poin, dan Reward</h1>
            <p>{{ props.Leftside.desk }}</p>
        </section>

        <section>
            
        </section>
    </main>
</template>