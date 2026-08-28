<script setup lang="ts">
import OutlinePill from "../../components/outlinepill/OutlinePill.vue";
type StepVariant = "outline" | "filled";

interface LoyaltyStep {
    text: string;
    variant: StepVariant;
    width: string;
}

const loyaltySteps: LoyaltyStep[] = [
    { text: "Tamu mendaftar sebagai member", variant: "outline", width: "w-full" },
    { text: "Tamu memperoleh tier awal", variant: "outline", width: "w-11/12" },
    { text: "Tamu melakukan Chekin /Chekout", variant: "filled", width: "w-full" },
    { text: "Poin di tambahkan", variant: "filled", width: "w-3/5" },
    { text: "Tamu menukarkan poin", variant: "filled", width: "w-4/5" },
    { text: "Tamu memperoleh kode reward", variant: "outline", width: "w-3/5" },
    { text: "Tamu Menukarkan reward melalui admin", variant: "filled", width: "w-full" },
];

const stepVariantClass: Record<StepVariant, string> = {
    outline: "border border-dashed border-slate-400 bg-white text-slate-800",
    filled: "border border-blue-600 bg-blue-600 text-white shadow-sm",
};

const data = {
    outlinePill: "Loyalty Flow",
    styleOutlinePill: "text-blue-500",
    title: "Alur Loyalty",
    mockupImage: "/images/mockupFlowLoyalty.png",
};
</script>

<template>
    <section aria-labelledby="loyalty-flow-title" class="w-full py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div
            class="flex flex-col justify-center gap-20 md:flex-row">

            <div class="flex w-full flex-col items-center gap-6 lg:max-w-sm">
                <header class="flex flex-col items-center gap-3 text-center">
                    <OutlinePill :text="data.outlinePill" :style="data.styleOutlinePill" />
                    <h2 id="loyalty-flow-title" class="text-2xl font-bold text-slate-900 sm:text-3xl">
                        {{ data.title }}
                    </h2>
                </header>

                <ol class="flex w-full flex-col items-center">
                    <template v-for="(step, index) in loyaltySteps" :key="step.text">
                        <li
                            :class="['flex items-center justify-center rounded-lg px-4 py-3 text-center text-sm font-semibold', stepVariantClass[step.variant], step.width]">
                            {{ step.text }}
                        </li>

                        <div v-if="index < loyaltySteps.length - 1" class="flex justify-center py-1" aria-hidden="true">
                            <span class="h-4 w-1 rounded-full bg-blue-600"></span>
                        </div>
                    </template>
                </ol>
            </div>

            <figure class="flex justify-center">
                <img :src="data.mockupImage" alt="Tampilan aplikasi pencatatan reward loyalty pada perangkat mobile"
                    class="h-auto w-full max-w-45 object-contain sm:max-w-70 lg:max-w-80" fetchpriority="low"
                    decoding="async" />
            </figure>
        </div>
    </section>
</template>