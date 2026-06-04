const Categories = ({ filterByCategory, selectedCategory }) => {
  const categories = [
    { name: "Men", image: "https://via.placeholder.com/300x200" },
    { name: "Women", image: "https://via.placeholder.com/300x200" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h3 className="fw-bold text-center mb-4">Shop by Category</h3>

        <div className="row">
          {categories.map((cat) => (
            <div className="col-md-6" key={cat.name}>
              <div
                className={`card h-100 shadow-sm category-card ${
                  selectedCategory === cat.name ? "border-dark border-3" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => filterByCategory(cat.name)}
              >
                <img
                  src={cat.image}
                  className="card-img-top"
                  alt={cat.name}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{cat.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
