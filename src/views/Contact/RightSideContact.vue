<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { CheckCircle2, CircleAlert, X } from '@lucide/vue'
import { HandleFetchApi } from '../../composable/FetchApi'

interface ContactForm {
	name: string
	email: string
	subject: string
	message: string
}

const form = ref<ContactForm>({
	name: '',
	email: '',
	subject: '',
	message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
let notificationTimeout: ReturnType<typeof setTimeout> | undefined

const clearNotificationTimeout = () => {
	if (notificationTimeout) {
		clearTimeout(notificationTimeout)
		notificationTimeout = undefined
	}
}

const showNotification = (status: 'success' | 'error') => {
	clearNotificationTimeout()
	submitStatus.value = status
	notificationTimeout = setTimeout(() => {
		submitStatus.value = 'idle'
		notificationTimeout = undefined
	}, 10000)
}

const closeNotification = () => {
	clearNotificationTimeout()
	submitStatus.value = 'idle'
}

const resetForm = () => {
	form.value = { name: '', email: '', subject: '', message: '' }
	closeNotification()
}

const url = "https://formsubmit.co/ajax/kadekisaka00@gmail.com"

const handleSubmit = async () => {
	isSubmitting.value = true
	submitStatus.value = 'idle'

	try {
		const payload = {
			name: form.value.name,
			email: form.value.email,
			_subject: form.value.subject,
			message: form.value.message,
			_template: 'basic',
			_captcha: 'false'
		}

		const { response, error } = await HandleFetchApi(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			data: JSON.stringify(payload)
		})

		if (error.value) {
			throw new Error('Gagal mengirim pesan')
		}

		console.log(response.value)
		resetForm()
		showNotification('success')
	} catch {
		showNotification('error')
	} finally {
		isSubmitting.value = false
	}
}

onUnmounted(clearNotificationTimeout)
</script>

<template>
	<section class="w-full lg:col-span-7" aria-labelledby="message-title">
		<form class="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8"
			@submit.prevent="handleSubmit">
			<header class="mb-6">
				<h2 id="message-title" class="text-xl font-bold text-slate-900 sm:text-2xl">
					Send <span class="text-[#0c6cf2]">Message</span>
				</h2>
				<p class="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
					Ada pertanyaan lebih lanjut? Kirim pesan dan tim kami akan segera merespons.
				</p>
			</header>

			<fieldset class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<legend class="sr-only">Contact details</legend>
				<div>
					<label for="contact-name"
						class="relative left-3 top-2 bg-white px-2 text-sm text-slate-500">Name</label>
					<input id="contact-name" v-model="form.name" type="text" required placeholder="Nama Lengkap Anda"
						class="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
				</div>
				<div>
					<label for="contact-email"
						class="relative left-3 top-2 bg-white px-2 text-sm text-slate-500">Email</label>
					<input id="contact-email" v-model="form.email" type="email" required placeholder="Example@gmail.com"
						class="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
				</div>
			</fieldset>

			<div class="mt-4">
				<label for="contact-subject"
					class="relative left-3 top-2 bg-white px-2 text-sm text-slate-500">Subject</label>
				<input id="contact-subject" v-model="form.subject" type="text" required
					placeholder="Masalah yang Anda hadapi"
					class="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500" />
			</div>

			<div class="mt-5">
				<label for="contact-message" class="mb-2 block text-sm font-semibold text-slate-700 sm:text-base">Tulis
					pesan Anda *</label>
				<textarea id="contact-message" v-model="form.message" required placeholder="Apa pertanyaan Anda..."
					rows="7"
					class="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-[#0c6cf2] sm:text-base"></textarea>
			</div>

			<div class="mt-5 flex flex-col-reverse justify-end gap-3 sm:flex-row sm:gap-4">
				<button type="button" @click="resetForm"
					class="w-full rounded-lg border border-blue-500 px-8 py-2 font-semibold text-blue-600 transition hover:bg-blue-50 sm:w-auto sm:px-10">Cancel</button>
				<button type="submit" :disabled="isSubmitting"
					class="w-full rounded-lg bg-[#0c6cf2] px-8 py-2 font-semibold text-white transition hover:bg-[#0a5ac1] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10">
					{{ isSubmitting ? 'Mengirim...' : 'Submit' }}
				</button>
			</div>
		</form>

		<Transition enter-active-class="transition duration-300 ease-out" enter-from-class="translate-x-8 opacity-0"
			enter-to-class="translate-x-0 opacity-100" leave-active-class="transition duration-200 ease-in"
			leave-from-class="translate-x-0 opacity-100" leave-to-class="translate-x-8 opacity-0">
			<div v-if="submitStatus !== 'idle'"
				class="fixed right-4 top-5 z-50 flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-2xl  bg-white/95 p-4 shadow-sm shadow-[#b9b9b941] backdrop-blur-md sm:right-6 sm:top-6"
				role="status">
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
					:class="submitStatus === 'success' ? 'text-emerald-600' : 'text-red-600'">
					<CheckCircle2 v-if="submitStatus === 'success'" class="h-8 w-8" />
					<CircleAlert v-else class="h-8 w-8" />
				</div>
				<div class="min-w-0 flex-1">
					<p class="text-ld font-semibold text-slate-900">{{ submitStatus === 'success' ? 'Pesan berhasil dikirim' : 'Pesan gagal dikirim' }}</p>
					<p class="mt-1 text-md leading-relaxed">{{ submitStatus === 'success' ? 'Tim kami akan segera merespons.' : 'Silakan periksa koneksi lalu coba lagi.' }}</p>
				</div>
				<button type="button" aria-label="Tutup notifikasi"
					class="shrink-0 rounded-lg p-1 text-slate-400 transition-colors hover:bg-stone-100 hover:text-stone-700"
					@click="closeNotification">
					<X class="h-4 w-4" />
				</button>
			</div>
		</Transition>
	</section>
</template>
