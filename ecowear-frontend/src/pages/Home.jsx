import { useState, useRef } from "react";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import products from "../data/products";
const Home = () => {
  const featuredRef = useRef(null);

 const allProducts = products;

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const filterByCategory = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === category)
      );
    }

    featuredRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Hero
        filterByCategory={filterByCategory}
        selectedCategory={selectedCategory}
      />

      <Categories
        filterByCategory={filterByCategory}
        selectedCategory={selectedCategory}
      />

      <FeaturedProducts
        products={filteredProducts}
        refProp={featuredRef}
      />
    </>
  );
};

export default Home;