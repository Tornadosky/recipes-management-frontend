import { Grid, Link, Row } from "@nextui-org/react";
import React from "react";
import CategoryComponent from "../components/CategoryComponent/CategoryComponent";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";

const CategoryPage = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <p style={{ "font-size": "50px", "text-align": "center" }}>
          Choose your{" "}
          <span style={{ "font-weight": "700", color: "#F72D57" }}>
            Category
          </span>
        </p>
        <Row>
          <SearchBar />
        </Row>
        <Row>
          <Link href="/eachcategory">
            <CategoryComponent />
          </Link>
          <Link href="/eachcategory">
            <CategoryComponent />
          </Link>
        </Row>
        <Row>
          <Link href="/eachcategory">
            <CategoryComponent />
          </Link>
          <Link href="/eachcategory">
            <CategoryComponent />
          </Link>
        </Row>
      </Grid>
      <Footer />
    </Grid.Container>
  );
};

export default CategoryPage;
