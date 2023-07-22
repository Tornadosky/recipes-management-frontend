import React from "react";
import NavbarComponent from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CategoryComponent from "../components/CategoryComponent/CategoryComponent";
import SearchBar from "../components/SearchBar/SearchBar";
const CategoryPage = () => {
  return (
    <>
      <NavbarComponent />
      <p style={{ "font-size": "50px", "text-align": "center" }}>
        Explore Category
      </p>
      <SearchBar />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <Footer />
    </>
  );
};

export default CategoryPage;
