/**
 * 헤더에서 쓰는 데이터(사실상 JSON 형태)
 * - 빠른 커스텀을 위해 UI 컴포넌트와 분리
 * - 필요 시 다국어/테마/권한별 메뉴도 여기서 확장
 */

export const headerBrand = {
  mark: "SD",
  text: "LOGO",
  to: "/",
  ariaLabelKey: "header.brand.aria",
};

/**
 * same-page anchor라면 href에 "#section-id" 사용
 * 다른 섹션으로 가면
 */
export const headerNav = [
  { key: "home", labelKey: "header.nav.home", href: "#home" },
  { key: "about", labelKey: "header.nav.about", href: "#about" },
  { key: "process", labelKey: "header.nav.process", href: "#process" },
  { key: "portfolio", labelKey: "header.nav.portfolio", href: "#portfolio" },
  { key: "services", labelKey: "header.nav.services", href: "#services" },
];

export const headerActions = {
  contact: { labelKey: "header.action.contact", href: "#contact", variant: "primary" },
};


