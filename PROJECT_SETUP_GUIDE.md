# AI Fullstack Project - Step-by-Step Setup Guide

This document records everything we have built so far. It breaks down the installation commands, file structure, and the exact purpose of every file created. Anyone following this guide will be able to replicate the work up to this point.

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Backend (Server) Setup](#2-backend-server-setup)
   - Packages Installed
   - Folder Structure & Files Created
3. [Frontend (Client) Setup](#3-frontend-client-setup)
   - Packages Installed
   - Folder Structure & Files Created
4. [How to Run the Application](#4-how-to-run-the-application)

---

## 1. Project Overview
This project is an AI Fullstack Application built with the MERN stack (MongoDB, Express, React, Node.js). It is divided into two primary folders:
- `server/` - The Express Node.js backend API.
- `client/` - The React frontend application powered by Vite.

---

## 2. Backend (Server) Setup

We initialized a Node.js project in the `server` directory and set up a RESTful API with Authentication capabilities.

### Initialization & Commands
```bash
mkdir server
cd server
npm init -y
```

### Packages Installed

We installed the following backend dependencies:
```bash
npm install express mongoose dotenv bcrypt jsonwebtoken cookie-parser
```

**What these packages do:**
*   **`express`**: Fast, unopinionated web framework for Node.js, used to build our API.
*   **`mongoose`**: MongoDB object modeling tool designed to work in an asynchronous environment (helps define database schemas and connect to MongoDB).
*   **`dotenv`**: Loads environment variables from a `.env` file into `process.env`.
*   **`bcrypt`**: A library to securely hash user passwords before saving them to the database.
*   **`jsonwebtoken` (JWT)**: Used for securely transmitting information between the client and server as a JSON object (used for user authentication/sessions).
*   **`cookie-parser`**: Middleware to parse cookies attached to the client request object.

### Folder Structure & Files Created

*   **`package.json`**: Keeps track of installed dependencies and our custom scripts. We added a `dev` script: `"dev": "npx nodemon server.js"` to automatically restart the server on file changes.
*   **`.env`**: Stores sensitive variables like `PORT`, `MONGO_URI`, and `JWT_SECRET` securely.
*   **`server.js`**: The main entry point. It imports the express app, connects to the database, and starts the server listening on a specific port.
*   **`src/app.js`**: Separates the Express application configuration (middlewares like `express.json()`, `cookieParser()`) and routing setup from the physical server start.
*   **`src/config/db.js`**: Handles connecting to the MongoDB database using `mongoose.connect()`.
*   **`src/models/`**:
    *   **`user.model.js`**: Defines the Schema for the users, including fields like email, password, and custom methods like hashing passwords before saving or generating JWT tokens.
    *   **`blacklist.model.js`**: Stores invalidated (logged out) JWT tokens to handle secure logouts.
*   **`src/routes/`**:
    *   **`authRoutes.js`**: Defines the endpoints for user authentication (e.g., `/register`, `/login`, `/profile`, `/logout`) and maps them to controller functions.
*   **`src/controllers/`**:
    *   **`authController.js`**: Contains the actual business logic for authentication routes (e.g., checking if a user exists, hashing the password, verifying credentials, and returning responses).
*   **`src/middleware/`**:
    *   **`auth.middleware.js`**: Checks for a valid JWT in incoming requests to protect specific routes (e.g., `/profile`).

---

## 3. Frontend (Client) Setup

We initialized a React application using Vite for a lightning-fast development experience.

### Initialization & Commands
```bash
npm create vite@latest client -- --template react
cd client
npm install
```

### Packages Installed
The basic React-Vite setup includes:
*   **`react` / `react-dom`**: The core React libraries for building user interfaces.
*   **`vite`**: The modern frontend build tool that is significantly faster than Webpack/Create-React-App.
*   **`eslint`**: Linter to enforce code quality and styling conventions.

### Folder Structure & Files Created
*   **`package.json`**: Manages frontend dependencies and scripts (like `npm run dev` to start Vite).
*   **`vite.config.js`**: Configuration file for Vite.
*   **`eslint.config.js`**: Configuration for standardizing and checking the code format.
*   **`index.html`**: The single HTML page that serves our React application. The `<div id="root"></div>` is where React injects components.
*   **`src/main.jsx`**: The React entry point. It grabs the root element from `index.html` and renders `<App />` into it.
*   **`src/App.jsx`**: The root component where we build the layout and define our frontend routes.
*   **`src/App.css` / `src/index.css`**: Global style files for styling the application.

---

## 4. How to Run the Application

If you ever need to clone or restart development, follow these steps:

**1. Run the Backend API:**
Open a terminal, navigate to the `server` folder, install packages (if not installed), and run:
```bash
cd server
npm install   # If you just cloned the repository
npm run dev
```
*(Ensure MongoDB is running locally or your `.env` has a correct MongoDB Atlas URI).*

**2. Run the Frontend Client:**
Open a second terminal, navigate to the `client` folder, install packages, and start Vite:
```bash
cd client
npm install   # If you just cloned the repository
npm run dev
```

Both systems should now be running concurrently!