🌿 EcoWear – Full Stack MERN E-Commerce & DevOps Project

EcoWear is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce application developed as a practical project for learning full-stack development, Docker, CI/CD, cloud deployment, reverse proxying, and HTTPS.

The application is now deployed through a real DevOps pipeline:

Developer
   │
   │ git push
   ▼
GitHub
   │
   ▼
GitHub Actions (CI/CD)
   │
   ├── Install dependencies
   ├── Build frontend
   ├── Build Docker images
   ├── Login to Docker Hub
   ├── Push frontend image
   ├── Push backend image
   ├── Authenticate to AWS using OIDC
   └── Deploy to EC2 using AWS Systems Manager
   │
   ▼
Docker Hub
   │
   ▼
AWS EC2
   │
   ├── Nginx :80 / :443
   ├── Frontend :5173
   ├── Backend :5000
   └── MongoDB :27017
   │
   ▼
EcoWear

🚀 Application Features

Authentication

JWT-based authentication

User registration and login

Password hashing with bcryptjs

Protected application routes

Logout functionality

Product Management

Product catalogue stored in MongoDB

View all products

Filter products by category

View individual products

Create, update, and delete product endpoints

Stock information

Product ratings

Product availability status

E-Commerce UI

Product catalogue

Product details

Shopping cart

Wishlist

Protected user pages

Category browsing

🌐 REST API

The backend is implemented with Express.js, Mongoose, and REST APIs.

Method

Endpoint

Description

GET

/api/products

Get all products

GET

/api/products?category=Men

Get products by category

GET

/api/products/:id

Get one product

POST

/api/products

Create a product

PUT

/api/products/:id

Update a product

DELETE

/api/products/:id

Delete a product

Product write operations are prepared for authentication/authorization protection.

🛠️ Technology Stack

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

Nodemon for development

DevOps & Cloud

Git

GitHub

GitHub Actions

Docker

Docker Compose

Docker Hub

AWS EC2

Amazon Linux 2023

AWS Systems Manager (SSM)

AWS IAM OIDC authentication for GitHub Actions

Nginx

DuckDNS

Let's Encrypt / Certbot

📁 Project Structure

ecowear/
│
├── ecowear-frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
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

🐳 Docker Architecture

EcoWear uses Docker Compose for the local multi-container environment.

                 Docker Compose
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Frontend         Backend        MongoDB
    :5173             :5000          :27017
        │              │
        └────── ecowear-network ──────┘

The backend connects to MongoDB using the Docker service name:

mongodb://mongodb:27017/ecowear

This is important because localhost inside a container refers to that same container. Containers communicate through Docker service/container names.

🗄️ Product Database Schema

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

A seed script is included to populate MongoDB with sample products.

From the backend directory:

node seed.js

Example products include:

Product

Category

Price

Organic Cotton T-Shirt

Men

₹899

Eco Summer Dress

Women

₹1,899

Sustainable Denim Jeans

Men

₹1,999

Eco Hoodie

Women

₹2,499

Recycled Fabric Bag

Accessories

₹699

Eco-Friendly Sneakers

Footwear

₹2,499

🔐 Environment Variables

The backend uses a .env file with variables such as:

PORT=5000
MONGO_URI=mongodb://mongodb:27017/ecowear
JWT_SECRET=your-secret-value

Do not commit real secrets to GitHub. Production secrets should be stored using secure secret-management mechanisms.

On the EC2 deployment, the backend receives environment variables from a server-side environment file rather than storing those values in the GitHub repository.

💻 Local Setup on Windows

1. Clone the repository

git clone https://github.com/sasmalrohit2004/projects.git
cd projects

2. Install dependencies

Frontend:

cd ecowear-frontend
npm install

Backend:

cd ..\ecowear-backend
npm install

3. Run with Docker Compose

From the repository root:

docker compose up --build

This starts:

Frontend on http://localhost:5173

Backend on http://localhost:5000

MongoDB on localhost:27017

4. Check containers

docker compose ps

⚙️ CI/CD Pipeline

The GitHub Actions workflow is named EcoWear CI/CD and runs on pushes to the main branch.

Current workflow stages:

Git push
   ↓
GitHub Actions
   ↓
Checkout source
   ↓
Setup Node.js
   ↓
Install frontend dependencies
   ↓
Build frontend
   ↓
Install backend dependencies
   ↓
Docker Hub login
   ↓
Build frontend image
   ↓
Build backend image
   ↓
Push images to Docker Hub
   ↓
AWS IAM OIDC authentication
   ↓
AWS Systems Manager
   ↓
EC2 deployment

Docker Hub Images

sasmalrohit2004/ecowear-frontend:latest
sasmalrohit2004/ecowear-backend:latest

