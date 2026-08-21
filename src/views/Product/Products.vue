<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowRight, Award, BadgeCheck, Check, Crown } from '@lucide/vue'

const router = useRouter()

const products = [
  {
    slug: 'front-desk',
    title: 'Front Desk',
    desc: 'Fitur yang memudahkan Anda mengelola semuanya dalam satu system dan terintegrasi pada departement hotel.',
    isFullWidth: false,
    icon: '/icon/frontdesk.png', 
    image: '/assets/frontdesk-ui.png'
  },
  {
    slug: 'point-of-sales',
    title: 'Point Of Sales',
    desc: 'Solusi ampuh dan mudah digunakan untuk menangani transaksi pada semua outlet.',
    isFullWidth: false,
    icon: '/icon/pos.png',
    image: '/assets/pos-ui.png'
  },
  {
    slug: 'accounting',
    title: 'Accounting',
    desc: 'Menawarkan pengelolaan transaksi keuangan mudah, terintegrasi, realtime, cepat, dan akurat.',
    isFullWidth: false,
    icon: '/icon/accounting.png',
    image: '/assets/accounting-ui.png'
  },
  {
    slug: 'banquet',
    title: 'Banquet',
    desc: 'Memberikan solusi tepat untuk menghandle kegiatan Meeting, Incentive, Convention, and Exhibition.',
    isFullWidth: false,
    icon: '/icon/banquet.png',
    image: '/assets/banquet-ui.png'
  },
  {
    slug: 'inventory',
    title: 'Inventory',
    desc: 'Kami menawarkan solusi manajemen inventaris menggunakan metode FIFO, LIFO, dan Average.',
    isFullWidth: false,
    icon: '/icon/inven.png',
    image: '/assets/loyalty-ui.png'
  },
  {
    slug: 'channel-manager',
    title: 'Channel Manager',
    desc: 'Terintegrasi dengan OTA dan PMS yang bisa melakukan pembaharuan secara real time sehingga menjadi lebih efisien.',
    isFullWidth: false,
    icon: '/icon/c-manajer.png',
    image: '/assets/c-manajer-ui.png'
  },
  {
    slug: 'booking-engine',
    title: 'Booking Engine',
    desc: 'Cakrahub Booking Engine terintegrasi ke dalam situs web hotel untuk memfasilitasi reservasi online secara langsung.',
    isFullWidth: true,
    icon: '/icon/b-engine.png',
    image: '/assets/b-engine-ui.png'
  },
  {
    slug: 'cakra-loyalty',
    title: 'Cakra Royalty',
    desc: 'Membantu hotel membangun loyalitas tamu melalui membership, tier, poin, promosi, dan reward yang terintegrasi.',
    isFullWidth: true,
    isLoyalty: true
  }
]

const goToDetail = (slug: string) => {
  router.push(`/product/${slug}`)
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50/50">
    <div class="text-center mb-12">
      <span class="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 text-blue-600 bg-white text-sm font-medium mb-4">
        <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Product
      </span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Produk yang kami Tawarkan</h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-base">
        Produk yang kami tawarkan yang dapat memudahkan anda dalam mengelola sistem secara lebih efisien
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(item, index) in products"
        :key="index"
        :class="[
          'border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow',
          item.isFullWidth ? 'md:col-span-2 flex flex-col md:flex-row gap-8 mt-4' : 'flex flex-col sm:flex-row gap-6'
        ]"
      >  
        <div :class="['flex flex-col items-start', item.isFullWidth ? 'flex-1 justify-center' : 'flex-1 justify-between']">
          <div>
            <div class="flex items-center gap-4 mb-4">
              <span v-if="item.isLoyalty" class="flex h-14 w-14 items-center justify-center text-blue-500">
                <Award class="h-9 w-9" />
              </span>
              <img v-else :src="item.icon" :alt="`Icon ${item.title}`" :class="item.isFullWidth ? 'w-14 h-14' : 'w-12 h-12'" class="object-contain rounded-md" />
              <div>
                <h3 :class="['font-bold text-gray-800', item.isFullWidth ? 'text-2xl' : 'text-xl']">
                  {{ item.title }}
                </h3>
                <button @click="goToDetail(item.slug)" class="text-blue-600 text-sm hover:underline font-medium mt-1 flex gap-2 items-center group">
                  <h1>Detail Product</h1>
                  <ArrowRight class="w-5 h-5 group-hover:translate-x-1 duration-150 " />
                </button>
              </div>
            </div>
            <p :class="['text-gray-600 mb-6 leading-relaxed', item.isFullWidth ? 'text-base max-w-2xl' : 'text-sm']">
              {{ item.desc }}
            </p>
          </div>
          <button :class="['bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-sm', item.isFullWidth ? 'px-6 py-2.5' : 'px-5 py-2']">
            Request Demo
          </button>
        </div>

        <div :class="['flex items-center justify-center', item.isFullWidth ? 'w-full md:w-1/2 justify-end' : 'w-full sm:w-[45%]']">
          <div
            v-if="item.isLoyalty"
            class="w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            aria-label="Preview membership Cakra Royalty"
          >
            <div class="bg-gradient-to-r from-[#38207d] to-[#54329c] px-4 py-3 text-white sm:px-5">
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="flex h-8 w-8 items-center justify-center rounded-md border border-white/25 bg-white/10">
                    <Crown class="h-4 w-4" />
                  </span>
                  <h4 class="text-lg font-bold">Platinum</h4>
                </div>
                <span class="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium">
                  <BadgeCheck class="h-3 w-3" /> Your Tier
                </span>
              </div>
              <p class="mt-2 text-[10px] text-white/75">Top-tier membership with maximum benefits and privileges</p>
            </div>
            <div class="p-4 sm:p-5">
              <div class="space-y-2 text-xs text-slate-500">
                <div class="flex justify-between gap-4"><span>Point Required</span><strong class="text-slate-700">280 + pts</strong></div>
                <div class="flex justify-between gap-4"><span>Bonus Earn</span><strong class="text-slate-700">+20.00%</strong></div>
              </div>
              <div class="my-3 border-t border-slate-200"></div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="benefit in ['20% Bonus Points', 'Free Railway Station Transfer', 'VIP Lounge Access', 'Dedicated Manager']" :key="benefit" class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-[9px] font-medium text-violet-700">
                  <Check class="h-2.5 w-2.5" /> {{ benefit }}
                </span>
              </div>
            </div>
          </div>
          <img
            v-else
            :src="item.image"
            :alt="`Dashboard ${item.title}`"
            :class="['h-auto object-cover rounded shadow-sm border border-gray-100 bg-gray-100', item.isFullWidth ? 'w-full max-w-lg rounded-lg' : 'w-full min-h-30']"
          />
        </div>
      </div>
    </div>
  </section>
</template>
