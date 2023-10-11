
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import bootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg'


import 'primeicons/primeicons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/bootstrap-icons.svg'
import 'bootstrap-icons/font/bootstrap-icons.css'





//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";

const app = createApp(App)

app.use(router,PrimeVue,bootstrap,bootstrapIcons)
app.mount('#app')
