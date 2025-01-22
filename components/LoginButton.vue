<script setup>
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = useFirebaseAuth();

function signInWithGoogle() {
  signInWithPopup(auth, new GoogleAuthProvider());
}
</script>

<template>
  <UButton
    icon="i-heroicons-user-circle"
    label="Login"
    color="gray"
    @click="signInWithGoogle"
  />
</template>
