<script setup>
import { signOut } from "firebase/auth";

const auth = useFirebaseAuth();
const user = useCurrentUser();

const isLoggedIn = ref(user);

// client only
onMounted(() => {
  watch(user, (user) => {
    isLoggedIn.value = user;
  });
});

function logout() {
  signOut(auth);
}
</script>

<template>
  <main class="p-4">
    <h1 class="mb-4">Welcome to Kinko – your digital asset tracker.</h1>

    <p>This is your home page.</p>

    <section class="mt-4" v-if="user">
      <h2 class="mb-4">Dashboard</h2>
      <UButton
        icon="i-heroicons-arrow-left-start-on-rectangle"
        label="Logout"
        color="gray"
        @click="logout"
      />
    </section>
  </main>
</template>
