import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="card mb-3 p-3"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p className="mb-0">
                    ₹{item.price}
                  </p>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 className="mt-4">
            Total: ₹{total}
          </h3>
        </>
      )}
    </div>
  );
};

export default Cart;