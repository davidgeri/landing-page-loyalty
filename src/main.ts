import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./router/index"
import { createPinia } from "pinia"
import PrimeVue from "primevue/config"
import Aura from '@primevue/themes/aura'
import Tooltip from 'primevue/tooltip'
import { definePreset } from '@primevue/themes'

const CakraPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});

const app = createApp(App)
app.directive('tooltip', Tooltip)
app.use(createPinia())
app.use(PrimeVue, {
    theme: {
        preset: CakraPreset,
        options: {
            darkModeSelector: '.app-light'
        }
    }
})
app.use(router)
app.mount('#app')