<script setup lang="ts">
import Faq from '../../components/Faq/Faq.vue';
import {Unplug, Hourglass, Inbox, Share2, Tag} from "@lucide/vue"

const faqs = [
  {
    question: 'Bagaimana jika terjadi gangguan koneksi?',
    answer: 'Sistem akan otomatis mencoba menyambungkan kembali begitu koneksi pulih. Data terakhir tetap tersimpan sehingga tidak ada informasi yang hilang.',
    icon : Unplug
  },
  {
    question: 'Seberapa cepat proses sinkronisasi?',
    answer: 'Proses sinkronisasi berjalan secara *real-time* untuk meminimalisir risiko terjadinya overbooking di berbagai channel.',
    icon : Hourglass
  },
  {
    question: 'Apakah reservasi OTA masuk ke Cakrasoft?',
    answer: 'Ya, semua reservasi yang masuk dari berbagai Online Travel Agent (OTA) akan otomatis tercatat dan masuk ke dalam sistem Cakrasoft secara langsung.',
    icon : Inbox
  },
  {
    question: 'Channel apa saja yang dapat dihubungkan?',
    answer: 'Cakrasoft dapat dihubungkan ke berbagai OTA populer seperti Agoda, Booking.com, Traveloka, Expedia, dan puluhan channel lainnya.',
    icon : Share2
  },
  {
    question: 'Apakah harga bisa diatur beda tiap channel?',
    answer: 'Sangat bisa. Anda dapat melakukan *rate management* dan menyesuaikan harga kamar secara fleksibel untuk masing-masing channel yang terhubung.',
    icon : Tag
  },
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