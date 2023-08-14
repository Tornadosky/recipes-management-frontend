import { Grid } from "@nextui-org/react";
import React from "react";
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";

const RecipePage = (recipeID) => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <RecipeDetail recipeID={recipeID} />
      </Grid>
    </Grid.Container>
  );
};

export default RecipePage;
