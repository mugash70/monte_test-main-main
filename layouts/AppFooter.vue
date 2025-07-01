<template>
  <footer class="app-footer">
    <div class="footer-wrapper">
      <div class="footer-top">
        <div class="footer-links">
          <div class="footer-column" v-for="(section, index) in footerLinks" :key="index">
            <h3 class="footer-title" :class="{ 'vertical-text': isMongolian }">{{ t(section.title) }}</h3>
            <ul>
              <li v-for="(link, idx) in section.links" :key="idx">
                <router-link :to="localePath(link.href)" class="footer-link" :class="{ 'vertical-text': isMongolian }">{{ t(link.text) }}</router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-qr">
          <img src="/footerCode.jpg" alt="WeChat QR" />
          <p :class="{ 'vertical-text': isMongolian }">{{ t('footer.qrText') }}</p>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          <p :class="{ 'vertical-text': isMongolian }">{{ t('footer.copyright') }}</p>
        </div>

        <div class="footer-policies">
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer" :class="{ 'vertical-text': isMongolian }">{{ t('footer.icp') }}</a>
          <div class="policy-group">
            <span class="gov-icon"><img src="/footerGov.png" :alt="t('footer.publicSecurityAlt')" /></span>
            <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank" rel="noopener noreferrer" :class="{ 'vertical-text': isMongolian }">{{ t('footer.publicSecurity') }}</a>
          </div>
          <span class="divider">|</span>
          <a href="https://www.mengtaigroup.com/wzdt.jhtml" target="_blank" rel="noopener noreferrer" :class="{ 'vertical-text': isMongolian }">{{ t('footer.sitemap') }}</a>
          <span class="divider">|</span>
          <a href="/admin/translations" :class="{ 'vertical-text': isMongolian }" style="color: #e74c3c; font-weight: 600;">{{ t('footer.admin') }}</a>
        </div>

        <div class="footer-social">
          <a href="javascript:void(0);" aria-label="WeChat"><i class="fab fa-weixin"></i></a>
          <a href="javascript:void(0);" aria-label="Weibo"><i class="fab fa-weibo"></i></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
const localePath = useLocalePath();
const isMongolian = computed(() => locale.value === 'mn');

const footerLinks = [
  {
    title: "footer.section.title1",
    links: [
      { text: "footer.link1.text1", href: "/company-profile" },
      { text: "footer.link1.text2", href: "/chairman-speech" },
      { text: "footer.link1.text3", href: "/corporate-culture" },
      { text: "footer.link1.text4", href: "/development-history" },
      { text: "footer.link1.text5", href: "/party-building" },
      { text: "footer.link1.text6", href: "/join-us" }
    ]
  },
  {
    title: "footer.section.title2",
    links: [
      { text: "footer.link2.text1", href: "/aluminium-industry-sector" },
      { text: "footer.link2.text2", href: "/coal-industry" },
      { text: "footer.link2.text3", href: "/thermal-power-plate" },
      { text: "footer.link2.text4", href: "/modern-agriculture" },
      { text: "footer.link2.text5", href: "/modern-trade-logistics" }
    ]
  },
  {
    title: "footer.section.title3",
    links: [
      { text: "footer.link3.text1", href: "/technology-monte" },
      { text: "footer.link3.text2", href: "/green-monte" },
      { text: "footer.link3.text3", href: "/responsibility-monte" }
    ]
  },
  {
    title: "footer.section.title4",
    links: [
      { text: "footer.link4.text1", href: "/news" },
      { text: "footer.link4.text2", href: "/media-materials" }
    ]
  },
  {
    title: "footer.section.title5",
    links: [
      { text: "footer.link5.text1", href: "/products" },
      { text: "footer.link5.text2", href: "/collaborative-projects" },
      { text: "footer.link5.text3", href: "/https://fkpt.mengtaigroup.com/mtDev/jingjia/user/login.html" },
      { text: "footer.link5.text4", href: "/offline-tender-announcement" },
      { text: "footer.link5.text5", href: "/https://mall-front.caigou.mengtaigroup.com/inquiry/index?initQueryType=BID_INFO" }
    ]
  }
];
</script>

<style scoped>
.app-footer {
  background: #ececec;
  color: #2e2e2e;
  padding: 40px 0 20px;
  width: 100%;
  align-items: center;
  position: relative;
  left: 0;
}

.footer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-links {
  display: flex;
  flex: 1 1 700px;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
}

.footer-column {
  flex: 1 1 auto;
  min-width: 100px;
  max-width: 150px;
}

.footer-column h3 {
  font-size: 1rem;
  margin-bottom: 12px;
  color: #202020;
  font-weight: 600;
  transition: color 0.3s ease;
  font-family: "Mongolian Baiti", "Microsoft Yahei", arial, "\5b8b\4f53", sans-serif;
}

.footer-column h3:hover {
  color: #e74c3c;
  cursor: pointer;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 6px;
}

.footer-column a {
  color: #aaa;
  font-size: 0.9rem;
  text-decoration: none;
  display: block;
  margin-bottom: 6px;
  line-height: 1.4;
  transition: color 0.3s ease;
  padding: 2px 0;
  font-family: "Mongolian Baiti", "Microsoft Yahei", arial, "\5b8b\4f53", sans-serif;
}

.footer-column a:hover {
  color: #e74c3c;
}

.footer-qr {
  text-align: center;
  flex-shrink: 0;
}

