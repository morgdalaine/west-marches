<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/region">Region</RouterLink>
        <RouterLink to="/feature">Feature</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  /* width: 100%; */
  font-size: 12px;
  text-align: center;
  font-family: "Alegreya", serif;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: 700;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header {
  display: flex;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

nav {
  font-size: 1rem;

  padding: 1rem 0;
}
</style>
