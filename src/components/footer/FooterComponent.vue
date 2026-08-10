<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import { MapPin, Phone, Mail } from "lucide-vue-next"
import Popover from 'primevue/popover';
import Button from 'primevue/button';

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
    { name: "Instagram", href: "https://instagram.com/..." },
    { name: "Linkedin", href: "https://linkedin.com/..." },
    { name: "Facebook", href: "https://facebook.com/..." },
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
                <div class="flex gap-2">
                    <img :src="asset_image.images" fetchpriority="low" :alt="asset_image.alt_Data" width="50"
                        height="50">
                    <span class="flex flex-col -space-y-1">
                        <h2 class="font-semibold text-2xl">{{ data.titles }}</h2>
                        <p>{{ data.sub_title }}</p>
                    </span>
                </div>

                <p class="text-[13px] md:w-60 mt-3">{{ data.desk }}</p>

                <nav aria-label="Sosial media" class="flex mt-2 gap-2">
                    <a v-for="social in socials" :key="social.name" :href="social.href" target="_blank"
                        rel="noopener noreferrer" :aria-label="social.name"
                        class="flex py-1 gap-2 rounded-md items-center group hover:border duration-100 hover:px-3">
                        <svg v-if="social.name === 'Instagram'" xmlns="http://www.w3.org/2000/svg" width="25"
                            height="25" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                        </svg>
                        <svg v-else-if="social.name === 'Linkedin'" xmlns="http://www.w3.org/2000/svg" width="25"
                            height="25" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor"
                                d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2" />
                        </svg>

                        <span class="hidden group-hover:block duration-150">{{ social.name }}</span>
                    </a>
                </nav>
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

                    <Button type="button" @click="handleHeadOffice">
                    Head Office
                    </Button>
                    <Button type="button" @click="handleBranchOffice">
                    Branch Office
                    </Button>

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
        <p class="flex justify-center mt-3">© CakraRoyalty , all rights reserved</p>
    </footer>
</template>