<script lang="ts" setup>
import OutlinePill from '../../components/outlinepill/OutlinePill.vue';
import CardLoyalty from '../../components/cardLoyalty/CardLoyalty.vue';


const OutlinePilData = {
    style: "text-blue-500",
    text: "Tier Feature"
}

const data = {
    title: "Tier Feature"
}

const RequiredPlatinum = [
    {
        title: "Point Required",
        require: "280 + pts"
    },
    {
        title: "Bonus Earned",
        require: "+20.00%"
    }
]

const RequiredGold = [
    {
        title: "Point Required",
        require: "180-279 + pts"
    },
    {
        title: "Bonus Earned",
        require: "+10.00%"
    }
]

const RequiredSilver = [
    {
        title: "Point Required",
        require: "80-179 + pts"
    },
    {
        title: "Bonus Earned",
        require: "-"
    }
]

const BenefitPlatinum = [
    {
        text: "20% Bonus Points",
    },
    {
        text: "Free Railway Station Transfer",
    },
    {
        text: "Vip Lounge Accsess",
    },
    {
        text: "Dedicated Manager",
    },
]

const BenefitGold = [
    {
        text: "10% Bonus Points",
    },
    {
        text: "Room Upgrade",
    },
    {
        text: "Priority Support",
    }
]

const BenefitSilver = [
    {
        text: "Member Accses",
    }
]

const classCardPlatinum = {
    header : "",
    tier : "",
    desk : "",
    bgico : "",
    required : {
        title : "",
        require : ""
    }
}

const Cards = [
    {
        title: "Your Tier",
        tier: "Silver",
        desk: "Top-tier membership with maximum benefits and privilages",
        required: RequiredSilver,
        benefit: BenefitSilver,
        classCard : 
    },
    {
        title: "Your Tier",
        tier: "Gold",
        desk: "Top-tier membership with maximum benefits and privilages",
        required: RequiredGold,
        benefit: BenefitGold
    },
    {
        title: "Your Tier",
        tier: "Platinum",
        desk: "Top-tier membership with maximum benefits and privilages",
        required: RequiredPlatinum,
        benefit: BenefitPlatinum
    }
]

</script>

<template>
    <section class="mx-auto mb-20 max-w-7xl px-4 sm:px-6 md:mb-28 lg:px-8 flex flex-col gap-10">

        <div class="flex gap-3 flex-col text-center">
            <span class="flex justify-center">
                <OutlinePill :class-pil="OutlinePilData.style" :text="OutlinePilData.text" />
            </span>
            <h1 class="text-3xl md:text-4xl font-semibold">{{ data.title }}</h1>
        </div>

        <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div v-for="item in Cards" :key="item.tier" class="h-full">
                <CardLoyalty
                class="h-full"
                :title="item.title" 
                :tier="item.tier" 
                :desk="item.desk" 
                :required="item.required"
                :benefit="item.benefit" />
            </div>
        </div>

    </section>
</template>
