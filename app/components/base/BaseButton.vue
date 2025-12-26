<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
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

const tag = computed(() => (props.to ? resolveComponent("NuxtLink") : props.href ? "a" : "button"));

const variantClass = computed(() => {
  if (props.variant === "primary") return "button--primary";
  if (props.variant === "soft") return "button--soft";
  return "button--ghost";
});
</script>


