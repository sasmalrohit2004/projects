import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import ProductCard from "../components/home/ProductCard";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {wishlist.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