.footer-qr img {
  width: 150px;
  height: 150px;
  background: #fff;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.footer-qr p {
  font-size: 0.8rem;
  margin-top: 8px;
  color: #666;
  font-family: "Mongolian Baiti", "Microsoft Yahei", arial, "\5b8b\4f53", sans-serif;
}

.footer-divider {
  height: 1px;
  background: rgba(58, 58, 58, 0.1);
  margin: 30px 0;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  font-size: 0.8rem;
}

.footer-copyright p {
  font-family: "Mongolian Baiti", "Microsoft Yahei", arial, "\5b8b\4f53", sans-serif;
}

.footer-policies {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.footer-policies a {
  color: #202020;
  text-decoration: none;
  transition: color 0.3s ease;
  white-space: nowrap;
  font-family: "Mongolian Baiti", "Microsoft Yahei", arial, "\5b8b\4f53", sans-serif;
}

.footer-policies a:hover {
  color: #e74c3c;
}

.policy-group {
  display: flex;
  align-items: center;
  gap: 5px;
}

.gov-icon img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.divider {
  color: #aaa;
  margin: 0 5px;
}

.footer-social {
  display: flex;
  gap: 15px;
}

.footer-social a {
  color: #383838;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.2s ease;
  padding: 5px;
}

.footer-social a:hover {
  color: #e74c3c;
  transform: translateY(-2px);
}

/* Vertical text for Mongolian */
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  max-height: 150px;
  overflow: hidden;
  word-break: break-word;
}

/* Adjust footer-column for vertical text */
.footer-column.vertical-layout {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

/* Adjust footer-links for vertical text */
.footer-links.vertical-layout {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
}

/* Adjust footer-top for vertical text */
.footer-top.vertical-layout {
  flex-direction: row;
  align-items: flex-start;
}

/* Tablet styles (3 columns) */
@media (max-width: 1024px) {
  .footer-wrapper {
    padding: 0 15px;
  }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    flex: 1 1 100%;
  }

  .footer-column {
    min-width: auto;
    max-width: none;
  }

  .footer-top {
    gap: 30px;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .app-footer {
    padding: 30px 0 20px;
  }

  .footer-wrapper {
    padding: 0 15px;
  }

  .footer-top {
    flex-direction: column;
    gap: 30px;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 20px;
    order: 2;
  }

  .footer-column {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    min-width: auto;
    max-width: none;
  }

  .footer-column h3 {
    font-size: 1.1rem;
    margin: 0 10px 0 0;
    border-bottom: none;
    padding-bottom: 0;
    display: inline-block;
  }

  .footer-column ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .footer-column li {
    margin-bottom: 0;
  }

  .footer-column a {
    font-size: 0.85rem;
    padding: 3px 8px;
    margin-bottom: 0;
  }

  .footer-qr {
    order: 1;
    align-self: center;
  }

  .footer-qr img {
    width: 120px;
    height: 120px;
  }

  /* Revert footer-bottom to original mobile styles */
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    text-align: center;
  }

  .footer-copyright {
    order: 3;
    text-align: center;
    width: 100%;
  }

  .footer-policies {
    order: 2;
    justify-content: center;
    width: 100%;
    gap: 8px;
    font-size: 0.75rem;
    flex-direction: column;
    gap: 10px;
  }

  .footer-social {
    order: 1;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }

  .footer-social a {
    font-size: 1.4rem;
    padding: 8px;
  }

  .divider {
    display: none;
  }

  .policy-group {
    justify-content: center;
  }

  /* Vertical text adjustments for mobile */
  .vertical-text {
    writing-mode: vertical-lr;
    text-orientation: sideways;
    max-height: 200px;
    max-width: 100px;
    overflow: hidden;
    word-break: break-word;
    white-space: nowrap;
  }

  .footer-column.vertical-layout {
    flex-direction: row;
    align-items: center;
  }

  .footer-links.vertical-layout {
    flex-direction: column;
  }

  .footer-top.vertical-layout {
    flex-direction: column;
  }
}

/* Small mobile styles */
@media (max-width: 480px) {
  .app-footer {
    padding: 25px 0 15px;
  }

  .footer-wrapper {
    padding: 0 10px;
  }

  .footer-top {
    gap: 25px;
  }

  .footer-links {
    gap: 15px;
  }

  .footer-column {
    gap: 8px;
  }

  .footer-column h3 {
    font-size: 1rem;
  }

  .footer-column a {
    font-size: 0.8rem;
    padding: 2px 6px;
  }

  .footer-qr img {
    width: 100px;
    height: 100px;
  }

  .footer-qr p {
    font-size: 0.7rem;
  }

  .footer-bottom {
    gap: 15px;
  }

  .footer-policies {
    font-size: 0.7rem;
    gap: 8px;
  }

  .footer-social a {
    font-size: 1.3rem;
    padding: 6px;
  }

  .footer-copyright p {
    font-size: 0.75rem;
    line-height: 1.4;
  }
}

/* Extra small mobile styles */
@media (max-width: 360px) {
  .footer-wrapper {
    padding: 0 8px;
  }

  .footer-qr img {
    width: 90px;
    height: 90px;
  }

  .footer-column h3 {
    font-size: 0.9rem;
  }

  .footer-column a {
    font-size: 0.75rem;
    padding: 2px 5px;
  }

  .footer-policies {
    font-size: 0.65rem;
  }

  .footer-social {
    gap: 15px;
  }

  .footer-social a {
    font-size: 1.2rem;
  }
}
</style>