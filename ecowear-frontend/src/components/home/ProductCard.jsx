import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaStar,
} from "react-icons/fa";

const ProductCard = ({ product, index, onQuickView }) => {
 const { wishlist, toggleWishlist } = useContext(WishlistContext);
const { addToCart } = useContext(CartContext);

  const isWishlisted = wishlist.some(
    (p) => p.name === product.name
  );

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.2,
      }}
      className="h-100"
    >
      <div
        className="card border-0 shadow-lg h-100"
        style={{
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        <Link
          to={`/product/${product.id}`}
          className="text-decoration-none text-dark"
        >
          {/* IMAGE SECTION */}
          <div className="position-relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top"
              style={{
                height: "280px",
                objectFit: "cover",
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/400x300?text=EcoWear";
              }}
            />

            {/* CATEGORY BADGE */}
            <span
              className="badge bg-success position-absolute top-0 start-0 m-2"
            >
              {product.category}
            </span>

            {/* WISHLIST BUTTON */}
            <button
              className="btn btn-light rounded-circle shadow position-absolute top-0 end-0 m-2"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(product);
              }}
            >
              <FaHeart
                color={isWishlisted ? "red" : "gray"}
              />
            </button>
          </div>

          {/* PRODUCT INFO */}
          <div className="card-body d-flex flex-column">
            <h5 className="fw-bold mb-2">
              {product.name}
            </h5>

            {/* RATING */}
            <div className="mb-2 text-warning">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <small className="text-muted ms-2">
                (4.8)
              </small>
            </div>

            {/* PRICE */}
            <h4 className="text-success fw-bold mb-3">
              ₹{product.price}
            </h4>

            <div className="mt-auto d-grid gap-2">
              {/* ADD TO CART */}
              <button
  className="btn btn-success"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  }}
>
  <FaShoppingCart className="me-2" />
  Add To Cart
</button>

              {/* QUICK VIEW */}
              {onQuickView && (
                <button
                  className="btn btn-outline-dark"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onQuickView(product);
                  }}
                >
                  <FaEye className="me-2" />
                  Quick View
                </button>
              )}
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;