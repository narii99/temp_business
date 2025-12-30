<template>
  <section id="portfolio" class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-title">{{ t(data.titleKey) }}</div>
        <div class="section-subtitle">{{ t(data.descriptionKey) }}</div>
      </div>

      <ul id="portfolio-card-list" class="portfolio-card-list" :aria-label="t(data.titleKey)">
        <li v-for="item in visibleItems" :key="item.key" class="portfolio-card-list-item">
          <article class="card portfolio-card">
            <div class="portfolio-card-media">
              <NuxtImg
                class="portfolio-card-image"
                :src="item.imageSrc"
                :alt="t(item.imageAltKey)"
                loading="lazy"
                width="960"
                height="640"
              />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title">{{ t(item.titleKey) }}</h3>
              <p class="portfolio-card-desc">{{ t(item.descriptionKey) }}</p>
            </div>
          </article>
        </li>
      </ul>

      <div v-if="hasMore" class="portfolio-more">
        <BaseButton
          type="button"
          variant="soft"
          :aria-expanded="expanded"
          aria-controls="portfolio-card-list"
          @click="toggle"
        >
          {{ expanded ? t(data.lessLabelKey) : t(data.moreLabelKey) }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "~/components/base/BaseButton.vue";
import { useI18n } from "~/composables/useI18n";
import { portfolioSectionData } from "~/data/sections/portfolio";

const data = portfolioSectionData;
const { t } = useI18n();

const COLLAPSED_COUNT = 8; // 4열 * 2줄
const expanded = ref(false);

const items = computed(() => data.items ?? []);
const hasMore = computed(() => items.value.length > COLLAPSED_COUNT);
const visibleItems = computed(() => (expanded.value ? items.value : items.value.slice(0, COLLAPSED_COUNT)));

const toggle = () => {
  expanded.value = !expanded.value;
};
</script>


