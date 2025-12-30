<template>
  <div class="footer-info">
    <div class="footer-info-brand">
      <div class="footer-info-logo" aria-hidden="true">{{ info.logoText }}</div>
      <div>
        <div class="footer-info-company">{{ info.companyName }}</div>
        <div class="footer-info-tagline">{{ info.tagline }}</div>
      </div>
    </div>

    <ul class="footer-info-list" aria-label="회사 정보">
      <li class="footer-info-item">
        <span class="footer-info-label">대표자</span>
        <span class="footer-info-value">{{ info.ceoName }}</span>
      </li>
      <li class="footer-info-item">
        <span class="footer-info-label">사업자등록번호</span>
        <span class="footer-info-value">{{ info.businessNumber }}</span>
      </li>
      <li class="footer-info-item">
        <span class="footer-info-label">주소</span>
        <span class="footer-info-value">{{ info.address }}</span>
      </li>
      <li class="footer-info-item">
        <span class="footer-info-label">연락처</span>
        <span class="footer-info-value">{{ info.phone }}</span>
      </li>
      <li class="footer-info-item">
        <span class="footer-info-label">개인정보담당자</span>
        <span class="footer-info-value">{{ info.privacyOfficer }}</span>
      </li>
      <li class="footer-info-item">
        <span class="footer-info-label">이메일</span>
        <span class="footer-info-value">
          <a class="footer-info-link" :href="`mailto:${info.email}`">{{ info.email }}</a>
        </span>
      </li>
      <li class="footer-info-item">
        <span class="footer-info-label">업무시간</span>
        <span class="footer-info-value">{{ info.businessHours }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { footerInfoData } from "~/data/footer";

const props = defineProps({
  info: {
    type: Object,
    default: () => footerInfoData,
  },
});

const info = computed(() => props.info ?? footerInfoData);
</script>


