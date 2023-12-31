import React from "react";
import Footer from "../components/Footer/Footer";
import RecipeComponent from "../components/RecipeComponent/RecipeComponent";
import SearchBar from "../components/SearchBar/SearchBar";
import { Row, Grid } from "@nextui-org/react";

const CategoryEachPage = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <p style={{ fontSize: "50px", textAlign: "center" }}>
          Explore{" "}
          <span style={{ fontWeight: "700", color: "#F72D57" }}>
            Chosen Category
          </span>
        </p>
        <Row>
          <SearchBar />
        </Row>
        <Row>
          <RecipeComponent />
          <RecipeComponent />
        </Row>
        <Row>
          <RecipeComponent />
          <RecipeComponent />
        </Row>
      </Grid>
      <Footer />
    </Grid.Container>
  );
};

export default CategoryEachPage;
