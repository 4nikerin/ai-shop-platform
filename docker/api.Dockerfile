FROM node:24-alpine

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/package.json apps/api/package.json

RUN pnpm install --filter @ai-shop/api... --frozen-lockfile

COPY apps/api apps/api

RUN pnpm --filter @ai-shop/api build

WORKDIR /app/apps/api

CMD ["node", "build/bin/server.js"]
