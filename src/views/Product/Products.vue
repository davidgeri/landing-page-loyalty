<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowRight, Award } from '@lucide/vue'
import CardLoyalty from '../../components/cardLoyalty/CardLoyalty.vue'
import OutlinePillPing from '../../components/outlinepill/OutlinePillPing.vue'

const router = useRouter()

const Required = [
    {
        title : "Point Required",
        require : "280 + pts"
    },
    {
        title : "Bonus Earned",
        require : "+20.00%"
    }
]

const Benefit = [
    {
        text : "20% Bonus Points",
    },
    {
        text : "Free Railway Station Transfer",
    },
    {
        text : "Vip Lounge Accsess",
    },
    {
        text : "Dedicated Manager",
    },
]

const tierStyle = {
    bg: "border-[#9486BC] bg-[#cfc0fc43]",
    icon: "text-[#E5DDFF]"
}

const requirementStyle = {
    title: "text-[#909090] font-medium",
    require: "text-[#6A6A6A] font-semibold"
}

const classes = {
    header: "bg-linear-to-r from-[#2D1B69] to-[#3D2680]",
    tier: tierStyle,
    desk: "text-[#C7C7CC]",
    bgico: "border-[#AFA9FC] bg-[#564097]",
    required: requirementStyle
}

const Card = {
    title : "Your Tier",
    tier : "Platinum",
    desk : "Top-tier membership with maximum benefits and privilages",
    required : Required,
    benefit : Benefit
}

const products = [
  {
    slug: 'front-desk',
    title: 'Front Desk',
    desc: 'Fitur yang memudahkan Anda mengelola semuanya dalam satu system dan terintegrasi pada departement hotel.',
    isFullWidth: false,
    icon: '/icon/frontdesk.png', 
    image: '/assets/frontdesk-page.png'
  },
  {
    slug: 'point-of-sales',
    title: 'Point Of Sales',
    desc: 'Solusi ampuh dan mudah digunakan untuk menangani transaksi pada semua outlet.',
    isFullWidth: false,
    icon: '/icon/pos.png',
    image: '/assets/pos-page.png'
  },
  {
    slug: 'accounting',
    title: 'Accounting',
    desc: 'Menawarkan pengelolaan transaksi keuangan mudah, terintegrasi, realtime, cepat, dan akurat.',
    isFullWidth: false,
    icon: '/icon/accounting.png',
    image: '/assets/accounting-page.png'
  },
  {
    slug: 'banquet',
    title: 'Banquet',
    desc: 'Memberikan solusi tepat untuk menghandle kegiatan Meeting, Incentive, Convention, and Exhibition.',
    isFullWidth: false,
    icon: '/icon/banquet.png',
    image: '/assets/banquet-page.png'
  },
  {
    slug: 'inventory',
    title: 'Inventory',
    desc: 'Kami menawarkan solusi manajemen inventaris menggunakan metode FIFO, LIFO, dan Average.',
    isFullWidth: false,
    icon: '/icon/inventory.png',
    image: '/assets/inventory-page.png'
  },
  {
    slug: 'channel-manager',
    title: 'Channel Manager',
    desc: 'Terintegrasi dengan OTA dan PMS yang bisa melakukan pembaharuan secara real time sehingga menjadi lebih efisien.',
    isFullWidth: false,
    icon: '/icon/channel-manager.png',
    image: '/assets/channel-manager-page.png'
  },
  {
    slug: 'booking-engine',
    title: 'Booking Engine',
    desc: 'Cakrahub Booking Engine terintegrasi ke dalam situs web hotel untuk memfasilitasi reservasi online secara langsung.',
    isFullWidth: true,
    icon: '/icon/booking-engine.png',
    image: '/assets/booking-engine-page.png'
  },
  {
    slug: 'cakra-loyalty',
    title: 'Cakra Loyalty',
    desc: 'Membantu hotel membangun loyalitas tamu melalui membership, tier, poin, promosi, dan reward yang terintegrasi.',
    isFullWidth: true,
    isLoyalty: true
  }
]

const data = {
  title : "Produk yang kami Tawarkan",
  desk : "Produk yang kami tawarkan yang dapat memudahkan anda dalam mengelola sistem secara lebih efisien.",
    outlinePill: {
    text: "Products",
    classPil: "text-blue-500",
    bgPing: "bg-blue-500"
  },
}

const goToDetail = (slug: string) => {
  router.push(`/product/${slug}`)
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-12">
            <span class="flex justify-center">
        <OutlinePillPing :text="data.outlinePill.text" :class-pil="data.outlinePill.classPil"
          :bg-ping="data.outlinePill.bgPing" />
      </span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{{ data.title }}</h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-base">
        {{ data.desk }}
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
                <button @click="goToDetail(item.slug)" class="text-blue-600 text-sm hover:underline font-medium mt-1 flex gap-2 items-center group cursor-pointer">
                  <span>Detail Product</span>
                  <ArrowRight class="w-5 h-5 group-hover:translate-x-1 duration-150" />
                </button>
              </div>
            </div>
            <p :class="['text-gray-600 mb-6 leading-relaxed', item.isFullWidth ? 'text-base max-w-2xl' : 'text-sm']">
              {{ item.desc }}
            </p>
          </div>
          <button 
            @click="$router.push('/request-demo')"
            :class="['bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-sm', item.isFullWidth ? 'px-6 py-2.5' : 'px-5 py-2']"
          >
            Request Demo
          </button>
        </div>

        <div :class="['flex items-center justify-center', item.isFullWidth ? 'w-full md:w-1/2 justify-end' : 'w-full sm:w-[45%]']">
          <div
            v-if="item.isLoyalty"
            class="w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            aria-label="Preview membership Cakra Royalty"
          >
           <CardLoyalty :tier="Card.tier" :title="Card.title" :desk="Card.desk" :required="Required" :benefit="Benefit" :class-card="classes"  />
          </div>
          <img
            v-else
            :src="item.image"
            :alt="`Dashboard ${item.title}`"
            :class="['h-auto object-cover rounded shadow-sm border border-gray-100 ', item.isFullWidth ? 'w-full max-w-lg rounded-lg' : 'w-full min-h-30']"
          />
        </div>
      </div>
    </div>
  </section>
</template>