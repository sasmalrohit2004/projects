// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { WishlistProvider } from "./context/WishlistContext";

// AOS (Animate On Scroll)
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS
AOS.init({ duration: 800, once: true });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </React.StrictMode>
);