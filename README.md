# beto-engsoftware

Breve README para rodar o frontend Angular (inclui suporte SSR).

## Requisitos

- Node.js >= 18
- npm (versão compatível com Node)

## Principais pastas

- `backend/frontend/my-angular-app/` — app Angular principal (SSR-capable)

## Comandos úteis (no diretório raiz do repositório)

### Desenvolvimento (hot-reload)

```bash
cd backend/frontend/my-angular-app
npm install
npm run dev    # ou `npm start` (inicia ng serve)
```

### Build e executar SSR (produção local)

```bash
cd backend/frontend/my-angular-app
npm install
npm run build
npm run serve:ssr:my-angular-app
```

### Comandos de teste

```bash
cd backend/frontend/my-angular-app
npm test
```

## Notas importantes

- O SSR gera um `server.mjs` ESM que usa `import.meta.dirname`. Use Node 18+.
- O servidor Express que serve a pasta `dist/my-angular-app/browser` está em `src/server.ts` e exporta `reqHandler`.
- Para alterar comportamento de SSR prefira editar `src/app/app.config.server.ts` e `src/app/app.routes.server.ts`.
- Há um arquivo de instruções para agentes AI: `.github/copilot-instructions.md` — consulte para padrões do projeto.

## Git / deploy

- Para enviar alterações ao GitHub (exemplo):

```bash
git add .
git commit -m "chore: descricao"
git push origin master
```

Se houver autenticação HTTPS, use seu username e um Personal Access Token (PAT) como senha.

## Contato

- Se precisar, eu posso adicionar um `README` mais detalhado (deploy, CI, Docker, etc.).
