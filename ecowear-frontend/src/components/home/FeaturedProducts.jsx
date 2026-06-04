// src/components/home/FeaturedProducts.jsx
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ refProp }) => {
 const products = [
  {
    name: "Organic Cotton T-Shirt",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=600&q=80",
    category: "Men",
  },
  {
    name: "Sustainable Denim Jeans",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    category: "Men",
  },
  {
    name: "Eco Hoodie",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    category: "Women",
  },
  {
    name: "Recycled Fabric Bag",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
    category: "Women",
  },
];


  return (
    <section className="py-5 bg-light" ref={refProp}>
      <div className="container">
        <h3 className="fw-bold mb-4 text-center">🌟 Featured Products</h3>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
