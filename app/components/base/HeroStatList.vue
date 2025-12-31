<template>
  <ul class="hero-stat-list" aria-label="강조 영역">
    <li v-for="item in items" :key="item.key" class="hero-stat-list-item">
      <div class="hero-stat-key">{{ t(item.valueKey) }}</div>
      <div class="hero-stat-label">{{ t(item.labelKey) }}</div>
    </li>
  </ul>
</template>

<script setup>
import { useI18n } from "~/composables/useI18n";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const { t } = useI18n();
</script>


