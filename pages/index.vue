<script setup>
const user = useCurrentUser();
const { data: devNotes } = await useAsyncData(() => queryCollection('content').path('/dev-notes').first())
</script>

<template>
  <main class="p-4">
    <h1>Welcome to Kinko – your digital asset tracker.</h1>
    <p>This could be your home page.</p>

    <section v-if="user">
      <h2>*Dashboard*</h2>
    </section>

    <section>
      <ContentRenderer v-if="devNotes" :value="devNotes" />
    </section>
  </main>
</template>
