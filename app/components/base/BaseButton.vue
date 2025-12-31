<template>
  <component
    :is="tag"
    v-bind="boundProps"
    class="button"
    :class="variantClass"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  to: { type: String, default: undefined },
  href: { type: String, default: undefined },
  type: { type: String, default: "button" },
  variant: { type: String, default: "ghost" }, // primary | ghost | soft
});

const isNuxtLink = computed(() => Boolean(props.to));
const isAnchor = computed(() => !props.to && Boolean(props.href));

// NuxtLink는 전역 컴포넌트라 문자열로 지정해도 정상 동작합니다.
const tag = computed(() => (isNuxtLink.value ? "NuxtLink" : isAnchor.value ? "a" : "button"));

// 렌더링 태그에 맞는 속성만 바인딩(to/href/type 불필요 속성 제거)
const boundProps = computed(() => {
  if (isNuxtLink.value) return { to: props.to };
  if (isAnchor.value) return { href: props.href };
  return { type: props.type };
});

const variantClass = computed(() => {
  if (props.variant === "primary") return "button--primary";
  if (props.variant === "soft") return "button--soft";
  return "button--ghost";
});
</script>


