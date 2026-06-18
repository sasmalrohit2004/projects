import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
  const savedWishlist = localStorage.getItem("wishlist");

  return savedWishlist ? JSON.parse(savedWishlist) : [];
});

useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);

  const toggleWishlist = (product) => {
    const exists = wishlist.find((p) => p.name === product.name);
    if (exists) {
      // Remove from wishlist
      setWishlist(wishlist.filter((p) => p.name !== product.name));
    } else {
      // Add to wishlist
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
