# TaskFlow API

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server with hot-reload (`ts-node-dev --respawn --transpile-only`) |
| `npm run build` | Compile TS to JS via `tsc` |
| `npm start` | Run compiled output: `node dist/index.js` |
| `npm test` | **Placeholder** — always exits 1 |

No lint, format, or typecheck commands exist.

## Stack quirks

- **Express 5** (`express@^5.2.1`) — has subtle API differences from Express 4 (e.g., `req.query` changes, async error handling)
- **TypeScript 6** (`typescript@^6.0.3`) — strict mode enabled
- **PostgreSQL** via raw `pg` Pool — no ORM, no migration framework

## Setup

```bash
cp .env.example .env   # requires DATABASE_URL, PORT, NODE_ENV
npm install
npm run dev
```

`.env` is gitignored; `.env.example` is in version control.

## Entrypoints & routing

| File | Role |
|------|------|
| `src/index.ts` | Server bootstrap, middleware, route mounting; exports `app` |
| `src/config/database.ts` | Creates `pg.Pool`, exports it; also calls `dotenv.config()` independently |
| `src/routes/health.ts` | `GET /` handler, mounted at `/health` |

Endpoints:
- `GET /` — inline route in index.ts, returns API info
- `GET /health` — DB health check

> README documents `/api/health` but the actual path is `/health`.

## Known quirks

- `dotenv.config()` runs in both `index.ts` and `database.ts` — redundant but harmless.
- No migration tooling; schema changes are manual.
- No `.nvmrc`; README states Node >= 18.
