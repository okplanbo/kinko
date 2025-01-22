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
      <div class="w-8 h-8 rounded-md p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 bg-gray-50 dark:bg-gray-800" />
    </template>
  </ClientOnly>
</template>
