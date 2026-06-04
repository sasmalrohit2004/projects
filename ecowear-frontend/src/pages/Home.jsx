import { useState, useRef } from "react";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = () => {
  const featuredRef = useRef(null);

  const allProducts = [
    { name: "Organic Cotton T-Shirt", price: 899, category: "Men" },
    { name: "Sustainable Denim Jeans", price: 1999, category: "Men" },
    { name: "Eco Hoodie", price: 2499, category: "Women" },
    { name: "Recycled Fabric Bag", price: 699, category: "Women" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const filterByCategory = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((p) => p.category === category)
      );
    }

    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
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
