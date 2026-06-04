const Hero = ({ filterByCategory, selectedCategory }) => {
  const getBtnClass = (category) =>
    selectedCategory === category
      ? "btn btn-light btn-lg"
      : "btn btn-outline-light btn-lg";

  return (
    <section
      className="py-5 text-white"
      style={{ background: "linear-gradient(to right, #43cea2, #185a9d)" }}
    >
      <div className="container">
        <h1 className="fw-bold mb-4 display-5">
          Ethical Fashion That Cares 🌱
        </h1>

        <div className="d-flex gap-2 flex-wrap">
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
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
