<template>
  <div class="main-layout">
    <Header />
    <main class="main-layout-main">
      <slot />
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>


