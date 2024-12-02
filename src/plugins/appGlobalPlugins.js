import store from '@/store'
import router from '@/router'

import VueClipboard from 'vue3-clipboard'

import QrReader from 'vue3-qr-reader'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'

import 'primeicons/primeicons.css'; // Optional: PrimeIcons for icons


import Toast from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'



export default function registerPlugins(app) {
  app.use(PrimeVue)
  app.use(router)
  app.use(store)
  app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true
  })
  app.use(QrReader)
  app.use(Toast)
}
