<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <h1>Count: {{count}}</h1>
  <button @click="count++">increment</button>
  <ul class="navbar">
    <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li>
        <router-link :to="{ name: 'About'}">About</router-link>
    </li>
    <li>
        <router-link :to="{ name: 'Admin' }">Admin</router-link>
    </li>
    <li>
        <router-link to="/unexistent-page">Unexistent Page</router-link>
    </li>
  </ul>
</template>

<style scoped>
.navbar {
  list-style-type: none;
  display: flex;
  padding: 0;
}

.navbar li {
  margin-right: 10px;
}
</style>
