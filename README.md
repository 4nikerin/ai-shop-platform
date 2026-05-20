# AI Shop Platform

Full-stack e-commerce demo with a Next.js storefront, a dedicated SPA admin dashboard, and an LLM-powered product assistant.

The project is designed as a portfolio-grade implementation of a small cat house shop. It demonstrates SSR storefront pages, a React SPA admin area, a real API and database layer, cookie-based authentication, email flows, product image uploads, cart and checkout behavior, and AI-assisted product discovery.

## Stack

- **Storefront:** Next.js App Router, TypeScript, Mantine
- **Admin:** Vite, React, TypeScript, Redux Toolkit, Mantine, Mantine React Table
- **API:** Adonis.js, PostgreSQL, cookie-based session auth
- **Contracts:** Shared Zod DTO schemas
- **AI:** LangChain with an OpenAI-compatible API
- **Local infrastructure:** Docker Compose, PostgreSQL, Mailpit

## Monorepo Structure

```text
apps/
  web/       Next.js public storefront and customer account
  admin/     Vite SPA admin dashboard
  api/       Adonis.js REST API
packages/
  contracts/ Shared DTO schemas and TypeScript types
```

The app and package directories will be created when their real scaffolds are added. The first commit keeps only root project metadata and planning documents.

## Planned Features

- SSR home, catalog, and product pages
- Query-param catalog filters and sorting
- Customer authentication, email verification, and password reset
- Guest cart with sync after login
- Checkout without payment integration
- Customer account and order history
- Admin dashboard, product management, attribute management, orders, customers, and AI chat logs
- Product image upload, processing, reordering, and deletion
- Floating LLM assistant that asks clarifying questions and recommends real products from the catalog

## Development

Root scripts are intentionally stable across the monorepo:

```bash
pnpm dev
pnpm test
pnpm typecheck
pnpm lint
pnpm build
```

The API service is available in `apps/api`. The storefront and admin applications will be added in later implementation steps.

### Local Services

Copy the environment example and start local dependency services:

```bash
cp apps/api/.env.example apps/api/.env
docker compose --env-file ./apps/api/.env up -d
```

Available services:

- PostgreSQL: `localhost:55432`
- API: `http://localhost:3333`

The API can also be run directly from the workspace:

```bash
pnpm --filter @ai-shop/api dev
```

## License

MIT