GitHub Secrets

The workflow uses GitHub Actions repository secrets for Docker Hub authentication:

DOCKERHUB_USERNAME
DOCKERHUB_TOKEN

The Docker Hub token is not stored in the workflow file.

AWS Authentication

GitHub Actions authenticates to AWS using IAM OIDC and assumes the deployment role:

GitHubActions-EcoWear-CD

AWS Systems Manager then sends deployment commands to the EC2 instance.

☁️ AWS EC2 Deployment

The production-like environment uses:

AWS EC2

Amazon Linux 2023

Docker

Docker containers

MongoDB

Nginx

AWS Systems Manager

The deployment pulls the latest Docker Hub frontend and backend images and recreates the application containers.

The EC2 server also maintains a MongoDB container and Docker network used by the deployed application.

Important EC2 Resource Note

The EC2 instance has a small root disk, so Docker image cleanup is important. During deployment, old dangling images consumed most of the disk space and caused a no space left on device error. The unused dangling images were removed safely, recovering approximately 2.96 GB of disk space.

For a production environment, the server should use adequate storage and automated image/log cleanup.

🌐 Nginx Reverse Proxy

Nginx is used as the reverse proxy in front of the EcoWear containers.

Internet
   ↓
Nginx :80 / :443
   ├── Frontend → 127.0.0.1:5173
   └── Backend  → 127.0.0.1:5000

Users no longer need to access the application through port 5173 directly when using the public hostname.

🔒 HTTPS

HTTPS is configured using:

DuckDNS for a free hostname

Let's Encrypt for a free TLS certificate

Certbot for certificate installation and management

Nginx for HTTPS termination

Current public URL

https://ecowearstore.duckdns.org

HTTP traffic is handled by Nginx and HTTPS is served using the Let's Encrypt certificate.

The DuckDNS hostname is used for learning and demonstration. A production application would normally use a domain owned by the project/company.

🧪 API Testing

Example requests:

curl http://localhost:5000/api/products

Category filter:

curl "http://localhost:5000/api/products?category=Men"

Single product:

curl http://localhost:5000/api/products/<PRODUCT_ID>

🔐 Security Considerations

Current project security includes:

JWT authentication

Password hashing with bcryptjs

Protected frontend routes

Environment variables

GitHub Actions secrets for Docker Hub authentication

AWS IAM OIDC instead of storing long-lived AWS keys in the workflow

HTTPS using Let's Encrypt

Future security improvements:

Role-based authorization

Production secret management

API rate limiting

Request validation

Security headers

MongoDB authentication and hardening

Better network isolation

Regular dependency/security scanning

📊 Current Development Status

Component

Status

MERN Application

✅

React Frontend

✅

Express Backend

✅

MongoDB Integration

✅

JWT Authentication

✅

Product API

✅

Product Model

✅

Product Seed Script

✅

Docker

✅

Docker Compose

✅

Docker Networking

✅

GitHub Actions CI/CD

✅

Docker Hub Publishing

✅

AWS EC2 Deployment

✅

AWS SSM Deployment

✅

Nginx Reverse Proxy

✅

HTTPS / TLS

✅

Free DNS (DuckDNS)

✅

Kubernetes

⏳

Terraform

⏳

Monitoring / Logging

⏳

Advanced Automated Testing

⏳

Production Secret Management

⏳

🔮 Next DevOps Roadmap

The next learning stages are intentionally not completed yet:

Git / GitHub
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

Planned Kubernetes Work

Container orchestration

Deployments

Services

ConfigMaps

Secrets

Health checks

Scaling

Rolling updates

Planned Infrastructure as Code

Terraform for AWS infrastructure

Reproducible infrastructure

Variables and outputs

State management

Planned Observability

Application logs

Container logs

Monitoring

Metrics

Health checks

Alerts

📚 DevOps Concepts Demonstrated

This project currently demonstrates practical experience with:

Git and GitHub

Git branching and commits

GitHub Actions

CI/CD

Docker images and containers

Docker Compose

Docker networking

Docker Hub

Environment variables and secrets

REST APIs

MongoDB

AWS EC2

AWS Systems Manager

AWS IAM OIDC

Nginx reverse proxy

DNS

TLS/HTTPS

Let's Encrypt

Automated cloud deployment

👨‍💻 Author

Rohit Sasmal

B.Tech CSE
Full Stack Developer | MERN | Docker | DevOps

Technologies

React | Node.js | Express | MongoDB
Docker | GitHub Actions | Docker Hub
AWS EC2 | AWS SSM | Nginx | HTTPS | Git

⭐ EcoWear is an ongoing learning project focused on combining full-stack development with practical DevOps, CI/CD, containerization, cloud deployment, and infrastructure automation.
