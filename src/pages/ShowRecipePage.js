import { Grid, Row } from "@nextui-org/react";
import React from "react";
import RecipeComponent from "../components/RecipeComponent/RecipeComponent";
import SearchBar from "../components/SearchBar/SearchBar";

const ShowRecipePage = (searchKey) => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <Row>
          <SearchBar searchKey={searchKey} />
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

export default ShowRecipePage;
