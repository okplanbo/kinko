<!-- components/ThemeSwitcher.vue -->
<template>
  <UButton
    :icon="colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'"
    color="gray"
    @click="toggleTheme"
  />
</template>

<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', colorMode.preference)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    colorMode.preference = savedTheme
  }
})
</script>