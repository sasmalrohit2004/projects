import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container py-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-5">

        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="col-md-6">

          <span className="badge bg-success mb-3">
            {product.category}
          </span>

          <h1 className="fw-bold">
            {product.name}
          </h1>

          <h2 className="text-success my-3">
            ₹{product.price}
          </h2>

          <p className="lead">
            {product.description}
          </p>

          <button className="btn btn-success btn-lg">
            Add To Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;