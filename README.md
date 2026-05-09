# AI JobPrep

A modern full-stack starter for building AI-powered interview and job-preparation experiences.

## ✨ Highlights
- **MERN architecture** with clear client/server separation
- **JWT + cookie-based authentication**
- **Protected profile flow** with middleware-based auth checks
- **React + Vite frontend** for fast iteration and builds
- **MongoDB persistence** via Mongoose models

## 🏗️ Project Structure
```text
Ai-jobprep/
├── client/   # React + Vite frontend
├── server/   # Express + MongoDB backend
└── PROJECT_SETUP_GUIDE.md
```

## 🧰 Tech Stack
### Frontend
- React 19
- Vite 8
- ESLint

### Backend
- Node.js + Express 5
- MongoDB + Mongoose
- JWT, bcrypt, cookie-parser, dotenv

## 🚀 Quick Start

### 1) Clone and install
```bash
git clone <your-fork-or-repo-url>
cd Ai-jobprep

cd client && npm install
cd ../server && npm install
```

### 2) Configure environment
Create `/home/runner/work/Ai-jobprep/Ai-jobprep/server/.env`:
```env
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET_KEY=<your-jwt-secret>
SALT=10
```

### 3) Run the app
Open two terminals:

**Terminal A — backend**
```bash
cd /home/runner/work/Ai-jobprep/Ai-jobprep/server
npm run dev
```

**Terminal B — frontend**
```bash
cd /home/runner/work/Ai-jobprep/Ai-jobprep/client
npm run dev
```

Frontend runs on Vite default port (`5173`) and backend on `3000` unless changed.

## 🔐 Auth API (current)
Base URL: `http://localhost:3000/api/auth`

- `POST /register` — create account
- `POST /login` — sign in and set auth cookie
- `POST /logout` — clear auth cookie and blacklist token
- `POST /get-me` — fetch authenticated user profile (protected)

## ✅ Available Scripts
### Client (`/client`)
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

### Server (`/server`)
- `npm run dev`
- `npm test` *(placeholder script in current repo)*

## 📌 Development Notes
- Keep backend secrets in `server/.env` only.
- Authentication currently uses cookies for token transport.
- The frontend is still scaffold-level UI and ready for feature development.

## 🤝 Contributing
1. Create a branch
2. Make focused changes
3. Run lint/build checks
4. Open a pull request

---
If you’re preparing this for production, next recommended steps are robust validation, API error standardization, test coverage, and deployment configuration.
