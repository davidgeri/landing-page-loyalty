<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { useCakraBotStore } from "../../store/StoreCakraBot";
import { X, SendHorizonal, CornerUpRight, Copy, Check } from "@lucide/vue";
import { marked } from "marked";

const bot = useCakraBotStore();
const isOpen = ref(false);
const userInput = ref("");
const activePromptIndex = ref(0);
const copiedMessageIndex = ref<number | null>(null);
const chatMessagesRef = ref<HTMLElement | null>(null);
const chatHistory = ref<Array<{ role: "user" | "bot"; text: string }>>([
  {
    role: "bot",
    text: "Halo! Saya siap membantu menjawab pertanyaan seputar produk Cakrasoft.",
  },
]);

const toolTip = '<div class=" hidden md:block gap-1 md:flex">Cakra<span class="-mr-1 inline-flex items-center justify-center leading-none px-1.5  rounded-sm bg-blue-600 text-green-50 text-xs font-medium font-mono">AI</span></div>';

const promptList = [
  "Apa keunggulan Channel Manager Cakra?",
  "Apakah CakraSoft bisa di gunakan hotel kecil?",
];

const activePrompt = computed(() => promptList[activePromptIndex.value]);

let intervalId: ReturnType<typeof setInterval> | null = null;
let copiedMessageTimeout: ReturnType<typeof setTimeout> | null = null;

const rotatePrompt = () => {
  activePromptIndex.value = (activePromptIndex.value + 1) % promptList.length;
};

const openChat = () => {
  isOpen.value = true;
};

const pushChatHistory = (role: "user" | "bot", text: string) => {
  chatHistory.value.push({ role, text });
  void nextTick(() => {
    chatMessagesRef.value?.scrollTo({
      top: chatMessagesRef.value.scrollHeight,
      behavior: "smooth",
    });
  });
};

const copyWithFallback = (text: string) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Clipboard copy failed");
  }
};

const copyResponse = async (index: number, text: string) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      copyWithFallback(text);
    }
  } catch {
    copyWithFallback(text);
  }

  copiedMessageIndex.value = index;

  if (copiedMessageTimeout) {
    clearTimeout(copiedMessageTimeout);
  }

  copiedMessageTimeout = setTimeout(() => {
    copiedMessageIndex.value = null;
  }, 2000);
};

const sendPrompt = async (prompt: string) => {
  const text = prompt.trim();
  if (!text) return;

  userInput.value = "";
  pushChatHistory("user", text);

  const result = await bot.sendMessage({ message: text });
  pushChatHistory("bot", result ?? "Maaf, terjadi kesalahan saat memproses pesan.");
};

const submitMessage = async () => {
  await sendPrompt(userInput.value);
};

