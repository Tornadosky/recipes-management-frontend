import React from "react";
import Footer from "../components/Footer/Footer";
import CategoryComponent from "../components/CategoryComponent/CategoryComponent";
import SearchBar from "../components/SearchBar/SearchBar";
import { Col, Row } from "@nextui-org/react";

const CategoryPage = () => {
  return (
    <Col>
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
    </Col>
  );
};

export default CategoryPage;
