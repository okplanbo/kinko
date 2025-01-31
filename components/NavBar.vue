<script setup>
import { signOut } from "firebase/auth";
import { protectedItems, navItems } from "@/constants";

const route = useRoute();
const user = useCurrentUser();
const auth = useFirebaseAuth();

const isMenuOpen = ref();
const isLoginModalOpen = ref();

function logout() {
  signOut(auth);
}

const availableNavItems = ref(
  user.value ? [...navItems, ...protectedItems] : navItems
);

onMounted(() => {
  watch(user, (user, prevUser) => {
    if (prevUser && !user) {
      availableNavItems.value = [...navItems];

      if (protectedItems.map((item) => item.path).includes(route.path)) {
        navigateTo({ path: "/" });
      }
    }
    if (!prevUser && user) {
      isLoginModalOpen.value = false;
      availableNavItems.value = [...navItems, ...protectedItems];
    }
  });
});
</script>

<template>
  <nav class="top-0 w-full max-w-4xl my-0 mx-auto border-b p-4">
    <div class="container flex max-w-full justify-between items-center">
      <!-- App Name & Home Link -->
      <NuxtLink
        :to="'/'"
        class="font-bold self-start text-xl">
        Kinko
      </NuxtLink>

      <div class="flex items-center">

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-4">
          <NuxtLink
            v-for="item in availableNavItems.filter(
              (item) => item.path !== '/'
            )"
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

        <UButton
          v-if="!user"
          class="mx-4"
          icon="i-heroicons-user-circle"
          label="Login"
          color="gray"
          @click="isLoginModalOpen = true"
        />
        <UButton
          v-if="user"
          class="mx-4"
          icon="i-heroicons-arrow-left-start-on-rectangle"
          label="Logout"
          color="gray"
          @click="logout"
        />
        <LoginModal v-model="isLoginModalOpen" />

        <ThemeSwitcher class="self-start mx-4" />

        <!-- Mobile Menu Button -->
        <UButton
          icon="i-heroicons-bars-3"
          color="gray"
          class="md:hidden ml-4"
          @click="isMenuOpen = !isMenuOpen"
        />
      </div>

      <!-- Mobile Navigation Drawer -->
      <USlideover v-model="isMenuOpen" side="right">
        <div class="flex h-full">
          <div class="p-4 text-lg w-full">
            <!-- Menu items -->
            <NuxtLink
              v-for="item in availableNavItems"
              :key="item.path"
              :to="item.path"
              :class="[
                'flex py-2 items-center flex-grow',
                route.path === item.path
                  ? 'text-primary-800'
                  : 'hover:text-primary-600',
              ]"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
              <UIcon
                v-if="route.path === item.path"
                name="i-heroicons-arrow-left"
                class="text-primary-800 ml-2"
              />
            </NuxtLink>
          </div>

          <!-- Side panel in Menu -->
          <div
            class="w-24 bg-gray-100 dark:bg-gray-800 p-2 border-l dark:border-gray-700 border-gray-200"
          >
            <div class="flex flex-col items-center space-y-2">
              <!-- Close Menu Button -->
              <UButton
                size="md"
                icon="i-heroicons-x-mark"
                class="m-4"
                color="gray"
                @click="isMenuOpen = !isMenuOpen"
              />
              <!-- Logout Button -->
              <UButton
                v-if="user"
                size="md"
                icon="i-heroicons-arrow-left-start-on-rectangle"
                class="m-4"
                color="gray"
                @click="logout"
              />
            </div>
          </div>
        </div>
      </USlideover>
    </div>
  </nav>
</template>
