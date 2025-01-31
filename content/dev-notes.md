## Dev notes:

This demo app was created as a boilerplate to explore and test the following stack:

*   Vue 3
*   Nuxt 3
*   Nuxt UI
*   Firebase + Google Auth
*   Bun
*   Tailwind CSS
*   Heroicons
*   Cloudflare Pages

Initially, ESR (Edge-Side Rendering) was enabled, but unfortunately, Nitro does not work correctly with Vuefire out of the box when deploying to Cloudflare Edge.

It throws the following error:

```Error: Failed to publish your Function. Got error: Uncaught TypeError: 
Object prototype may only be an Object or null: undefined
  at chunks/nitro/nitro.mjs:1:334924 in Go.exports
  at chunks/nitro/nitro.mjs:1:346753 in Go.exports
```

Curiously enough, the same project doesn't work at all with **pnpm**, breaking even earlier in the build process. I also tried various older versions of Vuefire and Nuxt with npm. In the end, when the good old npm gave me the same error again I tried turning off SSR/ESR.

The investigation was fun and all, but since I wanted an authentication provider in my app along with working SSR, I decided to try out [Atidone](https://github.com/atinux/atidone) next time. This template by Sébastien Chopin, the author of Nuxt, includes Cloudflare D1 as a database and promises Auth and SSR support out of the box on Cloudflare Pages.