<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ProcessSection />
    <section id="contact" class="section">
      <div class="container">
        <div class="card" style="padding: 22px">
          <div class="section-header" style="margin-bottom: 10px">
            <div class="section-title">Contact</div>
            <div class="section-subtitle">원하시는 섹션/문구/컬러 토큰만 주시면 빠르게 커스텀해드려요.</div>
          </div>
          <BaseButton href="mailto:hello@example.com" variant="primary">메일 보내기</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseButton from "~/components/base/BaseButton.vue";
import AboutSection from "~/components/sections/AboutSection.vue";
import HeroSection from "~/components/sections/HeroSection.vue";
import ProcessSection from "~/components/sections/ProcessSection.vue";

useHead({
  title: "홈",
  meta: [{ name: "description", content: "토큰/테마 기반으로 빠르게 커스텀 가능한 Nuxt 홈 템플릿" }],
});
</script>


