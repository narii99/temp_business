<template>
  <section id="home" class="hero">
    <div class="container hero-inner">
      <div>
        <h1 class="hero-title">{{ t(data.titleKey) }}</h1>
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

        <ul class="stat-list" aria-label="강조 영역">
          <li v-for="item in data.stats" :key="item.key" class="stat-item">
            <div class="stat-key">{{ t(item.valueKey) }}</div>
            <div class="stat-label">{{ t(item.labelKey) }}</div>
          </li>
        </ul>
      </div>

      <div class="card card--flat" style="min-height: 320px" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup>
import BaseButton from "~/components/base/BaseButton.vue";
import { useI18n } from "~/composables/useI18n";
import { heroSectionData } from "~/data/sections/hero";

const data = heroSectionData;
const { t } = useI18n();
</script>


