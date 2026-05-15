# AI JobPrep

Build AI-powered interview and job-prep experiences with a React + Node.js full-stack starter.

![Frontend](https://img.shields.io/badge/frontend-React%2019%20%2B%20Vite%208-61DAFB)
![Backend](https://img.shields.io/badge/backend-Node.js%20%2B%20Express%205-339933)
![Database](https://img.shields.io/badge/database-MongoDB-47A248)
![Auth](https://img.shields.io/badge/auth-JWT%20%2B%20Cookies-F59E0B)

## 📚 Table of Contents
- [Overview](#-overview)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [API Reference (Auth)](#-api-reference-auth)
- [Scripts](#-scripts)
- [Current Status](#-current-status)
- [Development Notes](#-development-notes)
- [Contributing](#-contributing)

## 🔎 Overview
AI JobPrep is a MERN-style starter with authentication and protected user profile flow, ready for expanding into interview practice, resume intelligence, and job preparation workflows.

### Core capabilities
- JWT authentication with cookie-based token transport
- Register, login, logout, and protected profile endpoint
- React + Vite frontend for fast iteration
- MongoDB persistence with Mongoose

## 🏗️ Project Structure
```text
Ai-jobprep/
├── client/               # React + Vite frontend
├── server/               # Express + MongoDB backend
└── PROJECT_SETUP_GUIDE.md
```

## 🧰 Tech Stack
| Layer | Tools |
|---|---|
| Frontend | React 19, Vite 8, ESLint |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Auth/Security | JWT, bcrypt, cookie-parser, dotenv |

## 🚀 Quick Start
### 1) Clone and install
```bash
git clone <your-fork-or-repo-url>
cd Ai-jobprep
cd client && npm install
cd ../server && npm install
```

### 2) Configure environment
Create `server/.env`:
```env
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET_KEY=<your-jwt-secret>
SALT=10
```

### 3) Run locally
Open two terminals:

**Terminal A (backend)**
```bash
cd server
npm run dev
```

**Terminal B (frontend)**
```bash
cd client
npm run dev
```

Default ports:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## 🔐 API Reference (Auth)
Base URL: `http://localhost:3000/api/auth`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/register` | Public | Create a user account |
| POST | `/login` | Public | Sign in and set auth cookie |
| POST | `/logout` | Public | Clear auth cookie and blacklist token |
| POST | `/get-me` | Protected | Fetch authenticated user profile |

## ✅ Scripts
### Client (`/client`)
| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Create production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

### Server (`/server`)
| Command | Purpose |
|---|---|
| `npm run dev` | Start backend with nodemon |
| `npm test` | Placeholder script (currently exits with error) |

## 📈 Current Status
| Area | Status | Notes |
|---|---|---|
| Authentication API | ✅ Available | Register, login, logout, get-me implemented |
| Frontend UI | 🟡 Basic | Scaffold-level and ready for feature expansion |
| Automated backend tests | 🔴 Not set up | `npm test` is a placeholder |

## 📌 Development Notes
- Keep secrets only in `server/.env`.
- Authentication currently uses cookies for token transport.
- Production readiness should include validation, API error standardization, testing, and deployment setup.

## 🤝 Contributing
1. Create a branch
2. Make focused changes
3. Run lint/build checks
4. Open a pull request
