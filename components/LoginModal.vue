<script setup>
const { $auth } = useNuxtApp();

// TBD: use when we will have more than one provider

const signInWithGoogle = async () => {
  // try {
  //   await $auth.loginWith("google");
  // } catch (error) {
  //   console.error("Login failed:", error);
  // }
};
</script>

<template>
  <UModal>
    <UCard>
      <template #header>
        <div class="text-xl font-bold">Welcome</div>
      </template>

      <div class="space-y-4 py-4">
        <p class="text-gray-600 dark:text-gray-400 text-center">
          Sign in to access your portfolio
        </p>

        <UButton
          block
          color="gray"
          @click="signInWithGoogle"
          :loading="loading"
        >
          <template #leading>
            <UIcon name="i-logos-google-icon" />
          </template>
          Login
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>
