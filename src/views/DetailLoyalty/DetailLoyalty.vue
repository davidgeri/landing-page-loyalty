<script setup lang="ts">
import Navbar from '../../components/navbar/Navbar.vue';
import FooterComponent from '../../components/footer/FooterComponent.vue';
import HeroLoyalty from './HeroLoyalty.vue';


import { Handshake, Gift, Award, Crown, Check} from '@lucide/vue';

const FloatText = [
    {
        ico : Handshake,
        text : "Loyalitas"
    },
    {
        ico : Gift,
        text : "Reward"
    },
    {
        ico : Award,
        text : "Membership"
    },
]

const Point = {
    name : "Point Required",
    amount : "280 + pts",
}

const Bonus = {
    name : "Bonus Earn",
    amount : "+20.00%",
}

const Benefit = [
    {
        ico : Check,
        benefit : "20% Bonus Points",
    },
    {
        ico : Check,
        benefit : "Free Railway Station Transfer",
    },
    {
        ico : Check,
        benefit : "Vip Lounge Accsess",
    },
    {
        ico : Check,
        benefit : "Dedicated Manager",
    },
]

const Card = {
    icon : Crown,
    title : "Platinum",
    tag : "Your Tier",
    subTitle : "Top-tier membership with maximum benefits and privilages",
    point : Point,
    bonus : Bonus,
    Benefits : Benefit
}

const RightSide = {
    floatText : FloatText,
    Card : Card
}

const LeftSide = {
    heading : "Loyalty is Priority",
    desk : "Cakra Loyalty membantu hotel mengelola member, tier, poin, promosi, dan reward melalui sistem yang terintegrasi."
}

</script>

<template>
    <Navbar />
    <main class="flex flex-col pt-20">
        <HeroLoyalty :Leftside="LeftSide" :RightSide="RightSide" />
    </main>
    <FooterComponent />
</template>
