# 🌿 EcoWear – Full Stack MERN E-Commerce & DevOps Project

EcoWear is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** e-commerce application designed to demonstrate modern full-stack development and practical **DevOps, CI/CD, containerization, cloud deployment, reverse proxy, and HTTPS** practices.

The project uses a **Dockerized multi-container architecture** with React, Node.js/Express, and MongoDB. It also includes REST APIs, JWT authentication, product management, database seeding, GitHub Actions CI/CD, Docker Hub image publishing, AWS EC2 deployment, Nginx reverse proxy, DuckDNS DNS, and free HTTPS using Let's Encrypt.

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

---

# 🐳 DevOps & Containerization

EcoWear is fully containerized using Docker.

- 🐳 Dockerized frontend
- 🐳 Dockerized backend
- 🍃 MongoDB container
- 🧩 Docker Compose
- 🌐 Docker container networking
- 🔐 Environment variable configuration
- 📦 Docker image builds
- ☁️ Docker Hub image publishing

### Docker Images

Frontend:

```text
sasmalrohit2004/ecowear-frontend:latest

Backend:

sasmalrohit2004/ecowear-backend:latest
⚙️ CI/CD Pipeline

EcoWear uses GitHub Actions to automate application building, Docker image creation, Docker Hub publishing, and AWS deployment.

CI/CD Flow
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Checkout code
    ├── Setup Node.js
    ├── Install frontend dependencies
    ├── Build frontend
    ├── Install backend dependencies
    ├── Login to Docker Hub
    ├── Build frontend Docker image
    ├── Build backend Docker image
    ├── Push frontend image
    └── Push backend image
            │
            ▼
        Docker Hub
            │
            ▼
      AWS Authentication
         using OIDC
            │
            ▼
        AWS Systems
        Manager (SSM)
            │
            ▼
          AWS EC2
            │
            ├── Pull frontend image
            ├── Pull backend image
            ├── Replace old containers
            └── Start new containers
GitHub Actions

Workflow file:

.github/workflows/ci.yml

The workflow is triggered when code is pushed to the main branch.

☁️ AWS EC2 Deployment

EcoWear is deployed on AWS EC2 using:

Amazon Linux 2023
Docker
Docker images pulled from Docker Hub
AWS Systems Manager (SSM)
GitHub Actions
OIDC-based AWS authentication
EC2 Services
AWS EC2
│
├── Docker
│
├── Frontend
│   └── Port 5173
│
├── Backend
│   └── Port 5000
│
└── MongoDB
    └── Port 27017
🌐 Nginx Reverse Proxy

Nginx is used as a reverse proxy in front of the EcoWear application.

Request Flow
Internet
    │
    ▼
AWS EC2 :80 / :443
    │
    ▼
   Nginx
    │
    ├──────────────► Frontend :5173
    │
    └──────────────► Backend :5000

This allows users to access the application without directly specifying the frontend port.

🌍 DNS

A free DuckDNS hostname is used for the deployed application.

ecowearstore.duckdns.org

The hostname points to the EC2 public IP.

🔒 HTTPS / SSL

HTTPS has been configured using:

Let's Encrypt
Certbot
Nginx

Current HTTPS URL:

https://ecowearstore.duckdns.org

HTTP traffic is redirected to HTTPS through the Nginx configuration.

The certificate is managed by Certbot and can be renewed automatically.

🛠️ Tech Stack
Frontend
React.js
Vite
Bootstrap
React Router DOM
Axios
Framer Motion
React Icons
AOS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs
CORS
dotenv
REST API
DevOps / Cloud
Git
GitHub
GitHub Actions
Docker
Docker Compose
Docker Hub
AWS EC2
AWS Systems Manager
AWS IAM
GitHub Actions OIDC
Nginx
DuckDNS
Let's Encrypt
Certbot
📁 Project Structure
projects/
│
├── ecowear-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── App.jsx
│   │
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── ecowear-backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed.js
│   ├── server.js
│   ├── Dockerfile
│   ├── package.json
│   └── .env
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
└── README.md
🏗️ System Architecture
                         ┌─────────────────────┐
                         │       GitHub        │
                         │     Source Code     │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   GitHub Actions    │
                         │       CI / CD       │
                         └──────────┬──────────┘
                                    │
                           Docker Build & Push
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     Docker Hub      │
                         │                     │
                         │ Frontend Image      │
                         │ Backend Image       │
                         └──────────┬──────────┘
                                    │
                                Docker Pull
                                    │
                                    ▼
                   ┌─────────────────────────────────┐
                   │             AWS EC2             │
                   │                                 │
                   │              Nginx              │
                   │           :80 / :443            │
                   │               │                 │
                   │       ┌───────┴───────┐         │
                   │       ▼               ▼         │
                   │   Frontend         Backend      │
                   │      :5173           :5000      │
                   │                        │         │
                   │                        ▼         │
                   │                     MongoDB     │
                   │                      :27017     │
                   └─────────────────────────────────┘
                                    │
                                    ▼
                                  Users
🐳 Docker Architecture

EcoWear runs as multiple containers using Docker Compose.

┌───────────────────────────────────────────────┐
│                 Docker Compose                │
│                                               │
│  ┌─────────────┐                              │
│  │  Frontend   │                              │
│  │ React + Vite│                              │
│  │    :5173    │                              │
│  └──────┬──────┘                              │
│         │                                     │
│         ▼                                     │
│  ┌─────────────┐                              │
│  │   Backend   │                              │
│  │ Node/Express│                              │
│  │    :5000    │                              │
│  └──────┬──────┘                              │
│         │                                     │
│         ▼                                     │
│  ┌─────────────┐                              │
│  │   MongoDB   │                              │
│  │    :27017   │                              │
│  └─────────────┘                              │
│                                               │
│        Docker Network: ecowear-network       │
└───────────────────────────────────────────────┘

The backend connects to MongoDB using the Docker service name:

mongodb://mongodb:27017/ecowear

Inside Docker, localhost refers to the same container. Container-to-container communication therefore uses service names such as mongodb.

🗄️ Product Database Schema

Products are stored in MongoDB using the following structure:

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
Product Categories
Men
Women
Footwear
Accessories
All
🌱 Database Seeding

A seed script is included to populate MongoDB with sample EcoWear products.

Run:

cd ecowear-backend
node seed.js

Example products include:

Product	Category	Price
Organic Cotton T-Shirt	Men	₹899
Eco Summer Dress	Women	₹1,899
Sustainable Denim Jeans	Men	₹1,999
Eco Hoodie	Women	₹2,499
Recycled Fabric Bag	Accessories	₹699
Eco-Friendly Sneakers	Footwear	₹2,499
⚙️ Environment Variables

The backend uses environment variables for configuration.

Example:

PORT=5000
MONGO_URI=mongodb://mongodb:27017/ecowear
JWT_SECRET=your_secret_here

Never commit real secrets, passwords, API keys, or tokens to GitHub.

Production secrets should be stored using secure secret-management solutions.

🚀 Local Setup
1. Clone the Repository
git clone https://github.com/sasmalrohit2004/projects.git
cd projects
2. Install Frontend Dependencies
cd ecowear-frontend
npm install
3. Install Backend Dependencies
cd ../ecowear-backend
npm install
4. Start with Docker Compose

From the project root:

docker compose up --build

This starts:

Frontend
Backend
MongoDB
5. Open the Local Application

Frontend:

http://localhost:5173

Backend:

http://localhost:5000

Products API:

http://localhost:5000/api/products
🧪 API Testing
Get all products
curl http://localhost:5000/api/products
Get products by category
curl "http://localhost:5000/api/products?category=Men"
Get a product by ID
curl http://localhost:5000/api/products/<PRODUCT_ID>
🔐 GitHub Secrets

Docker Hub credentials are stored as GitHub Actions repository secrets.

The workflow uses:

DOCKERHUB_USERNAME
DOCKERHUB_TOKEN

These secrets are used by GitHub Actions for secure Docker Hub authentication.

Never store Docker Hub credentials directly inside the workflow file or source code.

🔑 AWS Authentication

GitHub Actions uses OIDC-based authentication to assume an AWS IAM role.

This avoids storing long-lived AWS access keys inside GitHub Secrets.

GitHub Actions
      │
      ▼
GitHub OIDC
      │
      ▼
AWS IAM Role
      │
      ▼
Temporary AWS Credentials
      │
      ▼
AWS Systems Manager
      │
      ▼
EC2
🧹 EC2 Docker Storage Management

The EC2 instance uses limited root storage.

During deployment, Docker storage reached 100% usage because of old unused images.

The issue was identified using:

df -h

and:

sudo docker system df

Unused dangling images were safely removed using:

sudo docker image prune -f

This recovered several gigabytes of disk space without removing the MongoDB volume or running application containers.

Because the EC2 instance has limited storage, Docker image cleanup should be monitored during future deployments.

📊 Current Development Status
Component	Status
MERN Application	✅
React Frontend	✅
Express Backend	✅
MongoDB Integration	✅
JWT Authentication	✅
Product API	✅
Product MongoDB Model	✅
Product Seed Script	✅
Docker	✅
Docker Compose	✅
Docker Networking	✅
GitHub	✅
GitHub Actions CI/CD	✅
Docker Hub Publishing	✅
AWS EC2	✅
AWS SSM Deployment	✅
AWS OIDC Authentication	✅
Nginx Reverse Proxy	✅
DuckDNS	✅
HTTPS / Let's Encrypt	✅
Cart & Checkout	🔄
Payment Gateway	🔄
Advanced Testing	🔄
Monitoring & Logging	🔄
Kubernetes	⏳
Terraform	⏳
🌍 Current Deployment

EcoWear is currently available at:

https://ecowearstore.duckdns.org
Deployment Flow
Developer
   │
   ▼
Git Push
   │
   ▼
GitHub
   │
   ▼
GitHub Actions
   │
   ├── Build application
   ├── Build Docker images
   └── Push images
          │
          ▼
      Docker Hub
          │
          ▼
     AWS EC2
          │
          ▼
       Nginx
          │
          ▼
        HTTPS
          │
          ▼
       EcoWear
🔐 Security Considerations

Current security features include:

JWT authentication
Password hashing with bcryptjs
Protected frontend routes
Environment variables
GitHub Actions Secrets
AWS OIDC authentication
HTTPS using Let's Encrypt
Nginx reverse proxy

Future security improvements:

Role-based authorization
Production secret management
API rate limiting
Request validation
Security headers
MongoDB authentication
Centralized logging
Monitoring
Least-privilege IAM policies
🔮 Future DevOps Roadmap

The next planned stages are:

Git & GitHub
      ↓
Docker
      ↓
Docker Compose
      ↓
GitHub Actions CI/CD
      ↓
Docker Hub
      ↓
AWS EC2
      ↓
Nginx
      ↓
HTTPS
      ↓
Kubernetes
      ↓
Terraform
      ↓
Monitoring & Logging
Planned technologies
☸️ Kubernetes
🏗️ Terraform
📊 Monitoring
📝 Centralized logging
🔄 Improved CI/CD
🔐 Production secret management
📦 Improved production containers
🔵 Blue-green / rolling deployments
📚 DevOps Concepts Demonstrated

This project demonstrates practical experience with:

Git & GitHub
GitHub Actions
CI/CD
Docker
Docker Compose
Docker networking
Docker Hub
Environment variables
REST APIs
MongoDB
AWS EC2
AWS IAM
GitHub OIDC
AWS Systems Manager
Nginx
DNS
HTTPS
Let's Encrypt
Certbot
Automated deployment
Containerized application architecture
👨‍💻 Author

Rohit Sasmal

B.Tech CSE
Full Stack Developer | MERN | Docker | DevOps

Technologies
React | Node.js | Express | MongoDB
Docker | Docker Compose | GitHub Actions
Docker Hub | AWS EC2 | AWS SSM
Nginx | HTTPS | Let's Encrypt

⭐ EcoWear is an ongoing project focused on combining full-stack development with practical DevOps, cloud deployment, automation, and infrastructure technologies.


One thing I deliberately changed from your old README: **HTTPS, Nginx, DuckDNS, AWS OIDC, and EC2 deployment are now mar
