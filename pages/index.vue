<script setup>
const user = useCurrentUser();
</script>

<template>
  <main class="p-4">
    <h1>Welcome to Kinko – your digital asset tracker.</h1>
    <p>This could be your home page.</p>

    <section v-if="user">
      <h2>*Dashboard*</h2>
    </section>

    <section>
      <h2>Dev notes:</h2>
      <p>
        This demo app was created as a boilerplate to explore and test the
        following stack:
      </p>
      <ul>
        <li>Vue 3</li>
        <li>Nuxt 3</li>
        <li>Nuxt UI</li>
        <li>Firebase + Google Auth</li>
        <li>Bun</li>
        <li>Tailwind CSS</li>
        <li>Heroicons</li>
        <li>Cloudflare Pages</li>
      </ul>
      <p>
        Initially, ESR (Edge-Side Rendering) was enabled, but unfortunately,
        Nitro does not work correctly with Vuefire out of the box when deploying
        to Cloudflare Edge.
      </p>
      <p>It throws the following error:</p>
      <pre>
Error: Failed to publish your Function. Got error: Uncaught TypeError: 
Object prototype may only be an Object or null: undefined
  at chunks/nitro/nitro.mjs:1:334924 in Go.exports
  at chunks/nitro/nitro.mjs:1:346753 in Go.exports
</pre
      >
      <p>
        Curiously enough, the same project doesn't work at all with
        <strong>pnpm</strong>, breaking even earlier in the build process. I
        also tried various older versions of Vuefire and Nuxt with npm. In the
        end, when the good old npm gave me the same error again I tried turning
        off SSR/ESR.
      </p>
      <p>
        The investigation was fun and all, but since I wanted an authentication
        provider in my app along with working SSR, I decided to try out
        <a href="https://github.com/atinux/atidone">Atidone</a> next time. This
        template by Sébastien Chopin, the author of Nuxt, includes Cloudflare D1
        as a database and promises Auth and SSR support out of the box on
        Cloudflare Pages.
      </p>
    </section>
  </main>
</template>
