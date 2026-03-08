<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
</template>
<style>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

:root {
  --var-blue: #16b0ec;
}
</style>
