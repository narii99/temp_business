/**
 * 가벼운 i18n 메시지 딕셔너리(헤더 우선)
 * - todo : 섹션/푸터까지 키를 확장 필요
 * - 키 네이밍 규칙: "header.*", "about.*"
 *
 * messages["header.nav.home"].ko
 */

export const messages = {
  // 헤더
  "header.brand.aria": {
    ko: "홈으로",
    en: "Go to home",
    ja: "ホームへ",
    zh: "返回首页",
  },
  "header.nav.home": { ko: "홈", en: "Home", ja: "ホーム", zh: "主页" },
  "header.nav.about": { ko: "소개", en: "About", ja: "紹介", zh: "关于" },
  "header.nav.process": { ko: "프로세스", en: "Process", ja: "プロセス", zh: "流程" },
  "header.nav.portfolio": { ko: "포트폴리오", en: "Portfolio", ja: "ポートフォリオ", zh: "作品集" },
  "header.nav.blog": { ko: "블로그", en: "Blog", ja: "ブログ", zh: "博客" },
  "header.nav.services": { ko: "서비스", en: "Services", ja: "サービス", zh: "服务" },
  "header.action.contact": { ko: "문의", en: "Contact", ja: "お問い合わせ", zh: "联系" },
  "header.lang.aria": { ko: "언어 변경", en: "Change language", ja: "言語を変更", zh: "切换语言" },
  // 헤더 언어 버튼 표기(한/영/일/중) 해당 언어로 표기
  "header.lang.ko": { ko: "한", en: "KO", ja: "韓", zh: "韩" },
  "header.lang.en": { ko: "영", en: "EN", ja: "英", zh: "英" },
  "header.lang.ja": { ko: "일", en: "JA", ja: "日", zh: "日" },
  "header.lang.zh": { ko: "중", en: "ZH", ja: "中", zh: "中" },

  //hero 섹션
  "hero.title": { ko: "메인영역", en: "main", ja: "主要", zh: "主要的" },
  "hero.description": { ko: "설명, 소개하기", en: "description", ja: "説明、紹介", zh: "描述、介绍" },
  "hero.action.primary": { ko: "연락하기", en: "Contact", ja: "接触", zh: "接触" },
  "hero.action.secondary": { ko: "소개", en: "about", ja: "について", zh: "关于" },
  "hero.stat.exp.value": { ko: "강조영역", en: "Highlight", ja: "強調", zh: "重点" },
  "hero.stat.exp.label": { ko: "사용자경험", en: "Experience", ja: "経験", zh: "经验" },
  "hero.stat.project.value": { ko: "강조영역", en: "Highlight", ja: "強調", zh: "重点" },
  "hero.stat.project.label": { ko: "프로젝트", en: "Project Completed", ja: "プロジェクト", zh: "项目" },
  "hero.stat.client.value": { ko: "강조영역", en: "Highlight", ja: "強調", zh: "重点" },
  "hero.stat.client.label": { ko: "고객만족", en: "Happy Client", ja: "顧客満足", zh: "客户满意度" },

  // About 섹션
  "about.title": { ko: "우리의 비즈니스", en: "Our Business", ja: "私たちのビジネス", zh: "我们的业务" },
  "about.description": { ko: "설명", en: "description", ja: "説明", zh: "描述" },
  "about.body": {
    ko: "텍스트/이미지/버튼만 바꿔도 랜딩이 유지되도록, 토큰과 컴포넌트 조립으로 구성했습니다.",
    en: "Built with token-first styles and component composition so you can customize copy/media quickly.",
    ja: "トークン優先のスタイルとコンポーネント合成で、コピー/画像だけ差し替えて素早くカスタムできます。",
    zh: "基于令牌优先样式与组件组合，只需替换文案/图片即可快速定制。",
  },
  "about.action.project": { ko: "내 프로젝트", en: "My Project", ja: "プロジェクト", zh: "我的项目" },
  "about.action.cv": { ko: "회사소개서", en: "Download CV", ja: "CV ダウンロード", zh: "下载简历" },
};


