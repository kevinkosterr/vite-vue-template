# Vite + Vue 3 template

A basic Vite template for Vue 3 projects. This includes the following by default:
- Eslint, with my preferred settings and plugins:
  - `@typescript-eslint/parser`;
  - `typescript-eslint`;
  - `vue-eslint-parser`;
  - `stylistic` (JS and TS version);
  - `eslint-plugin-import-alias`;
  - `eslint-plugin-vue`.
- <details>
    <summary>TypeScript;</summary>
  
    ```bash
    pnpm remove typescript typescript-eslint
    ```
    </details>
- <details>
    <summary>Vitest + Vue Test Utils, for testing components;</summary>
    
  ```bash
    pnpm remove vitest @vue/test-utils
    ```
    </details>
- SASS;
- Vue Router.

## Checklist
- [ ] Run `pnpm install`;
- [ ] Remove `.git` folder (`rm -rf .git`);
- [ ] Change name in `package.json`;
- [ ] Change title and icon in `index.html`;
- [ ] Add a component or CSS framework (if you wish).

## Quickstart with a component- or CSS framework

| Framework               | Command                                                            | Documentation |
|-------------------------|--------------------------------------------------------------------|---------------|
| TailwindCSS             | `pnpm add tailwindcss @tailwindcss/vite`                           | https://tailwindcss.com/docs/installation/using-vite              |
| PrimeVue (+ TailwindCSS) | `pnpm add tailwindcss @tailwindcss/vite primevue @primevue/themes` | https://primevue.org/vite              |
| Bootstrap (5)           | `pnpm add bootstrap @popperjs/core`                                | https://getbootstrap.com/docs/5.2/getting-started/vite/#import-bootstrap              |
| Bulma                | `pnpm add bulma`                                                   | https://bulma.io/documentation/start/installation/              |

