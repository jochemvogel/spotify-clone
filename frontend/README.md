# Spotjoch

@TODO: Nog even goed naar kijken en het een en ander updaten. Want die naming moet nog anders en misschien kun je er wel 1 repo van maken (Turborepo, wat)

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

### SvelteKit

SvelteKit is an officially supported framework, built around Svelte. It adds key features to a Svelte app — like routing, layouts, and server-side rendering — and makes front-end development insanely easy.

Unlike single-page apps, SvelteKit doesn't compromise on SEO, progressive enhancement, or the initial loading experience — but unlike traditional server-generated apps, navigation is instant for that app-like feel _(source: https://kit.svelte.dev/)_.

SvelteKit works on the basis of file-based routing. This means that the routes in the application correspond to the structure and names of the folders in the project.

More information about the routing of SvelteKit can be found in t[he documentation](https://kit.svelte.dev/docs#routing).

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash

npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# or make the app available through the network
npm run dev-expose

```

### Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash

npm run build

```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. Use `npm run preview-expose` to expose the app to the network. This should _not_ be used to serve your app in production.

### Formatting

```bash

npm run format

```

### Linting

```bash

npm run lint

```

### Testing

Jest is implemented, but not really used (yet).

```bash

npm run test

```