onMounted(() => {
  intervalId = setInterval(rotatePrompt, 5000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  if (copiedMessageTimeout) {
    clearTimeout(copiedMessageTimeout);
  }
});


</script>

<template>
  <div class="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
    <Transition enter-active-class="transform-gpu transition duration-300 ease-out"
      enter-from-class="translate-y-8 opacity-0" enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transform-gpu transition duration-200 ease-in" leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-8 opacity-0">
      <div v-if="isOpen"
        class="flex max-h-[calc(100dvh-6.5rem)] w-[calc(100vw-2rem)] max-w-100 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.2)] sm:w-100">
        <header class="shrink-0 border-2 px-4 py-4 text-white sm:px-5">
          <div class="flex items-center justify-between gap-3">
            <div class="flex min-w-0 items-center gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <img src="/images/Logo-cakra-minimal.png" alt="Cakra icon" class="h-7 w-7 object-contain" />
              </div>
              <div class="min-w-0">
                <p class="text-sm font-semibold tracking-tight text-stone-900">Cakra AI</p>
                <div class="mt-1 flex items-center gap-1.5 text-[11px] text-slate-300">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 absolute animate-ping"></span>
                  <span class="text-stone-900">Online</span>
                </div>
              </div>
            </div>
            <button type="button"
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-stone-400 hover:border hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-white/40"
              title="close" @click="isOpen = false" aria-label="Tutup chat">
              <X class="h-4 w-4" />
            </button>
          </div>
        </header>

        <div class="shrink-0 border border-gray-300  px-4 py-5 sm:px-5 border-l-0 border-r-0">
          <p class="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 mb-3 flex gap-2 items-center">
          <h1>Coba Tanyakan</h1>
          <CornerUpRight class="rotate-45 w-3 h-3" />
          </p>
          <p class=" text-sm font-medium leading-snug text-slate-700 absolute -mt-3">{{ activePrompt }}</p>
        </div>

        <div ref="chatMessagesRef" class="min-h-0 flex-1 space-y-3 overflow-y-auto bg-white px-4 py-4 sm:px-5">
          <div v-for="(item, index) in chatHistory" :key="`${item.role}-${index}`" class="flex"
            :class="item.role === 'user' ? 'justify-end' : 'justify-start'">
            <template v-if="item.role === 'bot'">
              <div class="flex w-full max-w-[88%] flex-col items-start">
                <div
                  class="rounded-2xl rounded-bl-md border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm leading-relaxed text-slate-700">
                  <div v-html="marked.parse(item.text)"
                    class="[&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-4">
                  </div>
                </div>
                <button type="button"
                  class="mt-2 ml-auto flex items-center gap-1.5 border-0 text-[11px] text-slate-400 outline-none"
                  :aria-label="copiedMessageIndex === index ? 'Teks tersalin' : 'Salin respons AI'"
                  :title="copiedMessageIndex === index ? 'Tersalin' : 'Salin teks'"
                  @click="copyResponse(index, item.text)">
                  <Check v-if="copiedMessageIndex === index" class="h-3.5 w-3.5" aria-hidden="true" />
                  <Copy v-else class="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{{ copiedMessageIndex === index ? 'Tersalin' : 'Salin' }}</span>
                </button>
              </div>
            </template>
            <div v-else
              class="max-w-[88%] rounded-2xl rounded-br-md bg-sky-900 px-3.5 py-2.5 text-sm leading-relaxed text-white">
              {{ item.text }}
            </div>
          </div>

          <div v-if="bot.isLoading" class="flex justify-start">
            <div
              class="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-slate-200 bg-slate-50 px-3.5 py-3">
              <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]"></span>
              <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]"></span>
              <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"></span>
            </div>
          </div>
        </div>

        <footer class="shrink-0 border-t border-slate-200 bg-white px-4 py-3 sm:px-5">
          <div class="mb-3 flex max-h-16 flex-wrap gap-1.5 overflow-y-auto">
            <p class="text-gray-400 hover:absolute hover:scale-110 ">Quick Ask !</p>
            <button v-for="(prompt, _) in promptList" :key="prompt" type="button"
              class="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-left text-[11px] font-medium leading-snug text-slate-600 transition-colors  focus:outline-none focus:ring-2 hover:border hover:border-sky-700 duration-100"
              @click="sendPrompt(prompt)">
              {{ prompt }}
            </button>
          </div>

          <div
            class="flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-1.5 transition-colors  focus-within:ring-2 focus-within:ring-stone-100">
            <input v-model="userInput" type="text" placeholder="Send a Message . . ."
              class="min-w-0 flex-1 border-0 bg-transparent px-2 text-base text-slate-700 outline-none placeholder:text-slate-400 focus:outline-0 sm:text-sm"
              @keydown.enter.prevent="submitMessage" />
            <button type="button"
              class="sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sky-900 transition-colors  disabled:cursor-not-allowed block md:hidden"
              :disabled="bot.isLoading || !userInput.trim()" @click="submitMessage">
              <SendHorizonal class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </footer>
      </div>
    </Transition>

    <button type="button" v-tooltip.top="{ value: toolTip, escape: false }"
      class="group border border-slate-200 relative flex h-12 w-12 items-center justify-center rounded-2xl shadow-2xl p-0 text-left transition hover:-translate-y-0.5 bg-white sm:h-auto sm:w-auto sm:justify-start sm:gap-3 sm:px-2 sm:py-2 md:rounded-xl md:px-6 md:py-3"
      @click="openChat" aria-label="Buka chat Cakra AI">
      <span class="absolute"></span>

      <span
        className="absolute hidden md:flex -top-2 -right-2 z-10 rounded-md bg-sky-900 px-2 py-0.5 text-[10px] text-white shadow-md gap-0.5 justify-center items-center">
        <p className="text-[17px]">AI <span class="bg-linear-to-r from-white via-white bg-clip-text text-transparent">✨</span></p>
      </span>

      <div class="flex w-full items-center justify-center p-0 sm:w-auto sm:gap-2 sm:px-5 sm:py-2">
        <span class="relative flex items-center justify-center md:rounded-full">
          <img src="/images/Logo-cakra-minimal.png" alt="Cakra AI" class="h-7 w-7 object-contain sm:h-8 sm:w-8" />
        </span>
        <span class="relative hidden sm:block">
          <span class="block text-lg font-semibold text-slate-700">Cakra</span>
        </span>
      </div>
    </button>
  </div>
</template>
