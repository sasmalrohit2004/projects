import { motion } from "framer-motion";

const Categories = ({ filterByCategory, selectedCategory }) => {
  const categories = [
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800",
  },
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
  },
  {
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
  },
  {
    name: "All",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
  },
];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Shop By Category
        </h2>

        <div className="row g-4">
          {categories.map((cat) => (
            <div className="col-md-4" key={cat.name}>
              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <div
                  className={`card border-0 shadow-lg overflow-hidden ${
                    selectedCategory === cat.name
                      ? "border border-success border-3"
                      : ""
                  }`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "20px",
                  }}
                  onClick={() => filterByCategory(cat.name)}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body text-center py-4">
                    <h4 className="fw-bold">{cat.name}</h4>

                    <button className="btn btn-success mt-2 px-4 rounded-pill">
                      Explore
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;