# EcoWear Admin (Vite + React)

This is a lightweight admin dashboard scaffold that connects to the existing backend endpoints in the main repository.

Setup
1. cd client
2. npm install
3. copy .env.example to .env and set VITE_API_URL (e.g. http://localhost:5000)
4. npm run dev

Features
- Admin protected routes (requires backend user login to return token and user)
- Products list (uses GET /api/products and admin CRUD endpoints)
- Orders list & actions (uses /api/orders endpoints added in Phase 1/2)
- Dashboard with simple charts (react-chartjs-2)

Notes
- The login form posts to /api/users/login. Ensure your backend login endpoint returns { token, user }.
- JWT is stored in localStorage under 'token' and attached to requests by axios instance.
