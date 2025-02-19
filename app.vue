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

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html,
  body {
    @apply h-full;
  }
  body {
    @apply max-w-4xl mx-auto bg-white dark:bg-gray-900;
  }
  h1 {
    @apply mb-4 mt-2 text-xl;
  }
  h2 {
    @apply mb-4 mt-2 text-lg text-gray-900 dark:text-gray-100;
  }
  main {
    @apply flex-1;
  }
  section {
    @apply py-4 px-4 w-full mx-0 mt-0 mb-6 border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800;
    max-width: min(100%, 70ch);

    a {
      @apply text-primary-800 dark:text-primary-400 
          hover:text-primary-800 dark:hover:text-primary-300 
          transition-colors;
    }
  }
  p {
    @apply text-gray-700 dark:text-gray-300 leading-relaxed mb-4;
  }

  ul {
    @apply space-y-1.5 mb-6 ml-4;
  }

  li {
    @apply text-gray-700 dark:text-gray-300 list-disc ml-4;
  }

  pre {
    @apply p-4 mb-4 border-l-4 border-gray-200 dark:border-gray-700 
          bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 
          overflow-x-auto;
  }
}
</style>