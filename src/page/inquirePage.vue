<template>
  <main class="contact-main">
    <section class="contact-section">
      <div :class="['contact-card', { dark: isContact }]">
        <div class="toggle-row">
          <span :class="{ active: !isContact }">Upload File</span>
          <label class="switch">
            <input type="checkbox" v-model="isContact" />
            <span class="slider"></span>
          </label>
          <span :class="{ active: isContact }">Contact Admin</span>
        </div>
        <div class="contact-content">
          <template v-if="!isContact">
            <h2>Upload File</h2>
            <form @submit.prevent="submitUpload">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="file" required />
              <button type="submit">Upload</button>
            </form>
          </template>
          <template v-else>
            <h2>Contact Admin</h2>
            <form @submit.prevent="submitContact">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </template>
        </div>
      </div>
    </section>

    <!-- Lorem Ipsum Cards -->
    <section class="lorem-section">
      <div class="lorem-cards">
        <div class="lorem-card" v-for="n in 3" :key="n">
          <h3>Lorem Ipsum {{ n }}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const isContact = ref(false)

function submitContact() {
  alert('Message sent!')
}
function submitUpload() {
  alert('File uploaded!')
}
</script>

<style scoped>
.contact-main {
  background: var(--surface-0, #fff);
  min-height: 100vh;
  padding: 2rem 0 4rem 0;
}
.contact-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 3rem;
}
.contact-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 420px;
  transition: background 0.3s, color 0.3s;
  color: #222;
}
.contact-card.dark {
  background: #23272f;
  color: #f4f4f4;
}
.toggle-row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  font-weight: 600;
}
.toggle-row span {
  opacity: 0.6;
  transition: opacity 0.2s;
}
.toggle-row span.active {
  opacity: 1;
}
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 26px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 26px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px; width: 20px;
  left: 3px; bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #1976d2;
}
input:checked + .slider:before {
  transform: translateX(22px);
}
.contact-content h2 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.contact-content form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.contact-content input[type="text"],
.contact-content input[type="email"],
.contact-content textarea,
.contact-content input[type="file"] {
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: inherit;
  color: inherit;
}
.contact-content input[type="file"] {
  background: #f4f4f4;
  color: #222;
}
.contact-card.dark input,
.contact-card.dark textarea,
.contact-card.dark input[type="file"] {
  background: #23272f;
  color: #f4f4f4;
  border: 1px solid #444;
}
.contact-content button {
  background: var(--primary-color, #1976d2);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.contact-content button:hover {
  background: #1251a3;
}

/* Lorem Ipsum Cards */
.lorem-section {
  display: flex;
  justify-content: center;
}
.lorem-cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.lorem-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 2rem 1.5rem;
  width: 320px;
  margin-top: 1rem;
}
.lorem-card h3 {
  margin-bottom: 1rem;
}
</style>