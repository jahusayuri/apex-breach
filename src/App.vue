<template>
  <br/>
  Test Vue 3 with Vite
  <h1>Welcome to Your Vue.js App</h1>
  <Button label="Click Me" class="p-button-raised p-button-success" />
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
