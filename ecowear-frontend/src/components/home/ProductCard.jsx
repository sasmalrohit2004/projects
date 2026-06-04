// src/components/home/ProductCard.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";

const ProductCard = ({ product, index, onQuickView }) => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const isWishlisted = wishlist.some((p) => p.name === product.name);

  return (
    <div className="card product-card border-0 h-100 shadow-sm">
      <Link
        to={`/product/${index}`}
        className="text-decoration-none text-dark"
      >
        {/* IMAGE SECTION */}
        <div className="product-img-wrapper position-relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top"
            style={{ height: "260px", objectFit: "cover" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/300x260?text=ECOWEAR";
            }}
          />

          {/* Wishlist Heart */}
          <button
            className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault(); // prevent navigation
              e.stopPropagation();
              toggleWishlist(product);
            }}
          >
            {isWishlisted ? "❤️" : "🤍"}
          </button>

          {/* Quick View Button */}
          {onQuickView && (
            <button
              className="quick-view-btn"
              onClick={(e) => {
                e.preventDefault(); // prevent navigation
                e.stopPropagation();
                onQuickView(product);
              }}
            >
              Quick View
            </button>
          )}
        </div>

        {/* PRODUCT INFO */}
        <div className="card-body text-center">
          <h6 className="fw-bold">{product.name}</h6>
          <p className="text-muted mb-2">₹ {product.price}</p>

          <button
            className="btn btn-sm btn-outline-dark w-100"
            onClick={(e) => e.preventDefault()}
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
