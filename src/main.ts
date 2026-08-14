import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router/index"
import {createPinia} from "pinia"
import primevue from "primevue/config"
import Tooltip from 'primevue/tooltip'


const app = createApp(App)
app.directive('tooltip', Tooltip)
app.use(createPinia())
app.use(primevue)
app.use(router)
app.mount('#app')
