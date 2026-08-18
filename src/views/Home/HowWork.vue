<script setup lang="ts">
import OutlinePill from '../../components/outlinepill/OutlinePill.vue';
import { ArrowRight, ArrowLeft } from 'lucide-vue-next';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';

const data = {
    title: "Mulai menggunakan Cakrasoft Cloud Hotel"
}

const tooltipContent = '<div class="font-semibold text-sm">Tip 💡</div><div class="opacity-75 text-sm mt-1">Klik Next untuk melanjutkan ke step berikut nya </div>';

</script>

<template>
    <section class="mt-16">
        <section class="flex justify-center gap-4 ">
            <div class="flex flex-col justify-center items-center">
                <OutlinePill text="How it Work ?" class-pil="border-blue-500 text-blue-500" />
                <h1 class="text-4xl mt-3 font-semibold">{{ data.title }}</h1>
            </div>
        </section>
        <section class="mt-10">
            <div class="flex justify-center">
        <Stepper value="1" linear class="basis-200 min-w-0">
            <StepList>
                <Step value="1">Gunakan</Step>
                <Step value="2">Pilih Addon</Step>
                <Step value="3">Konfigurasi</Step>
                <Step value="4">Integrasi</Step>
                <Step value="5">Mulai Pakai</Step>
            </StepList>
            <StepPanels>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <div class="flex flex-col h-48">
                        <div class="rounded-sm bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-semibold text-2xl">1. Hotel menggunakan Cakrasoft Cloud Hotel.</div>
                    </div>
                    <div class="flex pt-5 justify-end">
                        <Button v-tooltip.top="{ value: tooltipContent, escape: false, class: 'w-60!' }" @click="activateCallback('2')">
                            Next
                            <ArrowRight class="w-7 h-7" />
                        </Button>
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <div class="flex flex-col h-48">
                        <div class="rounded-sm bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-semibold text-2xl">2. Hotel memilih add-on sesuai kebutuhan.</div>
                    </div>
                    <div class="flex pt-5 justify-between">
                        <Button severity="secondary" @click="activateCallback('1')">
                            <ArrowLeft class="w-7 h-7" />
                            Back
                        </Button>
                        <Button @click="activateCallback('3')">
                            Next
                            <ArrowRight class="w-7 h-7" />
                        </Button>
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <div class="flex flex-col h-48">
                        <div class="rounded-sm bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-semibold text-2xl">3. Tim Cakrasoft melakukan konfigurasi.</div>
                    </div>
                    <div class="flex pt-5 justify-between">
                        <Button severity="secondary" @click="activateCallback('2')">
                            <ArrowLeft class="w-7 h-7" />
                            Back
                        </Button>
                        <Button @click="activateCallback('4')">
                            Next
                            <ArrowRight class="w-7 h-7" />
                        </Button>
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="4">
                    <div class="flex flex-col h-48">
                        <div class="rounded-sm bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-semibold text-2xl">4. Add-on diintegrasikan dengan sistem hotel.</div>
                    </div>
                    <div class="flex pt-5 justify-between">
                        <Button severity="secondary" @click="activateCallback('3')">
                            <ArrowLeft class="w-7 h-7" />
                            Back
                        </Button>
                        <Button @click="activateCallback('5')">
                            Next
                            <ArrowRight class="w-7 h-7" />
                        </Button>
                    </div>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="5">
                    <div class="flex flex-col h-48">
                        <div class="rounded-sm bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-semibold text-2xl">5. Hotel mulai menggunakan dan memantau hasilnya.</div>
                    </div>
                    <div class="pt-5">
                        <Button severity="secondary" @click="activateCallback('4')">
                            <ArrowLeft class="w-7 h-7" />
                            Back
                        </Button>
                    </div>
                </StepPanel>
            </StepPanels>
        </Stepper>
    </div>
        </section>
    </section>
</template>