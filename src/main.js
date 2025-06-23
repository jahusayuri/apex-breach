import { createApp } from 'vue'
import App from './App.vue'
import { PrimeVue } from '@primevue/core';
import Aura from '@primeuix/themes/aura';
import { TabMenu } from 'primevue';
import router from './apexRouter';


const app = createApp(App)
app.use(PrimeVue, {
        // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: false
        }
    }
})
app.use(router)
app.component('TabMenu', TabMenu)
app.mount('#app')
