<script setup>
const user = useCurrentUser();
</script>

<template>
  <main class="p-4">
    <h1 class="mb-4">Welcome to Kinko – your digital asset tracker.</h1>

    <p>This is your home page.</p>

    <section class="mt-4" v-if="user">
      <h2 class="mb-4">Dashboard</h2>
    </section>
  </main>
</template>
