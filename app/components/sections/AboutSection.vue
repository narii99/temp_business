<template>
  <section id="about" class="section">
    <div class="container">
      <div class="card about">
        <div class="about-media" aria-hidden="true">
          <ul class="social-list" aria-label="소셜 링크">
            <li v-for="item in data.socialLinks" :key="item.key" class="social-item">
              <a :href="item.href" :aria-label="item.ariaLabel" :target="item.target" :rel="item.rel">
                <Icon :name="item.icon" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div class="section-header" style="margin-bottom: 12px">
            <div class="section-title">{{ t(data.titleKey) }}</div>
            <div class="section-subtitle">{{ t(data.descriptionKey) }}</div>
          </div>

          <p class="section-subtitle" style="max-width: 56ch">
            {{ t(data.bodyKey) }}
          </p>

          <div class="hero-cta" style="margin-top: 14px">
            <BaseButton
              v-for="action in data.actions"
              :key="action.key"
              :href="action.href"
              :variant="action.variant"
            >
              {{ t(action.labelKey) }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from "~/components/base/BaseButton.vue";
import { useI18n } from "~/composables/useI18n";
import { aboutSectionData } from "~/data/sections/about";

const data = aboutSectionData;
const { t } = useI18n();
</script>


