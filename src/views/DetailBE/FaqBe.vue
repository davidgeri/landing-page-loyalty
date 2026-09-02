<script setup lang="ts">
import Faq from '../../components/Faq/Faq.vue';
import {Smartphone, Database, TicketPercent, Wallet} from "@lucide/vue"

const faqs = [
  {
    question: 'Apakah Booking Engine dapat di gunakan melalui perangkat mobile?',
    answer: 'Ya, Booking Engine kami sepenuhnya responsif dan dapat diakses melalui smartphone, tablet, maupun desktop, sehingga tamu dapat melakukan reservasi kapan saja dan di mana saja.',
    icon : Smartphone
  },
  {
    question: 'Apakah data reservasi langsung masuk ke Cakrasoft',
    answer: 'Ya, setiap reservasi yang dibuat melalui Booking Engine akan otomatis terintegrasi dan tersinkronisasi secara real-time ke sistem Cakrasoft, tanpa perlu input manual.',
    icon : Database
  },
  {
    question: 'Apakah mendukung promo code?',
    answer: 'Ya, Booking Engine mendukung penggunaan kode promo/voucher diskon yang dapat diinput langsung oleh tamu saat proses pemesanan untuk mendapatkan harga khusus.',
    icon : TicketPercent
  },
  {
    question: 'Apa Saja metode pembayaran yang bisa di gunakan',
    answer: 'Tersedia berbagai metode pembayaran, seperti kartu kredit/debit, transfer bank, virtual account, e-wallet, dan metode pembayaran digital lainnya, sesuai dengan yang telah dikonfigurasi oleh pihak hotel/properti.',
    icon : Wallet
  }
]

const dat = {
  HeadTitle: "FAQ",
  
  Title: "Channel Manager",
  desk: "Masih ada yang ingin ditanyakan? Berikut jawaban atas pertanyaan yang paling sering muncul dari hotel yang menggunakan Cakrasoft.",
  style: "text-blue-500",
  faqComp : faqs
}

</script>

<template>
  <Faq :-head-title="dat.HeadTitle" :-title="dat.Title" :desk="dat.desk" :faq-comp="dat.faqComp" :style="dat.style"   />
</template>