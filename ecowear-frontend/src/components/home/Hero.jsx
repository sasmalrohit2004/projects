import { motion } from "framer-motion";

const Hero = ({ filterByCategory, selectedCategory }) => {
  const getBtnClass = (category) =>
    selectedCategory === category
      ? "btn btn-light btn-lg"
      : "btn btn-outline-light btn-lg";

  return (
    <section
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #43cea2, #185a9d)",
      }}
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-3 fw-bold mb-4">
            Sustainable Fashion
            <br />
            For A Better Future 🌱
          </h1>

          <p className="lead mb-4">
            Discover eco-friendly clothing made from sustainable materials.
            Look good while helping the planet.
          </p>

          <div className="d-flex gap-3 flex-wrap">

            <button
              className={getBtnClass("Men")}
              onClick={() => filterByCategory("Men")}
            >
              Shop Men
            </button>

            <button
              className={getBtnClass("Women")}
              onClick={() => filterByCategory("Women")}
            >
              Shop Women
            </button>

            <button
              className={getBtnClass("All")}
              onClick={() => filterByCategory("All")}
            >
              View Collection
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;