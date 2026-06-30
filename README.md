# TaskFlow API

Backend de la aplicación TaskFlow construido con **Express 5**, **TypeScript** y **PostgreSQL**.

## Requisitos

- Node.js >= 18
- PostgreSQL >= 14

## Instalación

```bash
cp .env.example .env    # editar DATABASE_URL según tu entorno local
npm install
npm run dev             # servidor con hot-reload en http://localhost:3000
```

## Scripts

| Comando           | Descripción                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con hot-reload (ts-node-dev) |
| `npm run build`   | Compila TypeScript a JavaScript en `dist/`          |
| `npm start`       | Ejecuta el servidor desde `dist/index.js`           |
| `npm test`        | **Placeholder** — no hay tests configurados         |

## Stack

| Aspecto          | Detalle                                  |
|------------------|------------------------------------------|
| Framework        | Express 5 — con diferencias sutiles vs Express 4 |
| Lenguaje         | TypeScript 6 — strict mode activado      |
| Base de datos    | PostgreSQL vía `pg.Pool` (sin ORM)       |
| Middlewares       | cors, express.json, express.urlencoded   |

## Endpoints

### `GET /`

Retorna información básica de la API.

```json
{
  "message": "TaskFlow API - clase 1",
  "version": "1.0.0",
  "clase": 1,
  "description": "Servidor Express con TypeScript + PostgreSQL",
  "endpoints": {
    "health": "GET /health"
  }
}
```

### `GET /health`

Verifica el estado del servidor y la conexión a la base de datos.

```json
{
  "status": "ok",
  "message": "TaskFlow API funcionando correctamente 🚀",
  "server": {
    "timestamp": "2025-01-01T00:00:00.000Z",
    "environment": "development"
  },
  "database": {
    "status": "connected",
    "queryTimestamp": "2025-01-01T00:00:00.000Z"
  }
}
```

## Manejo de errores

- **Ruta no encontrada (404):** cualquier ruta no definida responde con `{ error, path, method }`.
- **Error de base de datos:** `GET /health` retorna `status: 500` con `database.status: "disconnected"` y el mensaje de error.

## Estructura del proyecto

```
src/
├── config/
│   └── database.ts      # Pool de conexiones a PostgreSQL
├── routes/
│   └── health.ts        # GET /health con verificación de BD
└── index.ts             # Punto de entrada: middlewares, rutas, 404, arranque
```

## Variables de entorno (`.env`)

| Variable       | Descripción                       |
|----------------|-----------------------------------|
| `PORT`         | Puerto del servidor (default 3000)|
| `DATABASE_URL` | URL de conexión a PostgreSQL      |
| `NODE_ENV`     | Entorno (development/production)  |
