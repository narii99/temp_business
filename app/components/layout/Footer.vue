<template>
  <footer class="footer">
    <div class="container footer-inner">
      <FooterInfo :info="info" />

      <ul class="footer-link-list" aria-label="바로가기">
        <li v-for="item in links" :key="item.key" class="footer-link-list-item">
          <a class="footer-link" :href="item.href">{{ item.label }}</a>
        </li>
      </ul>

      <div class="footer-meta">
        <div class="footer-social">
          <a
            v-for="item in socialLinks"
            :key="item.key"
            class="footer-social-link"
            :href="item.href"
            :aria-label="item.label"
          >
            <Icon :name="item.icon" />
          </a>
        </div>
        <div class="footer-copy">© {{ year }} LOGO. All rights reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterInfo from "~/components/layout/FooterInfo.vue";
import { footerInfoData, footerLinks, footerSocialLinks } from "~/data/footer";

const year = new Date().getFullYear();

const info = footerInfoData;
const links = footerLinks;
const socialLinks = footerSocialLinks;
</script>


