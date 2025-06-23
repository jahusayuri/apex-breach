<template>
  <main class="main-content">
    <!-- Banner Carousel (with solid color placeholders) -->
    <section class="banner-carousel">
      <div class="carousel-wrapper">
        <div
          class="carousel-image"
          :style="{ background: carouselImages[currentImage].color }"
        >
          <div class="carousel-caption">
            <h2>{{ carouselImages[currentImage].title }}</h2>
            <p>{{ carouselImages[currentImage].desc }}</p>
          </div>
        </div>
        <button class="carousel-btn left" @click="prevImage">&#8592;</button>
        <button class="carousel-btn right" @click="nextImage">&#8594;</button>
        <div class="carousel-indicators">
          <span
            v-for="(img, idx) in carouselImages"
            :key="idx"
            :class="{ active: idx === currentImage }"
            @click="goToImage(idx)"
          ></span>
        </div>
      </div>
    </section>

    <!-- Services List -->
    <section class="services-section">
      <div class="container">
        <h2 class="services-title">Our Services</h2>
        <div class="services-list">
          <div v-for="service in services" :key="service.title" class="service-card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Carousel with solid color placeholders
const carouselImages = [
  {
    color: '#1976d2',
    title: 'Welcome to Apex Breach',
    desc: 'Your trusted partner in cybersecurity and digital defense.'
  },
  {
    color: '#388e3c',
    title: 'Expert Penetration Testing',
    desc: 'Identify and fix vulnerabilities before attackers do.'
  },
  {
    color: '#fbc02d',
    title: 'Rapid Incident Response',
    desc: 'We help you recover quickly and securely from breaches.'
  }
]

const currentImage = ref(0)
let intervalId = null

function nextImage() {
  currentImage.value = (currentImage.value + 1) % carouselImages.length
}
function prevImage() {
  currentImage.value = (currentImage.value - 1 + carouselImages.length) % carouselImages.length
}
function goToImage(idx) {
  currentImage.value = idx
}

onMounted(() => {
  intervalId = setInterval(nextImage, 5000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})

// Example services
const services = [
  {
    title: 'Penetration Testing',
    icon: 'pi pi-shield',
    desc: 'Comprehensive security assessments to identify and mitigate vulnerabilities in your systems.'
  },
  {
    title: 'Incident Response',
    icon: 'pi pi-bolt',
    desc: 'Rapid response and expert guidance to contain and remediate security incidents.'
  },
  {
    title: 'Security Consulting',
    icon: 'pi pi-users',
    desc: 'Tailored security strategies and compliance solutions for your business needs.'
  },
  {
    title: 'Vulnerability Management',
    icon: 'pi pi-exclamation-triangle',
    desc: 'Continuous monitoring and management of vulnerabilities to keep your assets secure.'
  }
]
</script>

<style scoped>
.main-content {
  background: var(--surface-0, #fff);
  min-height: 100vh;
}

/* Carousel Styles */
.banner-carousel {
  width: 100%;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-image {
  width: 100%;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: background 0.5s;
}
.carousel-caption {
  color: #fff;
  text-align: center;
  padding: 2rem;
}
.carousel-caption h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.carousel-caption p {
  font-size: 1.2rem;
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  color: #fff;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  transition: background 0.2s;
}
.carousel-btn.left { left: 16px; }
.carousel-btn.right { right: 16px; }
.carousel-btn:hover { background: rgba(0,0,0,0.7); }
.carousel-indicators {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
.carousel-indicators span {
  display: block;
  width: 12px;
  height: 12px;
  background: #fff;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.2s;
}
.carousel-indicators span.active {
  opacity: 1;
  background: var(--primary-color, #2196f3);
}

/* Services Styles */
.services-section {
  padding: 3rem 0 4rem 0;
  background: var(--surface-1, #f4f4f5);
}
.services-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
}
.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.service-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 2rem 1.5rem;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
}
.service-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.service-icon {
  font-size: 2.5rem;
  color: var(--primary-color, #2196f3);
  margin-bottom: 1rem;
}
.service-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
}
.service-content p {
  font-size: 1rem;
  color: #444;
  text-align: center;
}
</style>