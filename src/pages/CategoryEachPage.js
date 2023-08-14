import { Grid, Row } from "@nextui-org/react";
import React from "react";
import RecipeComponent from "../components/RecipeComponent/RecipeComponent";
import SearchBar from "../components/SearchBar/SearchBar";

const CategoryEachPage = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <p style={{ "font-size": "50px", "text-align": "center" }}>
          Explore{" "}
          <span style={{ "font-weight": "700", color: "#F72D57" }}>
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
    </Grid.Container>
  );
};

export default CategoryEachPage;
