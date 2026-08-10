<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Phone, Mail, MapPin } from 'lucide-vue-next';
import NavMobile from '../navmobile/NavMobile.vue';

const asset_image = {
    images: "/images/Logo-cakra (2).png",
    alt_Data: "logo-cakra",
}

const menu_data = [
    { name: "Home", navto: "/" },
    { name: "About", navto: "/about" },
    { name: "products", navto: "/products" },
    { name: "FAQ", navto: "/faq" },
    { name: "Contact", navto: "/contact" },
]
</script>

<template>
  <nav class="w-full">
    <div class="max-w-6xl mx-auto flex items-center justify-between gap-2 px-3">
      <a href="/">
        <img
          <img
          :src="asset_image.images"
          :alt="asset_image.alt_Data"
          width="100"
          height="100"
        >
      </a>

      <ul class="hidden md:flex md:flex-row md:gap-10">
        <li 
          v-for="(item, index) in menu_data" 
          :key="index"
          class="relative group"
        >
          <RouterLink
            :to="item.navto"
            class="hover:opacity-50"
          >{{ item.name }}</RouterLink>

          <div 
            v-if="item.name === 'Contact'"
            class="absolute top-full left-1/2 -translate-x-1/2 py-6 mt-3 w-64 bg-white rounded-lg  border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 backdrop-blur-xl"
          >
            <div class="flex flex-col gap-3 text-sm">
              <a href="tel:+6281234567890" class="flex items-center gap-3 text-gray-700 hover:text-stone-600">
                <Phone class="w-4 h-4 shrink-0" />
                <span>+62 812-3456-7890</span>
              </a>
              <a href="mailto:hello@yourcompany.com" class="flex items-center gap-3 text-gray-700 hover:text-stone-600">
                <Mail class="w-4 h-4 shrink-0" />
                <span>hello@yourcompany.com</span>
              </a>
              <div class="flex items-center gap-3 text-gray-700">
                <MapPin class="w-4 h-4 shrink-0" />
                <span>Ubud, Bali, Indonesia</span>
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

      <div class="block md:hidden">
        <NavMobile />
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>