<script setup>
const title = "Kinko - Your digital asset tracker";
const description =
  "This small but powerful app helps you keep track of your digital assets. Add coins, write down your ideas, get related news, and more.";
useHead({
  title: title,
  meta: [{ name: "description", content: description }],
});
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  // ogImage: "https://example.com/image.png",
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply mb-4 mt-2;
  }
}
</style>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
