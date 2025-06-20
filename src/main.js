import { createApp } from 'vue'
import App from './App.vue'
import { PrimeVue } from '@primevue/core';
import Aura from '@primeuix/themes/aura';
import { TabMenu } from 'primevue';


const app = createApp(App)
app.use(PrimeVue, {
        // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
})
app.component('TabMenu', TabMenu)
app.mount('#app')
