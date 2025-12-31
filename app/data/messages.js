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
  "hero.stat.exp.value": { ko: "2,000,000건", en: "2,000,000", ja: "2,000,000", zh: "2,000,000" },
  "hero.stat.exp.label": { ko: "판매", en: "sales", ja: "経験", zh: "经验" },
  "hero.stat.project.value": { ko: "30년 노하우", en: "30years of", ja: "30年", zh: "30年" },
  "hero.stat.project.label": { ko: "경험", en: "Completed", ja: "プロジェクト", zh: "项目" },
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

  // Process 섹션
  "process.title": { ko: "프로세스", en: "Work Process", ja: "プロセス", zh: "流程" },
  "process.description": { ko: "진행 방식", en: "How we work", ja: "進め方", zh: "工作方式" },
  "process.step.1.title": { ko: "1. 상담", en: "1. Consultation", ja: "1. 相談", zh: "1. 咨询" },
  "process.step.1.desc": {
    ko: "목표/기간/범위를 정리하고 템플릿 커스텀 범위를 확정합니다.",
    en: "We align on goals, timeline, and scope, then confirm the customization range.",
    ja: "目的/期間/範囲を整理し、カスタム範囲を確定します。",
    zh: "梳理目标/周期/范围，并确认定制范围。",
  },
  "process.step.2.title": { ko: "2. 설계", en: "2. Planning", ja: "2. 設計", zh: "2. 规划" },
  "process.step.2.desc": {
    ko: "섹션/카피/비주얼을 확정하고 토큰 기반 스타일을 적용합니다.",
    en: "We finalize sections, copy, and visuals, then apply token-based styling.",
    ja: "セクション/コピー/ビジュアルを確定し、トークンベースのスタイルを適用します。",
    zh: "确定板块/文案/视觉，并应用基于令牌的样式。",
  },
  "process.step.3.title": { ko: "3. 구현", en: "3. Build", ja: "3. 実装", zh: "3. 开发" },
  "process.step.3.desc": {
    ko: "컴포넌트 조립으로 빠르게 제작하고 반응형을 마감합니다.",
    en: "We build quickly with components and finish responsive behavior.",
    ja: "コンポーネントを組み立てて素早く制作し、レスポンシブを仕上げます。",
    zh: "通过组件组合快速制作，并完成响应式适配。",
  },
  "process.step.4.title": { ko: "4. 배포", en: "4. Launch", ja: "4. 公開", zh: "4. 发布" },
  "process.step.4.desc": {
    ko: "SEO/성능을 점검하고 배포 및 운영 가이드를 제공합니다.",
    en: "We check SEO/performance and provide deployment & 운영 guidance.",
    ja: "SEO/性能を確認し、公開と運用ガイドを提供します。",
    zh: "检查 SEO/性能，并提供上线与运营指南。",
  },

  // Contact 섹션 / 페이지 메타
  "contact.title": { ko: "문의하기", en: "Contact", ja: "お問い合わせ", zh: "联系" },
  "contact.description": {
    ko: "원하시는 섹션/문구/컬러 토큰만 주시면 빠르게 커스텀해드려요.",
    en: "Share the sections/copy/color tokens you want — we’ll customize it quickly.",
    ja: "ご希望のセクション/文言/カラートークンを教えていただければ、素早くカスタムします。",
    zh: "只要告诉我们需要的板块/文案/色彩令牌，我们就能快速定制。",
  },
  "contact.action.email": { ko: "메일 보내기", en: "Send email", ja: "メールを送る", zh: "发送邮件" },
  "page.home.title": { ko: "홈", en: "Home", ja: "ホーム", zh: "主页" },
  "page.home.description": {
    ko: "토큰/테마 기반으로 빠르게 커스텀 가능한 Nuxt 홈 템플릿",
    en: "A Nuxt home template designed for fast customization with tokens/themes",
    ja: "トークン/テーマ基盤で素早くカスタムできる Nuxt ホームテンプレート",
    zh: "基于令牌/主题，可快速定制的 Nuxt 首页模板",
  },

  // Portfolio 섹션
  "portfolio.title": { ko: "포트폴리오", en: "Portfolio", ja: "ポートフォリオ", zh: "作品集" },
  "portfolio.description": {
    ko: "이미지/타이틀/설명 카드로 주요 작업을 정리했습니다.",
    en: "A curated list of work showcased with image, title, and description cards.",
    ja: "画像/タイトル/説明カードで主要な実績をまとめました。",
    zh: "用图片/标题/说明卡片整理展示主要作品。",
  },
  "portfolio.more": { ko: "더보기", en: "Show more", ja: "もっと見る", zh: "查看更多" },
  "portfolio.less": { ko: "접기", en: "Show less", ja: "折りたたむ", zh: "收起" },

  "portfolio.item.p1.alt": { ko: "랜딩 페이지", en: "Landing page", ja: "ランディングページ", zh: "落地页" },
  "portfolio.item.p1.title": { ko: "랜딩 페이지", en: "Landing page", ja: "ランディングページ", zh: "落地页" },
  "portfolio.item.p1.desc": { ko: "전환 중심의 섹션 구성", en: "Conversion-focused sections", ja: "コンバージョン重視の構成", zh: "以转化为目标的结构" },

  "portfolio.item.p2.alt": { ko: "기업 소개", en: "Company profile", ja: "会社紹介", zh: "公司介绍" },
  "portfolio.item.p2.title": { ko: "기업 소개", en: "Company profile", ja: "会社紹介", zh: "公司介绍" },
  "portfolio.item.p2.desc": { ko: "브랜드 톤 앤 매너 정리", en: "Consistent brand tone", ja: "ブランドトーン統一", zh: "统一品牌调性" },

  "portfolio.item.p3.alt": { ko: "서비스 소개", en: "Service overview", ja: "サービス紹介", zh: "服务介绍" },
  "portfolio.item.p3.title": { ko: "서비스 소개", en: "Service overview", ja: "サービス紹介", zh: "服务介绍" },
  "portfolio.item.p3.desc": { ko: "핵심 기능을 한눈에", en: "Key features at a glance", ja: "機能を一目で", zh: "核心功能一目了然" },

  "portfolio.item.p4.alt": { ko: "상품/가격", en: "Pricing", ja: "価格", zh: "价格" },
  "portfolio.item.p4.title": { ko: "상품/가격", en: "Pricing", ja: "価格", zh: "价格" },
  "portfolio.item.p4.desc": { ko: "플랜 비교 카드", en: "Plan comparison cards", ja: "プラン比較カード", zh: "方案对比卡片" },

  "portfolio.item.p5.alt": { ko: "문의/리드", en: "Lead capture", ja: "リード獲得", zh: "线索收集" },
  "portfolio.item.p5.title": { ko: "문의/리드", en: "Lead capture", ja: "リード獲得", zh: "线索收集" },
  "portfolio.item.p5.desc": { ko: "CTA 최적화", en: "Optimized CTA", ja: "CTA最適化", zh: "优化 CTA" },

  "portfolio.item.p6.alt": { ko: "블로그 카드", en: "Blog cards", ja: "ブログカード", zh: "博客卡片" },
  "portfolio.item.p6.title": { ko: "블로그 카드", en: "Blog cards", ja: "ブログカード", zh: "博客卡片" },
  "portfolio.item.p6.desc": { ko: "콘텐츠 리스트 UI", en: "Content list UI", ja: "コンテンツ一覧UI", zh: "内容列表 UI" },

  "portfolio.item.p7.alt": { ko: "케이스 스터디", en: "Case study", ja: "事例", zh: "案例" },
  "portfolio.item.p7.title": { ko: "케이스 스터디", en: "Case study", ja: "事例", zh: "案例" },
  "portfolio.item.p7.desc": { ko: "문제-해결-성과", en: "Problem → Solution → Result", ja: "課題→解決→成果", zh: "问题→解决→成果" },

  "portfolio.item.p8.alt": { ko: "디자인 시스템", en: "Design system", ja: "デザインシステム", zh: "设计系统" },
  "portfolio.item.p8.title": { ko: "디자인 시스템", en: "Design system", ja: "デザインシステム", zh: "设计系统" },
  "portfolio.item.p8.desc": { ko: "토큰 기반 컴포넌트", en: "Token-based components", ja: "トークンベース", zh: "基于令牌的组件" },

  "portfolio.item.p9.alt": { ko: "리브랜딩", en: "Rebranding", ja: "リブランディング", zh: "品牌重塑" },
  "portfolio.item.p9.title": { ko: "리브랜딩", en: "Rebranding", ja: "リブランディング", zh: "品牌重塑" },
  "portfolio.item.p9.desc": { ko: "컬러/타이포 리뉴얼", en: "Color & typography refresh", ja: "カラー/タイポ刷新", zh: "配色与字体焕新" },

  "portfolio.item.p10.alt": { ko: "대시보드", en: "Dashboard", ja: "ダッシュボード", zh: "仪表盘" },
  "portfolio.item.p10.title": { ko: "대시보드", en: "Dashboard", ja: "ダッシュボード", zh: "仪表盘" },
  "portfolio.item.p10.desc": { ko: "지표 중심 레이아웃", en: "Metrics-driven layout", ja: "指標中心", zh: "指标驱动布局" },

  "portfolio.item.p11.alt": { ko: "이커머스", en: "E-commerce", ja: "EC", zh: "电商" },
  "portfolio.item.p11.title": { ko: "이커머스", en: "E-commerce", ja: "EC", zh: "电商" },
  "portfolio.item.p11.desc": { ko: "상품 카드/필터", en: "Product cards & filters", ja: "商品カード/フィルタ", zh: "商品卡片与筛选" },

  "portfolio.item.p12.alt": { ko: "FAQ", en: "FAQ", ja: "FAQ", zh: "常见问题" },
  "portfolio.item.p12.title": { ko: "FAQ", en: "FAQ", ja: "FAQ", zh: "常见问题" },
  "portfolio.item.p12.desc": { ko: "반복 질문 정리", en: "Common questions answered", ja: "よくある質問", zh: "解答常见问题" },
};


