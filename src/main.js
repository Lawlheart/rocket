import { createApp,h } from 'vue'

import { store } from './store'
import App from './App.vue'

// Import Astro's base styles
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'
import {
  applyPolyfills,
  defineCustomElements,
} from '@astrouxds/astro-web-components/loader'

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements()
})

createApp({
  render: ()=>h(App)
}).use(store).mount('#app')
