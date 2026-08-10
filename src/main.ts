import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router/index"
import {createPinia} from "pinia"
import primevue from "primevue/config"

const app = createApp(App)
app.use(createPinia())
app.use(primevue)
app.use(router)
app.mount('#app')
