<script setup>
const user = useCurrentUser();
</script>

<template>
    <main class="p-4">
        <h1>Profile</h1>
        <p>Here you can see your profile information.</p>
        <section class="mt-4">
            Hello, {{ user.displayName }}
        </section>
    </main>
</template>