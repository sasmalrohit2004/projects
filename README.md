# EcoWear 🌱

EcoWear is a full-stack MERN e-commerce web application focused on sustainable and eco-friendly fashion products. The platform allows users to browse products, register/login, manage wishlists, add items to carts, and explore environmentally conscious clothing options.

## 🚀 Features

### User Features

* User Registration and Login
* Secure Authentication
* Browse Products
* Product Details Page
* Shopping Cart
* Wishlist Management
* Responsive Design
* Modern User Interface

### Admin Features

* Product Management
* User Management
* Order Management (Future Enhancement)

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Context API
* Vite
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

## 📂 Project Structure

```
EcoWear/
│
├── ecowear-frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── ecowear-backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/sasmalrohit2004/projects.git
cd projects
```

### Backend Setup

```bash
cd ecowear-backend
npm install
npm start
```

### Frontend Setup

```bash
cd ecowear-frontend
npm install
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file inside the backend folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 🌐 API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

## 📸 Screenshots

Add screenshots of:

* Home Page
* Login Page
* Product Details Page
* Cart Page
* Wishlist Page

## 🔮 Future Enhancements

* Payment Gateway Integration
* Order Tracking
* Product Reviews & Ratings
* Admin Dashboard
* Inventory Management
* Email Notifications

## 👨‍💻 Author

**Rohit Sasmal

GitHub: https://github.com/sasmalrohit2004

## 📄 License

This project is developed for learning, portfolio, and educational purposes.
