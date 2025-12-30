<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ProcessSection />
    <PortfolioSection />
    <section id="contact" class="section">
      <div class="container">
        <div class="card" style="padding: 22px">
          <div class="section-header" style="margin-bottom: 10px">
            <div class="section-title">{{ t("contact.title") }}</div>
            <div class="section-subtitle">{{ t("contact.description") }}</div>
          </div>
          <BaseButton href="mailto:hello@example.com" variant="primary">{{ t("contact.action.email") }}</BaseButton>
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
import PortfolioSection from "~/components/sections/PortfolioSection.vue";
import { useI18n } from "~/composables/useI18n";
import { computed, useHead } from "#imports";

const { t } = useI18n();

useHead({
  title: computed(() => t("page.home.title")),
  meta: [{ name: "description", content: computed(() => t("page.home.description")) }],
});
</script>


