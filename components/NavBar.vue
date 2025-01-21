<!-- components/NavBar.vue -->
<template>
  <nav class="border-b p-4">
    <div class="container flex w-full justify-between items-center">
      <span class="font-bold self-start text-xl">Kinko</span>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-4">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          class="hover:text-gray-500 transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <UButton
        icon="i-heroicons-bars-3"
        variant="ghost"
        class="md:hidden"
        @click="isOpen = !isOpen"
      />

      <!-- Mobile Navigation Drawer -->
      <USlideover v-model="isOpen" side="right">
        <div class="p-4">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="block py-2 hover:text-gray-500"
            @click="isOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </USlideover>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Wallet', path: '/wallet' },
  { label: 'News', path: '/news' }
]
</script>