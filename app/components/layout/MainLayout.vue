<template>
  <div class="main-layout">
    <Header />
    <main class="main-layout-main">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
</script>


