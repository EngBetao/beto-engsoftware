<!-- Copilot instructions tailored to this repository. Keep concise and actionable. -->
# Copilot / AI Contributor Instructions

This project contains multiple Angular frontends (including an SSR-capable app) and additional backend folders. The guidance below helps AI coding agents be immediately productive and avoid common mistakes.

- **Repo layout (important):** The primary Angular SSR app is under `backend/frontend/my-angular-app/`. There are other frontend projects under `frontend/` (for example `frontend/beto-engsoftware/`). Note there are duplicated `backend/` folders — be cautious when making cross-repo changes.

- **Primary build & run commands (examples):**
  - Development (local Angular dev server):
    ```bash
    cd backend/frontend/my-angular-app
    npm install
    npm start   # runs `ng serve`
    ```
  - Server-side rendering (production build + run):
    ```bash
    cd backend/frontend/my-angular-app
    npm run build
    npm run serve:ssr:my-angular-app   # runs `node dist/my-angular-app/server/server.mjs`
    ```

- **Node / ESM notes:** The SSR server is compiled to ESM (`server.mjs`) and uses `import.meta`. Use Node 18+ and ensure runtime supports ESM. Don't rewrite server outputs to CJS.

- **Where to look for SSR/server patterns:**
  - `src/main.server.ts` — exports the Angular server bootstrap used for SSR.
  - `src/server.ts` — Express server that serves `../browser` static files and integrates the Angular SSR engine. It exports `reqHandler` for dev infra / cloud functions.
  - `src/app/app.config.server.ts` and `src/app/app.routes.server.ts` — server-specific DI and route configuration. Prefer editing these for SSR behavior (rather than the client-only files).

- **Client vs Server variants:** Many config files have server/client variants (e.g., `app.config.ts` vs `app.config.server.ts`, `app.routes.ts` vs `app.routes.server.ts`). When changing SSR behavior, update the `*.server.ts` files.

- **Static assets & output:** The Express server serves static files from the compiled `browser` folder inside `dist/my-angular-app`. Changes to client assets (styles, index.html) require a rebuild (`npm run build`).

- **Patterns & conventions to follow:**
  - Use existing route/provider separation — add server providers into `app.config.server.ts` via `mergeApplicationConfig`.
  - Keep route arrays small and declarative (`serverRoutes` uses `RenderMode.Prerender` by default).
  - Preserve `import.meta.dirname` usage when working with runtime path resolution.

- **Tests:** Unit tests live near the app files (e.g., `app.spec.ts`) and the project uses Karma/Jasmine. Run `npm test` from the app folder to execute tests.

- **Files worth referencing for examples:**
  - `backend/frontend/my-angular-app/package.json` — scripts and dependency versions (Angular 20.x, TypeScript ~5.9).
  - `backend/frontend/my-angular-app/src/server.ts` — Express integration and `reqHandler` export.
  - `backend/frontend/my-angular-app/src/main.server.ts` — SSR bootstrap.
  - `backend/frontend/my-angular-app/src/app/app.config.server.ts` — server DI example.

- **Do not modify without context:**
  - Backup folders like `backups/` contain preserved snapshots. Avoid editing or removing them.
  - There are multiple similarly-named projects in the workspace; confirm which project the change targets before editing shared build scripts.

If anything here is unclear or you'd like this turned into a stricter linter/automation checklist, tell me which areas to expand (build, CI, debugging, or deployment examples).
