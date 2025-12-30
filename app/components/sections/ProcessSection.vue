<template>
  <section id="process" class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-title">{{ t("process.title") }}</div>
        <div class="section-subtitle">{{ t("process.description") }}</div>
      </div>

      <div class="process-grid">
        <div class="step">
          <div class="step-head">
            <div class="step-icon"><Icon name="ph:clipboard-text" /></div>
            <div class="step-num">{{ t("process.step.1.title") }}</div>
          </div>
          <div class="step-desc">{{ t("process.step.1.desc") }}</div>
        </div>

        <div class="step">
          <div class="step-head">
            <div class="step-icon"><Icon name="ph:pen-nib" /></div>
            <div class="step-num">{{ t("process.step.2.title") }}</div>
          </div>
          <div class="step-desc">{{ t("process.step.2.desc") }}</div>
        </div>

        <div class="step">
          <div class="step-head">
            <div class="step-icon"><Icon name="ph:code" /></div>
            <div class="step-num">{{ t("process.step.3.title") }}</div>
          </div>
          <div class="step-desc">{{ t("process.step.3.desc") }}</div>
        </div>

        <div class="step">
          <div class="step-head">
            <div class="step-icon"><Icon name="ph:rocket-launch" /></div>
            <div class="step-num">{{ t("process.step.4.title") }}</div>
          </div>
          <div class="step-desc">{{ t("process.step.4.desc") }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "~/composables/useI18n";

const { t } = useI18n();
</script>


