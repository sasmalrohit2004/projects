# 🌿 EcoWear – Full Stack MERN E-Commerce & DevOps Project

EcoWear is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** e-commerce application designed to demonstrate modern full-stack development and **DevOps practices**.

The project uses a **Dockerized multi-container architecture** with React, Node.js/Express, and MongoDB. It also includes REST APIs, JWT authentication, product management, database seeding, GitHub Actions CI/CD, Docker Hub image publishing, and AWS EC2 deployment.

---

## 🚀 Features

### 👤 Authentication

* 🔐 JWT-based user authentication
* 🧑 User registration and login
* 🔑 Password hashing using bcryptjs
* 🛡️ Protected application routes
* 🚪 Logout functionality

### 🛍️ Product Management

* 📦 Product catalog stored in MongoDB
* 🔎 Fetch all products
* 🏷️ Filter products by category
* 📄 View individual product details
* ➕ Create products
* ✏️ Update products
* 🗑️ Delete products
* 📊 Stock management
* ⭐ Product ratings
* ✅ Product availability status

### 🌐 REST API

Backend REST APIs are implemented using **Express.js** and **Mongoose**.

Current product endpoints:

| Method | Endpoint                     | Description              |
| ------ | ---------------------------- | ------------------------ |
| GET    | `/api/products`              | Get all products         |
| GET    | `/api/products?category=Men` | Get products by category |
| GET    | `/api/products/:id`          | Get a single product     |
| POST   | `/api/products`              | Create a product         |
| PUT    | `/api/products/:id`          | Update a product         |
| DELETE | `/api/products/:id`          | Delete a product         |

> POST, PUT and DELETE endpoints are prepared for authentication/authorization protection.

### 🛒 E-Commerce Features

* 🛍️ Product catalog
* ❤️ Wishlist
* 🛒 Shopping cart
* 📄 Product details page
* 🔐 Protected user pages
* 📦 Product stock information
* 🏷️ Product categories

### 🐳 DevOps & Containerization

* Dockerized frontend
* Dockerized backend
* MongoDB container
* Docker Compose orchestration
* Container-to-container networking
* Environment variable configuration
* Docker image builds
* Docker Hub image publishing

### ⚙️ CI/CD

* GitHub Actions CI/CD pipeline
* Automated application builds
* Docker image creation
* Docker Hub image publishing
* Automated deployment workflow
* AWS EC2 deployment
* AWS Systems Manager (SSM) based deployment

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Bootstrap
* React Router DOM
* Axios
* Framer Motion
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* REST API

## DevOps

* Docker
* Docker Compose
* Git
* GitHub
* GitHub Actions
* Docker Hub
* AWS EC2
* AWS Systems Manager (SSM)

---

# 📁 Project Structure

```text
ecowear/
│
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
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
└── README.md
```

---

# 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │      GitHub         │
                    │   Source Code       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   GitHub Actions    │
                    │      CI / CD        │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │     Docker Hub      │
                    │  Container Images   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      AWS EC2        │
                    │                     │
                    │  ┌───────────────┐  │
                    │  │ React Frontend│  │
                    │  └───────┬───────┘  │
                    │          │           │
                    │  ┌───────▼───────┐  │
                    │  │ Express API   │  │
                    │  └───────┬───────┘  │
                    │          │           │
                    │  ┌───────▼───────┐  │
                    │  │    MongoDB     │  │
                    │  └───────────────┘  │
                    └─────────────────────┘
```

### Application Flow

```text
React Frontend
      │
      │ Axios HTTP Request
      ▼
Express REST API
      │
      │ Mongoose
      ▼
MongoDB
      │
      ▼
JSON Response
      │
      ▼
React UI
```

---

# 🐳 Docker Architecture

EcoWear runs as multiple containers managed through Docker Compose.

```text
┌─────────────────────────────────────────┐
│             Docker Compose              │
│                                         │
│  ┌─────────────┐                        │
│  │  Frontend   │                        │
│  │   React     │                        │
│  │   Vite      │                        │
│  └──────┬──────┘                        │
│         │                                │
│         ▼                                │
│  ┌─────────────┐                        │
│  │   Backend   │                        │
│  │ Node/Express│                        │
│  └──────┬──────┘                        │
│         │                                │
│         ▼                                │
│  ┌─────────────┐                        │
│  │   MongoDB   │                        │
│  │  Database   │                        │
│  └─────────────┘                        │
│                                         │
└─────────────────────────────────────────┘
```

The containers communicate through the Docker Compose network.

The backend connects to MongoDB using the Docker service name:

```text
mongodb://mongodb:27017/ecowear
```

---

# 🗄️ Product Database Schema

Products are stored in MongoDB using the following Mongoose schema:

```text
Product
│
├── _id
├── name
├── description
├── price
├── category
├── image
├── stock
├── rating
├── inStock
├── createdAt
└── updatedAt
```

### Product Categories

```text
Men
Women
Footwear
Accessories
All
```

---

# 🌱 Database Seeding

A seed script is included to populate MongoDB with sample EcoWear products.

Run:

```bash
cd ecowear-backend
node seed.js
```

The seed script currently creates sample products including:

| Product                 | Category    |  Price |
| ----------------------- | ----------- | -----: |
| Organic Cotton T-Shirt  | Men         |   ₹899 |
| Eco Summer Dress        | Women       | ₹1,899 |
| Sustainable Denim Jeans | Men         | ���1,999 |
| Eco Hoodie              | Women       | ₹2,499 |
| Recycled Fabric Bag     | Accessories |   ₹699 |
| Eco-Friendly Sneakers   | Footwear    | ₹2,499 |

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend:

```env
PORT=5000
MONGO_URI=mongodb://mongodb:27017/ecowear
JWT_SECRET=ecowear_secret_key
```

> For production, sensitive values such as JWT secrets should be stored using secure environment/secret management instead of committing them to GitHub.

---

# 🚀 Local Setup

## 1. Clone the Repository

```bash
git clone https://github.com/sasmalrohit2004/projects.git
cd projects
```

Navigate to the EcoWear project directory if it is stored inside the repository.

---

## 2. Start the Application with Docker

```bash
docker compose up --build
```

This starts:

```text
Frontend
Backend
MongoDB
```

---

## 3. Seed the Database

Open another terminal:

```bash
cd ecowear-backend
node seed.js
```

---

## 4. Open the Application

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

Products API:

```text
http://localhost:5000/api/products
```

---

# 🧪 API Testing

### Get all products

```bash
curl http://localhost:5000/api/products
```

### Get products by category

```bash
curl "http://localhost:5000/api/products?category=Men"
```

### Get a product by ID

```bash
curl http://localhost:5000/api/products/<PRODUCT_ID>
```

---

# 🔄 CI/CD Pipeline

EcoWear uses **GitHub Actions** to automate the build and deployment workflow.

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Install Dependencies
    ├── Build Application
    ├── Build Docker Images
    ├── Push Images to Docker Hub
    │
    ▼
Docker Hub
    │
    ▼
AWS EC2
    │
    └── Deployment through AWS SSM
```

