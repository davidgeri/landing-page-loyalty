<script lang="ts" setup>
import Faq from '../../components/Faq/Faq.vue';
import {Crown, CalendarCheck, IdCard, ShoppingCart} from "@lucide/vue"

const faqs = [
  {
    question: 'Promo berdasarkan Tier.',
    answer: 'Nikmati promo eksklusif yang disesuaikan dengan tier keanggotaan Anda. Semakin tinggi tier, semakin besar keuntungan dan penawaran khusus yang bisa didapatkan.',
    icon : Crown
  },
  {
    question: 'Promo periode tertentu.',
    answer: 'Dapatkan promo yang hanya berlaku pada rentang waktu tertentu, seperti event musiman, hari besar, atau kampanye khusus dalam periode terbatas.',
    icon : CalendarCheck
  },
  {
    question: 'Promo khusus member.',
    answer: 'Penawaran eksklusif yang hanya bisa diakses oleh member terdaftar, sebagai bentuk apresiasi atas keanggotaan dan loyalitas Anda.',
    icon : IdCard
  },
  {
    question: 'Promo Berdasarkan ketentuan yang berlaku.',
    answer: 'Promo yang diberikan sesuai syarat dan ketentuan tertentu, misalnya minimum transaksi, jenis produk, atau metode pembayaran yang digunakan.',
    icon : ShoppingCart
  },
]

const dat = {
  HeadTitle: "FAQ",
  pill : "Promotion Feature",
  Title: "Fitur Promosi",
  desk: "Kelola Perolehan, penggunaan, dan riwayat poin member secara transparant.",
  faqComp : faqs
}

</script>

<template>
    <Faq :-head-title="dat.HeadTitle" :pill="dat.pill" :-title="dat.Title" :desk="dat.desk" :faq-comp="dat.faqComp" />
</template>