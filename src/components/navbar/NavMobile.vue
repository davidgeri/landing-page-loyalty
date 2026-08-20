<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { Equal, X, Phone, Mail } from '@lucide/vue'
import { RouterLink, useRoute } from 'vue-router'
import { navmenu } from '../../store/navmenu'

const {menu} = navmenu()

const current_contact = {
  phone: "+62 813-438-810-00",
  email: "info@cakrasoft.net"
}

const isOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const handleMenu = () => {
  if (isOpen.value) {
    closeMenu()
    return
  }

  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

// Pastikan scroll dikembalikan meskipun navigasi dipicu dari link mana pun.
watch(() => route.fullPath, closeMenu)
onBeforeUnmount(closeMenu)

</script>

<template>
  <menu class="relative bg-white">
    <button 
      class="relative w-6 h-6 cursor-pointer z-50" 
      @click="handleMenu"
    >
      <Equal 
        class="absolute inset-0 duration-300 transition-all"
        :class="isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'"
      />
      <X 
        class="absolute inset-0 duration-300 transition-all"
        :class="isOpen ? 'opacity-100 rotate-90' : 'opacity-0 rotate-0'"
      />
    </button>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isOpen"
        class="fixed inset-0 top-16 bg-white flex flex-col z-40"
      >
        <div class="flex flex-col text-lg">
          <RouterLink 
            v-for="(item, index) in menu" 
            :key="index"
            :to="item.navto"
            @click="closeMenu"
            class="py-4 px-6 hover:bg-gray-100 duration-300"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <div class="mt-auto p-6 flex flex-col gap-4 border-t border-gray-100">
          <a 
            href="tel:+6281234567890" 
            class="flex items-center gap-3 text-gray-700"
          >
            <Phone class="w-5 h-5" />
            <span>{{ current_contact.phone }}</span>
          </a>
          <a 
            :href="`mailto:${current_contact.email}`" 
            class="flex items-center gap-3 text-gray-700"
          >
            <Mail class="w-5 h-5" />
            <span class="text-blue-600">{{ current_contact.email }}</span>
          </a>

          <RouterLink 
            to="/request-demo" 
            @click="closeMenu"
            class="w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-lg mt-2 cursor-pointer active:scale-95 active:bg-blue-500  transition-transform inline-block
            "
          >
            Request Demo
          </RouterLink>
        </div>
      </div>
    </Transition>
  </menu>
</template>