### CI/CD Benefits

* Automated builds
* Consistent Docker images
* Reduced manual deployment
* Version-controlled infrastructure
* Automated deployment workflow
* Faster development cycle

---

# ☁️ AWS Deployment

The application is prepared for deployment on **AWS EC2**.

Deployment components:

```text
AWS EC2
   │
   ├── Docker
   ├── Docker Compose
   ├── EcoWear Frontend
   ├── EcoWear Backend
   └── MongoDB
```

AWS Systems Manager (SSM) is used as part of the deployment workflow to execute commands on the EC2 instance.

---

# 📊 DevOps Workflow

```text
        CODE
         │
         ▼
      GitHub
         │
         ▼
   GitHub Actions
         │
         ├───────────────┐
         ▼               ▼
      Testing        Docker Build
                         │
                         ▼
                     Docker Hub
                         │
                         ▼
                       AWS
                         │
                         ▼
                      EC2
                         │
                         ▼
                   EcoWear App
```

---

# 🔐 Security Considerations

Current security features include:

* JWT authentication
* Password hashing with bcryptjs
* Protected frontend routes
* Environment variables for configuration
* Authentication middleware prepared for protected product operations

Future production improvements include:

* Role-based authorization
* Secure secret management
* HTTPS
* API rate limiting
* Request validation
* Security headers
* MongoDB authentication
* Production logging and monitoring

---

# 📈 Current Development Status

| Component             | Status |
| --------------------- | ------ |
| MERN Application      | ✅      |
| React Frontend        | ✅      |
| Express Backend       | ✅      |
| MongoDB Integration   | ✅      |
| JWT Authentication    | ✅      |
| Docker                | ✅      |
| Docker Compose        | ✅      |
| Product API           | ✅      |
| Product MongoDB Model | ✅      |
| Product Seed Script   | ✅      |
| GitHub Actions CI/CD  | ✅      |
| Docker Hub            | ✅      |
| AWS EC2 Deployment    | ✅      |
| AWS SSM Deployment    | ✅      |
| Cart & Checkout       | 🔄     |
| Payment Gateway       | 🔄     |
| Admin Dashboard       | 🔄     |
| Advanced Testing      | 🔄     |
| Monitoring & Logging  | 🔄     |

---

# 🔮 Future Improvements

### E-Commerce

* 🛒 Complete cart checkout workflow
* 💳 Razorpay/Stripe payment integration
* 📦 Order management
* ❤️ Wishlist persistence
* 🎟️ Coupon system
* ⭐ Product reviews and ratings

### Admin

* 👨‍💼 Admin dashboard
* ➕ Product creation UI
* ✏️ Product editing
* 🗑️ Product deletion
* 📦 Order management
* 👥 User role management

### DevOps

* 🔐 Production secrets management
* 🧪 Automated unit and integration tests
* 📊 Application monitoring
* 📝 Centralized logging
* 🌐 Nginx reverse proxy
* 🔒 HTTPS with SSL/TLS
* 🏗️ Infrastructure as Code using Terraform
* 📦 Improved production Docker configuration
* 🔄 Blue-green or rolling deployments

---

# 📚 DevOps Concepts Demonstrated

This project demonstrates practical experience with:

* Git & GitHub
* GitHub Actions
* CI/CD
* Docker
* Docker Compose
* Container networking
* Docker Hub
* Environment variables
* REST APIs
* MongoDB
* AWS EC2
* AWS Systems Manager
* Automated deployment
* Microservice-style container architecture

---

# 👨‍💻 Author

**Rohit Sasmal**

B.Tech CSE
Full Stack Developer | MERN | Docker | DevOps

### Technologies

```text
React | Node.js | Express | MongoDB
Docker | GitHub Actions | Docker Hub
AWS EC2 | AWS SSM | Git
```

---

⭐ **EcoWear is an ongoing project focused on combining full-stack development with practical DevOps and cloud deployment workflows.**
