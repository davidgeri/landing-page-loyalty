<script setup lang="ts">
import {FaceSlightlySmiling} from "@lucide/vue"
import CardTestimonial from "./CardTestimonial.vue";


const data = {
    OutlinePill : "Testimonial",
    Title : "Klien Terpercaya Kami",
    Desk : "Misi kami adalah mendorong kemajuan dan meningkatkan kehidupan para pelanggan dengan menghadirkan produk dan layanan unggulan yang melampaui ekspektasi."
}

const ClientSay = [
    {
        message : "Program Cakrasoft Hotel System mantap, berjalan dengan baik, banyak fitur dan cukup lengkap",
        name : "Mr. Elbert Lie",
         profession : "Owner Hotel Padma - Tarakan"
    },
    {
        message : "Bagus sejauh ini belum ada troubleshooting , laporan langsung selesai tepat waktu, Harga terjangkau, update & coorporative, simple & mudah dimengerti, customize/sesuai keperluan atau kebutuhan pelanggan",
        name : "Mr. Anton",
         profession : "GM Hotel Tree Makassar / GM Grand Asia Hotel"
    },
    {
        message : "Programnya mudah dipahami,sudah sangat lengkap dan layanan purna jualnya memuaskan",
        name : "Mrs. Suwanny",
         profession : " Owner/Direktur - Grand Town Hotel Makassar / Grand Town Hotel Mandai"
    },
]

</script>

<template>
    <section class="mt-20" aria-labelledby="testimonial-title">
        <header class="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-5 text-center">
            <p class="flex items-center gap-3 rounded-2xl border border-blue-500 px-5 py-1 text-sm font-semibold text-blue-500 sm:px-10">
                <FaceSlightlySmiling class="h-5 w-5" aria-hidden="true" />
                <span>{{ data.OutlinePill }}</span>
            </p>
            <div class="space-y-3">
                <h2 id="testimonial-title" class="text-3xl font-semibold sm:text-4xl">{{ data.Title }}</h2>
                <p class="text-stone-600">{{ data.Desk }}</p>
            </div>
        </header>

        <CardTestimonial :clientsay="ClientSay" />
    </section>
</template>
