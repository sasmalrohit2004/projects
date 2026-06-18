import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { wishlist } = useContext(WishlistContext);
  const { cart } = useContext(CartContext);

  const token = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success" to="/">
          ECOWEAR
        </Link>

           <p>{token ? "LOGGED IN" : "LOGGED OUT"}</p>
           
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
  <Link className="nav-link" to="/login">
    Login
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link" to="/register">
    Register
  </Link>
</li>

            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                ❤️ Wishlist ({wishlist.length})
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                🛒 Cart ({cart.length})
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;