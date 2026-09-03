<script setup lang="ts">
import { ref, computed } from 'vue'
import {ChevronDown} from "@lucide/vue"

const categories = ['Umum', 'Integrasi', 'Harga', 'Keamanan']
const activeTab = ref<string>('Umum')
const openFaqId = ref<number>(0)

const faqs = [
  { id: 1, 
    category: 'Umum', 
    question: 'Apa itu Cakrasoft dan jenis properti apa saja yang cocok menggunakannya?',
    answer: 'Cakrasoft adalah all-in-one Property Management System (PMS) berbasis cloud yang dirancang untuk mempermudah operasional hotel, resort, villa, dan penginapan lainnya.' 
  },
  { id: 2, 
    category: 'Umum', 
    question: 'Apakah sistem ini berbasis cloud atau harus diinstal di server lokal?', 
    answer: 'Sistem kami 100% berbasis cloud. Anda bisa mengaksesnya dari mana saja dan perangkat apa saja tanpa perlu menyiapkan server fisik yang mahal di hotel Anda.' 
  },
  { id: 3, 
    category: 'Umum', 
    question: 'Apakah membutuhkan spesifikasi komputer atau hardware khusus untuk menjalankan aplikasi ini?', 
    answer: 'Tidak. Karena berbasis web dan cloud, Anda hanya memerlukan komputer, laptop, atau tablet yang memiliki aplikasi browser dan koneksi internet yang stabil.' 
  },
  { id: 4, 
    category: 'Umum', 
    question: 'Apakah tersedia customer support 24/7 jika kami mengalami kendala?', 
    answer: 'Tentu. Kami menyediakan layanan customer support profesional yang siap sedia membantu dan menyelesaikan kendala teknis yang Anda alami agar operasional hotel tetap lancar'
  },
  { id: 5, 
    category: 'Umum', 
    question: 'Apakah transaksi di POS sudah bisa dapat poin?', 
    answer: 'Sangat bisa! Terutama jika diintegrasikan dengan modul Cakra Loyalty, setiap pembelanjaan tamu di outlet F&B atau fasilitas lain (POS) akan otomatis terhitung dan dikonversi menjadi poin loyalitas.' 
  },
  { id: 6, 
    category: 'Umum', 
    question: 'Apakah Cakra Loyalty bisa dipakai pada perangkat android dan tablet?', 
    answer: 'Ya, Cakra Loyalty dapat digunakan pada perangkat android dan tablet, memungkinkan Anda untuk mengelola program loyalitas dari mana saja.' 
  },
  
  { id: 7, 
    category: 'Integrasi', 
    question: 'Apakah Cakra Loyalty terintegrasi dengan PMS yang saya pakai', 
    answer: 'Cakra Loyalty sudah terintegrasi penuh dengan Cakrasoft Cloud Hotel pada modul Front Desk. Untuk penggunaan PMS lain, sistem kami terbuka untuk integrasi — silakan hubungi tim kami untuk detailnya.' 
  },
  { id: 8, 
    category: 'Integrasi', 
    question: 'Berapa lama proses integrasi dengan Cakrasoft?', 
    answer: 'Proses integrasi dan setup awal umumnya memakan waktu yang cukup cepat tergantung pada besaran data hotel Anda. Tim teknis kami akan mendampingi proses ini dari awal hingga sistem berjalan lancar.' 
  },
  { id: 9, 
    category: 'Integrasi', 
    question: 'Apakah ketersediaan kamar di website otomatis sinkron dengan data Front Desk?', 
    answer: 'Ya, Melalui fitur Booking Engine yang terhubung dengan PMS, setiap reservasi yang masuk dari website akan langsung memotong ketersediaan kamar di Front Desk secara real-time.'  
  },
  { id: 10, 
    category: 'Integrasi', 
    question: 'Apakah Channel Manager sudah mendukung integrasi dengan OTA?', 
    answer: 'Tentu! Channel Manager kami sudah terintegrasi dua arah dengan berbagai OTA besar (seperti Traveloka, Agoda, Booking.com) dan PMS. Pembaruan harga dan ketersediaan dilakukan secara real-time untuk mencegah overbooking.' 
  },
  { id: 11, 
    category: 'Integrasi', 
    question: 'Apakah modul Front Desk terhubung otomatis dengan Point of Sales (POS)?', 
    answer: 'Betul! Seluruh transaksi tamu yang terjadi di restoran, laundry, atau fasilitas lain via POS akan otomatis terakumulasi menjadi tagihan (folio) kamar di Front Desk.'  },
  { id: 12, 
    category: 'Integrasi', 
    question: 'Apakah laporan dari Front Desk, Banquet, dan Point of Sales akan langsung masuk menjadi jurnal di modul Accounting?', 
answer: 'Ya. Cakrasoft Accounting meniadakan kerumitan pencatatan manual. Setiap proses transaksi dari Front Desk, POS, dan Banquet akan secara otomatis menghasilkan jurnal di sistem akuntansi.'  },
  
  { id: 13, 
    category: 'Harga', 
    question: 'Bagaimana skema harga untuk menggunakan layanan ini?', 
    answer: 'Skema harga kami sangat fleksibel, dihitung berdasarkan jumlah kamar yang aktif dan modul yang Anda pilih. Anda bisa memilih tagihan per bulan atau per tahun (dengan diskon khusus).' 
  },
  { id: 14, 
    category: 'Harga', 
    question: 'Apakah ada tambahan biaya tak terduga (hidden fee)?', 
    answer: 'Tidak ada. Harga yang kami tawarkan di awal sudah transparan. Tidak ada batasan jumlah user, sehingga Anda bisa membuatkan akun untuk seluruh staf tanpa biaya tambahan.' 
  },
  { id: 15, 
    category: 'Harga', 
    question: 'Bagaimana keamanan data pribadi tamu dan operasional hotel?', 
    answer: 'Kami menggunakan standar enkripsi tingkat tinggi untuk lalu lintas data. Selain itu, server cloud kami memiliki sistem backup harian yang ketat untuk mencegah kehilangan data.' 
  },
  { id: 16, 
    category: 'Harga', 
    question: 'Apakah ada fitur pembatasan hak akses karyawan?', 
    answer: 'Tentu. Admin dapat mengatur hak akses (role privilege) secara spesifik. Staf front desk hanya bisa melihat menu reservasi, sedangkan menu laporan keuangan hanya bisa dibuka oleh manajer/akuntan.' 
  },
  { id: 17, 
    category: 'Harga', 
    question: 'Apakah modul Front Desk terhubung otomatis dengan Point of Sales (POS)?', 
    answer: 'Betul! Seluruh transaksi tamu yang terjadi di restoran, laundry, atau fasilitas lain via POS akan otomatis terakumulasi menjadi tagihan kamar di Front Desk.' 
  },
  { id: 18, 
    category: 'Harga', 
    question: 'Apakah laporan dari Front Desk, Banquet, dan Point of Sales akan langsung masuk menjadi jurnal di modul Accounting?', 
    answer: 'Ya. Cakrasoft Accounting meniadakan kerumitan pencatatan manual. Setiap proses transaksi dari Front Desk, POS, dan Banquet akan secara otomatis menghasilkan jurnal di sistem akuntansi.' 
  },
  
  { 
    id: 19, 
    category: 'Keamanan', 
    question: 'Apakah data tamu aman tersimpan di sistem?', 
    answer: 'Ya, sangat aman. Sistem kami menggunakan standar keamanan dan enkripsi data tingkat tinggi untuk memastikan seluruh data pribadi tamu dan informasi operasional hotel Anda terlindungi dari akses yang tidak sah.' 
  },
  { 
    id: 20, 
    category: 'Keamanan', 
    question: 'Apakah sistem secara otomatis melakukan pencadangan (backup) data harian untuk mencegah kehilangan data akibat force majeure?', 
    answer: 'Tentu saja. Server cloud kami secara otomatis melakukan pencadangan (backup) data harian secara berkala. Hal ini memastikan data Anda tetap aman dan dapat dipulihkan kapan saja jika terjadi kendala tak terduga atau force majeure.' 
  },
  { 
    id: 21, 
    category: 'Keamanan', 
    question: 'Bagaimana keamanan data pribadi tamu dan operasional hotel?', 
    answer: 'Kami memprioritaskan privasi dengan menerapkan infrastruktur cloud yang tangguh. Setiap transmisi data dilindungi oleh protokol keamanan berlapis, sehingga kerahasiaan operasional maupun privasi tamu selalu terjaga sesuai dengan standar industri perhotelan.' 
  },
  { 
    id: 22, 
    category: 'Keamanan', 
    question: 'Apakah ada fitur pembatasan hak akses karyawan?', 
    answer: 'Ada. Sistem kami dilengkapi dengan fitur manajemen hak akses (role privilege) yang sangat mendetail. Anda dapat mengatur menu dan data apa saja yang bisa dilihat atau diubah oleh masing-masing staf, misalnya membedakan akses antara Front Desk, staf F&B, dan Akuntan.' 
  },
  { 
    id: 23, 
    category: 'Keamanan', 
    question: 'Apa yang terjadi pada data kami jika hotel tiba-tiba mengalami gangguan koneksi internet?', 
    answer: 'Sebagai sistem berbasis cloud, koneksi internet memang diperlukan untuk operasional real-time. Namun, Anda tidak perlu khawatir soal kehilangan data. Semua transaksi dan input yang sudah terekam di sistem sebelum koneksi terputus akan tetap utuh dan aman di server kami.' 
  },
  { 
    id: 24, 
    category: 'Keamanan', 
    question: 'Apakah ada fitur pelacakan aktivitas (audit trail atau Night Audit) untuk mencegah manipulasi atau kecurangan data transaksi oleh staf?', 
    answer: 'Pasti. Kami menyediakan fitur Night Audit dan sistem log yang merekam setiap aktivitas secara transparan. Sistem akan mencatat siapa yang melakukan input atau modifikasi transaksi beserta waktu kejadiannya, sehingga integritas data finansial hotel tetap terjaga dan meminimalisir risiko manipulasi.' 
  }
]

