<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Phone, Mail, MapPin } from '@lucide/vue';
import NavMobile from './NavMobile.vue';
import { navmenu } from '../../store/navmenu.ts';

const {menu} = navmenu()

const asset_image = {
    images: "/images/Logo-cakra (2).png",
    alt_Data: "logo-cakra",
}

const current_location = [
  {
    location : "Makassar, Sulawesi Selatan"
  },
  {
    location : "Badung Bali"
  },
]

const current_contact = {
  phone: "+62 813-438-810-00",
  email: "info@cakrasoft.net"
}
</script>

<template>
  <nav class="w-full py-3 fixed bg-white z-50">
    <div class="max-w-6xl mx-auto flex items-center justify-between gap-2 px-3">
      <RouterLink to="/" class="hover:opacity-70 duration-200">
        <img
          :src="asset_image.images"
          :alt="asset_image.alt_Data"
          width="100"
          height="100"
          fetchpriority="high"
        />
      </RouterLink>

      <ul class="hidden md:flex md:flex-row md:gap-10">
        <li 
          v-for="(item, index) in menu" 
          :key="index"
          class="relative group"
        >
          <RouterLink
            :to="item.navto"
            class="hover:opacity-50"
          >{{ item.name }}</RouterLink>

          <div 
            v-if="item.name === 'Contact'"
            class="absolute top-full left-1/2 -translate-x-1/2 py-6 mt-3 w-64 bg-white rounded-lg  border border-gray-300 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0"
          >
            <div class="flex flex-col gap-3 text-sm">
              <a href="tel:+6281234567890" class="flex items-center gap-3 text-gray-700 hover:text-stone-600">
                <Phone class="w-4 h-4 shrink-0" />
                <span>{{ current_contact.phone }}</span>
              </a>
              <a :href="`mailto:${current_contact.email}`" class="flex items-center gap-3 text-gray-700 hover:text-stone-600">
                <Mail class="w-4 h-4 shrink-0" />
                <span>{{ current_contact.email }}</span>
              </a>
              <div
                class="flex items-center gap-3 text-gray-700"
                v-for="(item, index) in current_location"  
                :key="index"
                >
                <MapPin class="w-4 h-4 shrink-0" />
                <span>{{ item.location }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <RouterLink 
        to="/request-demo" 
        class="hidden md:block text-center bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg cursor-pointer active:scale-95 active:bg-blue-500 transition-transform hover:bg-blue-500 duration-300"
      >
        Request Demo
      </RouterLink>

      <div class="block  md:hidden">
        <NavMobile />
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>