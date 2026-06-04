import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <p>More details coming soon 🚧</p>
    </div>
  );
};

export default ProductDetails;
