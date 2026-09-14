# 🌿 EcoWear – Full Stack MERN E-Commerce & DevOps Project

EcoWear is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** e-commerce application designed to demonstrate modern full-stack development and practical **DevOps, CI/CD, containerization, cloud deployment, reverse proxy, HTTPS, and Kubernetes** practices.

The project uses a **Dockerized multi-container architecture** with React, Node.js/Express, and MongoDB. It also includes REST APIs, JWT authentication, product management, database seeding, GitHub Actions CI/CD, Docker Hub image publishing, AWS EC2 deployment, Nginx reverse proxy, DuckDNS DNS, HTTPS using Let's Encrypt, and a local Kubernetes implementation.

---

## 🚀 Features

### 👤 Authentication

- 🔐 JWT-based user authentication
- 🧑 User registration and login
- 🔑 Password hashing using bcryptjs
- 🛡️ Protected application routes
- 🚪 Logout functionality

### 🛍️ Product Management

- 📦 Product catalog stored in MongoDB
- 🔎 Fetch all products
- 🏷️ Filter products by category
- 📄 View individual product details
- ➕ Create products
- ✏️ Update products
- 🗑️ Delete products
- 📊 Stock management
- ⭐ Product ratings
- ✅ Product availability status

### 🌐 REST API

Backend REST APIs are implemented using **Express.js** and **Mongoose**.

Current product endpoints:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products?category=Men` | Get products by category |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

> POST, PUT and DELETE endpoints are prepared for authentication/authorization protection.

### 🛒 E-Commerce Features

- 🛍️ Product catalog
- ❤️ Wishlist
- 🛒 Shopping cart
- 📄 Product details page
- 🔐 Protected user pages
- 📦 Product stock information
- 🏷️ Product categories

### 🐳 DevOps & Containerization

- Dockerized frontend
- Dockerized backend
- MongoDB container
- Docker Compose orchestration
- Container-to-container networking
- Environment variable configuration
- Docker image builds
- Docker Hub image publishing

### ⚙️ CI/CD

- GitHub Actions CI/CD pipeline
- Automated application builds
- Docker image creation
- Docker Hub image publishing
- Automated deployment workflow
- AWS EC2 deployment
- AWS Systems Manager (SSM) based deployment

### ☸️ Kubernetes

- Local Kubernetes cluster using Docker Desktop
- Kubernetes Deployments
- Kubernetes Services
- MongoDB Deployment and Service
- Backend Deployment and Service
- Frontend Deployment and NodePort Service
- Kubernetes Secrets
- Backend scaling to multiple replicas
- Rolling updates
- Rollback using deployment revision history
- Kubernetes-based service discovery

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Bootstrap
- React Router DOM
- Axios
- Framer Motion
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- REST API

## DevOps

- Docker
- Docker Compose
- Kubernetes
- Git
- GitHub
- GitHub Actions
- Docker Hub
- AWS EC2
- AWS Systems Manager (SSM)
- Nginx
- DuckDNS
- Let's Encrypt

---

# 📁 Project Structure

```text
ecowear/

├── ecowear-frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── products.js
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   │
│   ├── Dockerfile
│   └── package.json
│
├── ecowear-backend/
│   ├── config/
│   ├── controllers/
│   │   └── productController.js
│   ├── middleware/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── seed.js
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── mongodb-deployment.yaml
│   └── mongodb-service.yaml
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
└── README.md