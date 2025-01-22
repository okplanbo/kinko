<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
      color="gray"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <UButton class="w-8 h-8" icon="" color="gray" />
    </template>
  </ClientOnly>
</template>
