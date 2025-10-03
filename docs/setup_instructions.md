# Setup Instructions

## Prerequisites
- Docker & Docker Compose
- Node.js (for local development)
- npm (Node.js package manager)

## Steps

1. Copy `.env.example` to `.env` in both `backend` and `frontend` folders. Edit values as needed.
2. Run `docker-compose up --build` from the project root.
3. Access:
   - API: http://localhost:8000
   - Frontend: http://localhost:5173

## Database
- PostgreSQL runs in Docker, data persisted in `db_data` volume.
- Default credentials: user `postgres`, password `postgres`, db `newprojectdb`.

## Development
- Backend: Node.js/Express, auto-reloads with nodemon.
- Frontend: React + Vite, hot reload.

## Testing
- Backend tests in `backend/tests/`
- Frontend tests in `frontend/src/__tests__/`

## Environment Variables
- See `.env.example` files in both backend and frontend.

## Deployment
- Use Docker Compose for production deployment.
- See [docs/architecture.md](architecture.md) for details.