// src/components/home/FeaturedProducts.jsx

import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products, refProp }) => {
  return (
    <section className="py-5 bg-light" ref={refProp}>
      <div className="container">

        {/* SECTION HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Featured Products
          </h2>

          <p className="text-muted">
            Sustainable fashion designed for comfort, style and the planet.
          </p>

          <span className="badge bg-success fs-6 px-3 py-2">
            {products.length} Products Available
          </span>
        </div>

        {/* EMPTY STATE */}
        {products.length === 0 ? (
          <div className="text-center py-5">
            <h4>No products found</h4>
            <p className="text-muted">
              Try selecting another category.
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {products.map((product, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12"
                key={index}
              >
                <ProductCard
                  product={product}
                  index={index}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
