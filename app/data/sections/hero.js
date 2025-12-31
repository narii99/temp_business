/**
 * hero 섹션 key 값 설정 후
 * messages.js 에서 데이터 작성
 */
export const heroSectionData = {
  titleKey: "hero.title",
  descriptionKey: "hero.description",
  actions: [    //버튼 갯수 만큼 작성
    { key: "primary", labelKey: "hero.action.primary", href: "#contact", variant: "primary" },
    { key: "secondary", labelKey: "hero.action.secondary", href: "#about", variant: "ghost" },
  ],
  //강조 통계 영역 3개 카드
  stats: [
    { key: "exp", labelKey: "hero.stat.exp.label", valueKey: "hero.stat.exp.value" },
    { key: "project", labelKey: "hero.stat.project.label", valueKey: "hero.stat.project.value" },
    { key: "client", labelKey: "hero.stat.client.label", valueKey: "hero.stat.client.value" },
  ],
};