const filteredFaqs = computed(() => {
  return faqs.filter(faq => faq.category === activeTab.value)
})

const toggleFaq = (id: number) => {
  openFaqId.value = openFaqId.value === id ? 0 : id
}

const changeTab = (category:string ) => {
  activeTab.value = category
  openFaqId.value = 0
}
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
      class="mb-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 sm:justify-center sm:overflow-visible"
      role="tablist"
      aria-label="Kategori FAQ"
    >
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="changeTab(cat)"
        :aria-selected="activeTab === cat"
        role="tab"
        :class="[
          'shrink-0 snap-center whitespace-nowrap rounded-md border px-6 py-2.5 text-sm font-medium transition-colors md:text-base',
          activeTab === cat 
            ? 'bg-blue-600 text-white border-blue-500' 
            : 'bg-white text-gray-600 border-stone-900 hover:border-blue-600 hover:text-blue-600'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-8" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4" mode="out-in">
      <div :key="activeTab" class="space-y-4">
        <div 
          v-for="faq in filteredFaqs" 
          :key="faq.id" 
          class="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-300"
        >
          <button 
            @click="toggleFaq(faq.id)" 
            class="w-full flex items-center justify-between p-5 text-left focus:outline-none"
          >
            <span class="font-semibold text-gray-900 pr-4">{{ faq.question }}</span>
            
            <ChevronDown 
              class="w-5 h-5 text-stone-900 shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openFaqId === faq.id }"
            />

          </button>

          <div 
            class="grid transition-all duration-300 ease-in-out"
            :class="openFaqId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <div class="px-5 pb-6 text-gray-500 text-sm leading-relaxed">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>