<template>
    <header class="apex-header">
        <div class="header-container">
            <!-- Left: Logo/Title -->
            <div class="logo">
                <span class="title">Apex Breach</span>
            </div>
            <!-- Center: Tabs -->
            <nav class="main-nav">
                <ul class="custom-tab-menu">
                    <li v-for="tab in tabs" :key="tab.label" :class="{ active: tab.to === route.path }"
                        @click="navigate(tab.to)">
                        <i :class="tab.icon" v-if="tab.icon"></i>
                        <span>{{ tab.label }}</span>
                    </li>
                </ul>
            </nav>
            <!-- Right: Login -->
            <div class="header-actions">
                <!-- <button class="login-btn" @click="navigate('/login')">
                    <i class="pi pi-user"></i> Login
                </button> -->
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const tabs = ref([
    { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
    { label: 'Contact', icon: 'pi pi-fw pi-envelope', to: '/contact' }
])

function navigate(path) {
    if (path !== route.path) {
        router.push(path)
    }
}
</script>

<style scoped>
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    flex: 1;
}

.title {
    font-size: 1.5rem;
    font-weight: bold;
}

.main-nav {
    flex: 2;
    display: flex;
    justify-content: center;
}

.header-actions {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.login-btn {
    background: var(--primary-color, #2196f3);
    color: #fff;
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.2s;
}

.login-btn:hover {
    background: var(--primary-color-hover, #1769aa);
}

.custom-tab-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background: var(--surface-0);
}

.custom-tab-menu li {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--text-color, inherit);
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px 4px 0 0;
    transition: background 0.2s, color 0.2s;
    position: relative;
    min-width: 100px;
    justify-content: center;
}

.custom-tab-menu li.active {
    font-weight: bold;
    color: var(--primary-color, #2196f3);
    background: transparent;
}

.custom-tab-menu li:hover {
    background: var(--surface-hover, #f4f4f5);
}

.custom-tab-menu li span {
    border-bottom: 0 solid transparent;
    transition: border-bottom 0.2s;
    padding-bottom: 2px;
}

.custom-tab-menu li:hover span {
    border-bottom: 2px solid var(--primary-color, #2196f3);
}

.custom-tab-menu i {
    margin-right: 0.5rem;
}
</style>