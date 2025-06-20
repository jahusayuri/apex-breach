<template>
    <header class="apex-header">
        <div class="header-container">
            <!-- Logo Left -->
            <div class="logo">
                <i class="pi pi-shield" style="font-size: 2rem; margin-right: 1rem;"></i>
                <span class="title">Apex Breach</span>
            </div>
            <!-- Centered Navigation -->
            <nav class="main-nav">
                <TabMenu :model="tabs" />
            </nav>
            <!-- Right Actions (optional, for future use) -->
            <div class="header-actions"></div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import TabMenu from 'primevue/tabmenu'

const tabs = ref([
    { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
    { label: 'About', icon: 'pi pi-fw pi-info', to: '/about' },
    { label: 'Contact', icon: 'pi pi-fw pi-envelope', to: '/contact' }
])
</script>

<style scoped>
.apex-header {
    background: var(--surface-0);
    border-bottom: 1px solid var(--surface-border);
    /* No custom color, let theme show */
}
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem 1rem;
}
.logo {
    display: flex;
    align-items: center;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
}
.main-nav {
    flex: 1;
    display: flex;
    justify-content: center;
}
.header-actions {
    min-width: 80px; /* reserve space for future actions */
}
</style>