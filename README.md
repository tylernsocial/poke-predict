# PokéMarket Predictor

PokéMarket Predictor is the foundation for a machine learning-powered Pokémon trading card market analysis application. Its long-term goal is to combine historical pricing, liquidity, scarcity, card metadata, popularity, and broader market signals to identify cards that may experience unusual price growth over the next 30–90 days.

Phase 1 provides only the development foundation: a minimal React interface, a health-checkable FastAPI service, PostgreSQL configuration, Alembic support, and an organized workspace for future machine learning work. It does not include card data, predictions, external APIs, or ML code.

## Technology stack

- Frontend: React, TypeScript, Vite, Tailwind CSS, and React Router
- Backend: Python 3.12+, FastAPI, Uvicorn, Pydantic, SQLAlchemy, and Alembic
- Database: PostgreSQL development configuration
- Testing: pytest and FastAPI's HTTP test client
- Future ML work: pandas, NumPy, scikit-learn, XGBoost, and SHAP (not installed in Phase 1)

## Project structure

```text
poke-predict/
├── frontend/               React and TypeScript application
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       └── types/
├── backend/                FastAPI application
│   ├── app/
│   │   ├── api/routes/
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
│   │   └── services/
│   ├── migrations/         Alembic migration environment
│   └── tests/
├── ml/                     Reserved for future ML development
│   ├── data/
│   ├── backtesting/
│   ├── evaluation/
│   ├── features/
│   ├── models/
│   ├── notebooks/
│   ├── predictions/
│   └── training/
└── scripts/                Reserved for future project scripts
```

## Prerequisites

- Node.js 20.19 or newer (Node.js 24 is recommended for the current Vite release)
- Python 3.12 or newer
- PostgreSQL (optional during Phase 1; neither the API root nor health endpoint connects to it)

The commands below are intended for Windows PowerShell and assume the repository root is the current directory.

## Frontend setup

Install dependencies:

```powershell
Set-Location frontend
npm install
```

Start the development server:

```powershell
npm run dev
```

Vite serves the application at `http://localhost:5173` by default.

Verify types and create a production build:

```powershell
npm run typecheck
npm run build
```

## Backend setup

Create and activate a virtual environment:

```powershell
Set-Location backend
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
```

If Python 3.12 is not installed but a newer supported version is your default, use `python -m venv .venv` instead.

Install the backend dependencies:

```powershell
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

Create the local environment file:

```powershell
Copy-Item .env.example .env
```

The example values are local development placeholders only. Change `DATABASE_URL` if your PostgreSQL host, port, database, or credentials differ. `CORS_ORIGINS` is a JSON array and defaults to the Vite development origin.

Start the API:

```powershell
uvicorn app.main:app --reload
```

The API is available at `http://localhost:8000`. Useful Phase 1 endpoints are:

- `GET /` — application name and version
- `GET /api/health` — database-independent availability check
- `GET /docs` — FastAPI's generated interactive API documentation

## Database migrations

Alembic is configured, but Phase 1 intentionally contains no tables or migration revisions. Once a future phase introduces models, create and run migrations from `backend/`:

```powershell
alembic revision --autogenerate -m "describe the schema change"
alembic upgrade head
```

A running PostgreSQL instance is required only for database operations such as online migrations, not for the current API health check.

## Tests

With the backend virtual environment active:

```powershell
Set-Location backend
pytest
```

The Phase 1 tests verify the API information and health responses without connecting to PostgreSQL.

## Planned development phases

1. **Initial project setup (current):** frontend shell, API health check, configuration, database tooling, and test foundation.
2. **Data model and ingestion:** define card and market-history schemas, choose approved data sources, and build repeatable ingestion jobs.
3. **Market analytics:** calculate transparent historical metrics and expose them through API endpoints.
4. **Model development:** engineer features, train baseline models, evaluate them, and add time-aware backtesting.
5. **Prediction experience:** display ranked breakout candidates, confidence information, explanations, and historical charts.
6. **Operations:** automate data refreshes, monitoring, model retraining, and deployment after the earlier phases are validated.

Phase 2 should begin by defining the data-source strategy and database schema; it should not start until those requirements and data licensing constraints are agreed.
