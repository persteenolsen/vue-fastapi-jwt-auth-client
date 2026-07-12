# 🔐 Vue 3 + Pinia + JWT Authentication Client

A Vue 3 frontend for JWT authentication against a FastAPI backend.  
Includes login, registration, token handling, and state management using Pinia.

**Last updated:**
- 14-04-2026

---

## ✨ Features

- Vue 3 frontend framework
- Login and logout
- Silent login possible if a valid JWT exists in localStorage
- JWT authentication with FastAPI backend
- Persistent auth state using Pinia
- Form validation (VeeValidate + Yup)
- Protected route handling (via auth state)
- Clean modular Vue 3 structure

---

## 🛠️ Tech Stack

- Node.js 18.19.1
- Vue 3 (frontend framework)
- Pinia (state management)
- Vite (build tool / dev server)
- ESLint (code quality)
- VeeValidate (form validation)
- Yup (schema validation)
- Volta (Node version management)
- VS Code (development environment)

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Make sure you have:

- Node.js installed (recommended: 18.19.1 or compatible)
- npm available in your terminal

---

### 2️⃣ Install dependencies

- npm install

---

## 💻 Run the Application (Development)

Start the development server:

- npm run dev

The app will be available at:

- http://localhost:3000

---

## 📦 Production Build

Create an optimized production build:

- npm run build

---

## 👀 Preview Production Build

Test the production build locally:

- npm run preview

Available at:

- http://localhost:5050

---

## 🔗 Backend Connection

This frontend is designed to work with a FastAPI backend using JWT authentication.

Make sure your backend is running and configured correctly (CORS + API URL).

Typical backend endpoints used:

- /auth/register
- /auth/login
- /users/me (protected route)

---

## 📝 Project Notes

- Authentication state is handled via Pinia store
- JWT token is stored and used for API requests
- Validation is handled with VeeValidate + Yup schemas
- API base URL should match your FastAPI deployment

---

## 🧰 Development Tools

- ESLint is used to maintain code quality
- Vite provides fast HMR and build tooling
- VS Code recommended for development

---

Happy coding with Vue 3 🚀