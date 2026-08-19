<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import { MapPin, Phone, Mail } from "@lucide/vue"
import Popover from 'primevue/popover';
import SocialMedia from './SocialMedia.vue';
import FooterIco from './FooterIco.vue';
import ButtonVue from '../button/ButtonVue.vue';

const showLocation = ref<string>("")

const asset_image = {
    images: "/images/footerico.svg",
    alt_Data: "logo-cakra",
}

const data = {
    titles: "Cakra",
    sub_title: "Media Data",
    desk: "Platform loyalty dengan engegment untuk hotel yang terintegrasi  dengan Cakrasoft Cloud Hotel."
}

const socials = [
    { name: "Instagram", href: "https://www.instagram.com/cakramediadata/" },
    { name: "Linkedin", href: "https://www.linkedin.com/company/pt--cakra-media-data" },
    { name: "Facebook", href: "https://www.facebook.com/cakramediadata" },
    { name: "X", href: "https://x.com/cakrasoft" },
    { name: "Youtube", href: "https://www.youtube.com/@cakramediadata" },
]

const companyLinks = [
    { label: "Tentang Kami", to: "" },
    { label: "Bantuan", to: "" },
    { label: "Kontak", to: "" },
]

const productLinks = [
    { label: "Tentang Kami", to: "" },
    { label: "Bantuan", to: "" },
    { label: "Kontak", to: "" },
]

watch(showLocation, (newVal) => {
    console.log(newVal)
})

const current_contact_head_office = {
    Phone: "+62 811 3970 899",
    Email: "info@cakrasoft.net",
    Location: "Jl. Abdul Kudus Perumahan Barombong Permai C5 Kel. Tamalate Kec. Barombong, Makassar, Sulawesi Selatan"
}

const current_contact_branch_office = {
    Phone: "+62 855 7229 777",
    Location: "Jl. Raya Mambal Ubud No. 46, Br. Sigaran, Desa Mekar Bhuwana Badung, Bali 80352"
}

const HeadOffice = ref();

const BranchOffice = ref();

const handleHeadOffice = (event: Event) => {
    HeadOffice.value.toggle(event);
}

const handleBranchOffice = (event: Event) => {
    BranchOffice.value.toggle(event);
}

</script>

<template>
    <footer class="flex flex-col py-5 text-white bg-[#0F172A]">
        <section class="flex flex-col justify-center py-3 px-3 md:flex-row gap-5 border-b border-[#899DB9]">

            <div class="flex flex-col gap-2">
                <FooterIco :asset_image="asset_image" :data="data" />
                <SocialMedia aria="Sosial media" :sosial="socials" />
            </div>

            <section class="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
                <nav aria-label="Perusahaan" class="flex flex-col gap-2">
                    <h2 class="text-2xl">Perusahaan</h2>
                    <ul class="flex flex-col gap-2 list-none">
                        <li v-for="link in companyLinks" :key="link.label">
                            <RouterLink class="text-[#899DB9]" :to="link.to">{{ link.label }}</RouterLink>
                        </li>
                    </ul>
                </nav>

                <nav aria-label="Produk" class="flex flex-col gap-2">
                    <h2 class="text-2xl">Produk</h2>
                    <ul class="flex flex-col gap-2 list-none">
                        <li v-for="link in productLinks" :key="link.label">
                            <RouterLink class="text-[#899DB9]" :to="link.to">{{ link.label }}</RouterLink>
                        </li>
                    </ul>
                </nav>

                <address class="flex flex-col gap-2 not-italic items-start">
                    <h2 class="text-2xl">Kontak</h2>
                    <a class="text-[#899DB9]" href="mailto:info@cakrasoft.net">info@cakrasoft.net</a>
                    <a class="text-[#899DB9]" href="tel:+6285572297770">+62 855-7229-777</a>

                    <ButtonVue 
                    class="cursor-pointer"
                    :onClick="handleHeadOffice">
                        Head Office
                    </ButtonVue>
                    <ButtonVue 
                    class="cursor-pointer"
                    :onClick="handleBranchOffice">
                        Branch Office
                    </ButtonVue>

                    <Popover ref="HeadOffice">
                        <div class="bg-white w-64 p-4 rounded-lg rounded-l-none rounded-t-lg">
                            <div class="flex flex-col gap-3 text-sm">
                                <h1 class="font-semibold text-base text-gray-900">Head Office</h1>

                                <a href="tel:+6281234567890"
                                    class="flex items-center gap-3 text-gray-600 hover:text-slate-900 transition-colors">
                                    <Phone class="w-4 h-4 shrink-0" />
                                    <span>{{ current_contact_head_office.Phone }}</span>
                                </a>

                                <a :href="`mailto:${current_contact_head_office.Email}`"
                                    class="flex items-center gap-3 text-gray-600 hover:text-slate-900 transition-colors">
                                    <Mail class="w-4 h-4 shrink-0" />
                                    <span>{{ current_contact_head_office.Email }}</span>
                                </a>

                                <div class="flex items-start gap-3 text-gray-600">
                                    <MapPin class="w-4 h-4 shrink-0 mt-0.5" />
                                    <span class="leading-snug">{{ current_contact_head_office.Location }}</span>
                                </div>
                            </div>
                        </div>
                    </Popover>

                    <Popover ref="BranchOffice">
                        <div class="bg-white w-64 p-4 rounded-lg">
                            <div class="flex flex-col gap-3 text-sm">
                                <h1 class="font-semibold text-base text-gray-900">Branch Office</h1>

                                <a href="tel:+6281234567890"
                                    class="flex items-center gap-3 text-gray-600 hover:text-slate-900 transition-colors">
                                    <Phone class="w-4 h-4 shrink-0" />
                                    <span>{{ current_contact_branch_office.Phone }}</span>
                                </a>

                                <div class="flex items-start gap-3 text-gray-600">
                                    <MapPin class="w-4 h-4 shrink-0 mt-0.5" />
                                    <span class="leading-snug">{{ current_contact_branch_office.Location }}</span>
                                </div>
                            </div>
                        </div>
                    </Popover>


                </address>
            </section>

        </section>
        <p class="flex justify-center text-[10px] mt-3">Copyright © 2026 Cakra Media Data. All rights reserved.</p>
    </footer>
</template>