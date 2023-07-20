import React, { useEffect, useState } from "react";
import RecipeListService from "../../services/RecipeListService";
import { Grid, Card, Row, Text } from "@nextui-org/react";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipesByProperties();
  }, []);

  const getRecipesByProperties = () => {
    RecipeListService.getRecipesByProperties().then((response) => {
      setRecipes(response.data);
      console.log(response.data);
    });
  };
  return (
    <div>
      <Grid.Container gap={2} justify="flex-start">
        {recipes.map((recipe, id) => (
          <Grid xs={6} sm={3} key={id}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={recipe.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={recipe.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{recipe.title}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}

export default AllRecipes;
