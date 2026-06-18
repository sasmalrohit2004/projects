# 🌿 EcoWear – Full Stack MERN E-Commerce Project

EcoWear is a full-stack **MERN (MongoDB, Express, React, Node.js)** e-commerce web application built with **Dockerized microservice-style architecture**. It demonstrates authentication, REST APIs, and containerized deployment using Docker Compose.

---

## 🚀 Features

* 🔐 User Authentication (JWT-based)
* 🧑 User Registration & Login
* 🌐 RESTful API backend (Express.js)
* 💾 MongoDB database integration
* 🐳 Fully Dockerized setup (Frontend + Backend + MongoDB)
* ⚡ Vite-powered React frontend
* 📦 Environment variable configuration
* 🔗 API-based architecture

---

## 🛠️ Tech Stack

**Frontend:**

* React (Vite)
* Bootstrap
* React Router DOM

**Backend:**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcryptjs

**DevOps / Tools:**

* Docker
* Docker Compose
* Git & GitHub

---

## 📁 Project Structure

```
ecowear/
│
├── ecowear-frontend   # React frontend
├── ecowear-backend    # Express backend
├── docker-compose.yml # Multi-container setup
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecowear.git
cd ecowear
```

### 2. Run with Docker

```bash
docker compose up --build
```

### 3. Open in browser

* Frontend: http://localhost:5173
* Backend: http://localhost:5000

---

## 🐳 Docker Architecture

```
Frontend (React)  →  Backend (Express)  →  MongoDB
```

All services run in isolated containers using Docker Compose.

---

## 📌 Environment Variables

Backend `.env` file:

```
PORT=5000
MONGO_URI=mongodb://mongodb:27017/ecowear
JWT_SECRET=ecowear_secret_key
```

---

## 📈 Future Improvements

* Product catalog system
* Cart & checkout functionality
* Payment gateway integration
* Admin dashboard
* Deployment to cloud (AWS / Render / Vercel)

---

## 👨‍💻 Author

Rohit Sasmal
B.Tech CSE (AI & ML)
Full Stack Developer (MERN + Docker)
