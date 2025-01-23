<script setup>
import { protectedItems, navItems } from "@/constants";
const isMenuOpen = ref(false);
const route = useRoute();
</script>

<template>
  <nav class="border-b p-4">
    <div class="container flex max-w-full justify-between items-center">
      <span class="font-bold self-start text-xl">Kinko</span>

      <div class="flex items-center">
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-4">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'transition-colors',
              route.path === item.path
                ? 'text-gray-400 pointer-events-none'
                : 'hover:text-gray-500',
            ]"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <LoginButton class="ml-4" />
        <!-- <LoginModal v-model="isLoginModalOpen"/> -->

        <div class="self-start mx-4"><ThemeSwitcher /></div>

        <!-- Mobile Menu Button -->
        <UButton
          icon="i-heroicons-bars-3"
          color="gray"
          class="md:hidden"
          @click="isMenuOpen = !isMenuOpen"
        />
      </div>

      <!-- Mobile Navigation Drawer -->
      <USlideover v-model="isMenuOpen" side="right">
        <div class="p-4 text-lg">
          <!-- Menu items -->
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'flex py-2 items-center flex-grow',
              route.path === item.path
                ? 'text-primary-600'
                : 'hover:text-gray-500',
            ]"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
            <UIcon
              v-if="route.path === item.path"
              name="i-heroicons-arrow-left"
              class="text-primary-600 ml-2"
            />
          </NuxtLink>

          <!-- Close Menu Button -->
          <UButton
            icon="i-heroicons-x-mark"
            class="absolute top-5 right-5"
            color="gray"
            @click="isMenuOpen = !isMenuOpen"
          />
        </div>
      </USlideover>
    </div>
  </nav>
</template>
