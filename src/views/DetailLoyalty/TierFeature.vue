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
    header: "bg-linear-to-l from-[#2D1B69] to-[#3D2680]",
    tier: {
        bg: "border-[#9486BC] bg-[#cfc0fc43]",
        icon: "text-[#E5DDFF]"
    },
    desk: "text-[#C7C7CC]",
    bgico: "border-[#AFA9FC] bg-[#564097]",
    required: {
        title: "text-[#909090] font-medium",
        require: "text-[#6A6A6A] font-semibold"

    }
}

const classCardGold = {
    header: "bg-linear-to-l from-[#8B1A0F] to-[#C73D1E]",
    tier: {
        bg: "border-[#FFB9BA] bg-[#f0987b4f]",
        icon: "text-[#ffff]"
    },
    desk: "text-[#FF8789]",
    bgico: "border-[#FF989A] bg-[#D14A2E]",
    required: {
        title: "text-[#909090] font-medium",
        require: "text-[#6A6A6A] font-semibold"

    }
}
const classCardSilver = {
    header: "bg-linear-to-l from-[#2A2A2A] to-[#3D3D3D]",
    tier: {
        bg: "bg-[#6b6b6b92] border-[#3D3D3D]",
        icon: "text-[#ffff]"
    },
    desk: "text-[#CECECE]",
    bgico: "border-[#989898] bg-[#5C5C5C]",
    required: {
        title: "text-[#909090] font-medium",
        require: "text-[#6A6A6A] font-semibold"

    }
}

const Cards = [
    {
        tier: "Silver",
        desk: "Top-tier membership with maximum benefits and privilages",
        required: RequiredSilver,
        benefit: BenefitSilver,
        classCard: classCardSilver
    },
    {
        tier: "Gold",
        desk: "Top-tier membership with maximum benefits and privilages",
        required: RequiredGold,
        benefit: BenefitGold,
        classCard: classCardGold
    },
    {
        title: "Your Tier",
        tier: "Platinum",
        desk: "Top-tier membership with maximum benefits and privilages",
        required: RequiredPlatinum,
        benefit: BenefitPlatinum,
        classCard: classCardPlatinum
    }
]

</script>

<template>
    <section class="mx-auto mb-20 max-w-7xl px-4 sm:px-6 md:mb-28 lg:px-8 flex flex-col gap-10 ">

        <div class="flex gap-3 flex-col text-center">
            <span class="flex justify-center">
                <OutlinePill :class-pil="OutlinePilData.style" :text="OutlinePilData.text" />
            </span>
            <h1 class="text-3xl md:text-4xl font-semibold">{{ data.title }}</h1>
        </div>

        <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div v-for="item in Cards" :key="item.tier" class="h-full">
                <CardLoyalty class="h-full" :title="item.title" :tier="item.tier" :desk="item.desk"
                    :required="item.required" :benefit="item.benefit"
                    :class-card="item.classCard"
                    />
            </div>
        </div>

    </section>
</template>
