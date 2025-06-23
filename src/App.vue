<template>
  <ApexHeader />
  <router-view />
</template>

<script>
import ApexHeader from './components/custom/ApexHeader.vue';

export default {
  name: 'App',
  components: {
    ApexHeader,
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
}

</style>
