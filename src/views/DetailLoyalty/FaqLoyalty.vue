<script setup lang="ts">
import Faq from '../../components/Faq/Faq.vue';
import {UserPlus, Coins, CalendarClock, Gift, Settings} from "@lucide/vue"

const faqs = [
  {
    question: 'Bagaimana Tamu dapat menjadi member ?',
    answer: 'Tamu bisa mendaftar menjadi member langsung melalui aplikasi dengan mengisi data diri. Setelah verifikasi selesai akun member aktif dan siap di gunakan.',
    icon : UserPlus
  },
  {
    question: 'Bagaimana poin diperoleh?',
    answer: 'Transaksi tamu dapat dikonversi menjadi poin member sesuai aturan loyalty yang ditentukan hotel. Poin dapat diperoleh dari berbagai transaksi outlet seperti room service, restoran, kafe, laundry, dan business center.',
    icon : Coins
  },
  {
    question: 'Apakah poin memiliki masa berlaku?',
    answer: 'Poin memiliki masa berlaku tertentu sejak tanggal perolehan. Member akan mendapat notifikasi sebelum poin mendekati masa kedaluwarsa agar dapat segera ditukarkan.',
    icon : CalendarClock
  },
  {
    question: 'Bagaimana cara menukarkan reward?',
    answer: 'Poin yang terkumpul dapat ditukar menjadi reward, voucher, diskon, atau benefit tertentu sesuai ketentuan yang berlaku.',
    icon : Gift
  },
  {
    question: 'Apakah hotel dapat mengatur sendiri aturan poin?',
    answer: 'Ya, aturan loyalty seperti cara perolehan dan konversi poin ditentukan oleh masing-masing hotel. Sistem juga mendukung pengelolaan data member agar hotel dapat mengatur program loyalty dengan lebih rapi.',
    icon : Settings
  },
]

const dat = {
  HeadTitle: "FAQ",
  Title: "Cakra Loyalty",
  desk: "Masih ada yang ingin ditanyakan? Berikut jawaban atas pertanyaan yang paling sering muncul dari hotel yang menggunakan Cakrasoft.",
  style: "text-blue-500",
  faqComp : faqs
}

</script>

<template>
  <Faq :-head-title="dat.HeadTitle" :-title="dat.Title" :desk="dat.desk" :faq-comp="dat.faqComp" :style="dat.style"   />
</template>