<template>
  <header class="header">
    <div class="container header-inner">
      <NuxtLink :to="brand.to" class="brand" :aria-label="t(brand.ariaLabelKey)">
        <span class="brand-mark">{{ brand.mark }}</span>
        <span>{{ brand.text }}</span>
      </NuxtLink>

      <nav class="nav" aria-label="주요 메뉴">
        <a v-for="item in nav" :key="item.key" class="nav-link" :href="item.href">
          {{ t(item.labelKey) }}
        </a>
      </nav>

      <div class="header-actions">
        <BaseButton :href="actions.contact.href" :variant="actions.contact.variant">
          {{ t(actions.contact.labelKey) }}
        </BaseButton>
        <button class="icon-button" type="button" :aria-label="themeLabel" @click="cycle">
          <Icon :name="themeIcon" />
        </button>
        <button class="lang-button" type="button" :aria-label="t('header.lang.aria')" @click="cycleLocale">
          {{ t(`header.lang.${locale}`) }}
        </button>
        
      </div>
    </div>
  </header>
</template>

<script setup>
import BaseButton from "~/components/base/BaseButton.vue";
import { useTheme } from "~/composables/useTheme";
import { useI18n } from "~/composables/useI18n";
import { headerActions, headerBrand, headerNav } from "~/data/header";  //내비게이션 데이터

const brand = headerBrand;
const nav = headerNav;
const actions = headerActions;

const { mode, cycle } = useTheme();
const { locale, cycleLocale, t } = useI18n();

const themeIcon = computed(() => {
  if (mode.value === "light") return "ph:sun";
  return "ph:moon";
});

const themeLabel = computed(() => {
  if (mode.value === "light") return "테마: 라이트 (클릭하면 다음 테마로)";
  return "테마: 다크 (클릭하면 다음 테마로)";
});
</script>



