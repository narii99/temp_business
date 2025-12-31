<template>
  <section id="home" class="hero">
    <div class="container hero-inner">
      <div>
        <h2 class="hero-title">{{ t(data.titleKey) }}</h2>
        <p class="hero-desc">{{ t(data.descriptionKey) }}</p>
        <div class="hero-cta">
          <BaseButton
            v-for="action in data.actions"
            :key="action.key"
            :href="action.href"
            :variant="action.variant"
          >
            {{ t(action.labelKey) }}
          </BaseButton>
        </div>

        <!-- <HeroStatList :items="data.stats" /> -->
      </div>
      <!-- <div class="card card--flat" style="min-height: 320px" aria-hidden="true" /> -->
    </div>
  </section>
</template>

<script setup>
import BaseButton from "~/components/base/BaseButton.vue";
// import HeroStatList from "~/components/base/HeroStatList.vue";
import { useI18n } from "~/composables/useI18n";
import { heroSectionData } from "~/data/sections/hero";

const data = heroSectionData;
const { t } = useI18n();
</script>


