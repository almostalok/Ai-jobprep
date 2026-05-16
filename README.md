# AI JobPrep — The Career Lab

> A full-stack launchpad for building AI-first job prep products.

![Frontend](https://img.shields.io/badge/frontend-React%2019%20%7C%20Vite%208-61DAFB)
![Backend](https://img.shields.io/badge/backend-Node.js%20%7C%20Express%205-339933)
![Database](https://img.shields.io/badge/database-MongoDB%20%7C%20Mongoose-47A248)
![Auth](https://img.shields.io/badge/auth-JWT%20Cookies%20%2B%20Token%20Blacklist-F59E0B)

## Why this repo exists
Most job-prep ideas die in the setup phase.  
This project gives you a ready foundation so you can focus on product ideas like:
- mock interview copilots
- resume feedback engines
- role-fit readiness dashboards
- personalized prep roadmaps

## Current product snapshot
This is a **starter-stage platform** with:
- user registration and login
- cookie-based JWT authentication
- logout flow with token blacklist persistence
- protected `/get-me` route for authenticated profile fetch
- React + Vite frontend scaffold for rapid iteration

## Architecture at a glance
```text
Ai-jobprep/
├── client/                  # React UI (Vite)
├── server/                  # Express API + MongoDB models
└── PROJECT_SETUP_GUIDE.md   # setup walkthrough and file-by-file notes
```

## Quick start (2 terminals, 2 minutes)
### 1) Install dependencies
```bash
cd /path/to/Ai-jobprep
cd client && npm install
cd ../server && npm install
```

### 2) Add backend environment values
Create `/server/.env`:
```env
PORT=3000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET_KEY=<your-jwt-secret>
SALT=10
```

### 3) Run the stack
Terminal A:
```bash
cd server
npm run dev
```

Terminal B:
```bash
cd client
npm run dev
```

App URLs:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## API map (auth module)
Base path: `http://localhost:3000/api/auth`

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/register` | Public | Create a new account |
| POST | `/login` | Public | Authenticate and set token cookie |
| POST | `/logout` | Public | Clear cookie and blacklist token |
| POST | `/get-me` | Protected | Return authenticated user profile |

## Scripts you’ll actually use
### Client
- `npm run dev` — start local frontend
- `npm run lint` — run ESLint
- `npm run build` — build production bundle
- `npm run preview` — preview built app

### Server
- `npm run dev` — run backend with nodemon
- `npm test` — placeholder script (currently fails intentionally)

## What to build next
- add AI interview session APIs + prompts
- add resume parsing and scoring pipeline
- connect frontend auth screens to backend endpoints
- add backend tests and CI checks
- production hardening (validation, rate limits, secure cookies, logging)

## Contribution flow
1. Create a focused branch
2. Make small, reviewable changes
3. Run lint/build checks
4. Open a PR
