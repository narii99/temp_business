# Temp Business Frontend

Nuxt 4 기반으로 구축된 프론트엔드 프로젝트입니다.  
페이지 단위 설계, 섹션 단위 UI 구성, 디자인 토큰 기반 SCSS 시스템으로
**확장 가능한 랜딩·비즈니스 웹 프로젝트 템플릿 구조**로 설계되었습니다.

---
## 📌 목표

- [ ] 페이지 구조 완성
- [ ] 컴포넌트 디자인 시스템 정착
- [ ] 배포 환경 구성
- [ ] 클라이언트 별 api 연결 및 디자인 커스텀 하여 배포

## install
- pnmp 기본 사용
- npm install -g pnpm
- pnpm install

## server
- pnpm dev

## build
- pnpm build

## build preview
- pnpm preview

## 🚀 Tech Stack

- Nuxt 4
- Vue 3
- pnpm
- Vue Router
- SCSS (Design System Architecture)
- ESLint
- @nuxt/image
- @nuxt/icon
- @nuxt/fonts
- @nuxt/scripts

---

## 📦 Project Structure
```
templete
│
├─ app.vue
├─ nuxt.config.js
│
├─ pages # 페이지 단위
│ ├─ index.vue # 메인 랜딩
│ └─ about.vue # 서브 페이지
│
├─ layouts # 페이지 컨테이너 역할 (디자인 레이아웃 X)
│ ├─ default.vue # 공통 레이아웃 (헤더/푸터)
│ └─ Landing.vue # 랜딩 전용 레이아웃
│
├─ components # 모든 재사용 컴포넌트
│ │
│ ├─ base # 버튼, 인풋, 섹션 베이스 요소
│ │ ├─ BaseButton.vue
│ │ ├─ BaseLink.vue
│ │ ├─ BaseInput.vue
│ │ └─ BaseSection.vue
│ │
│ ├─ layout # 구조/레이아웃 단위 UI
│ │ ├─ AppHeader.vue
│ │ ├─ AppFooter.vue
│ │ └─ AppHero.vue
│ │
│ ├─ sections # 페이지의 컨텐츠 섹션 단위 컴포넌트
│ │ ├─ SectionImage.vue
│ │ ├─ SectionFeatures.vue
│ │ ├─ SectionBlog.vue
│ │ ├─ SectionFAQ.vue
│ │ └─ SectionLogoGrid.vue
│ │
│ └─ common # 공통 UI (아이콘, 로고 등)
│ ├─ Logo.vue
│ ├─ Container.vue
│ └─ Icon.vue
│
├─ composables # 상태·로직 훅
│ ├─ useSections.js # 섹션 구성 제어
│ └─ useTheme.js # 테마/다크모드 제어
│
├─ stores # 데이터 관리 / API Store
│ └─ api.js
│
├─ config # 사이트 전역 설정
│ ├─ site.config.js
│ └─ sections
│ └─ defaultLanding.js
│
├─ assets # 디자인 리소스
│ │
│ ├─ styles
│ │ ├─ main.scss
│ │ ├─ _reset.scss
│ │ ├─ _variables.scss
│ │ ├─ _tokens.colors.scss
│ │ ├─ _tokens.typography.scss
│ │ ├─ _tokens.spacing.scss
│ │ ├─ _semantic.colors.scss
│ │ ├─ _mixins.scss
│ │ ├─ _typography.scss
│ │ ├─ _layout.scss
│ │ │
│ │ ├─ components
│ │ │ ├─ _header.scss
│ │ │ ├─ _footer.scss
│ │ │ ├─ _buttons.scss
│ │ │ ├─ _cards.scss
│ │ │ └─ _sections.scss
│ │ │
│ │ └─ themes
│ │ ├─ _default.scss
│ │ └─ _client-a.scss
│ │
│ └─ images
│ ├─ logo-default.svg
│ └─ dummy-hero.jpg
│
└─ public
└─ favicon.ico
```
