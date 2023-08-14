import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import CategoryComponent from "../components/CategoryComponent/CategoryComponent";
import SearchBar from "../components/SearchBar/SearchBar";
import { Grid, Link } from "@nextui-org/react";

const CategoryPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call or data fetching process
    const fetchItems = async () => {
      // Simulate delay using setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Fetch or set your items data
      const response = await fetch("/api/recipes");
      const data = await response.json();
      setRecipes(data);

      setIsLoading(false);
    };

    fetchItems();
  }, []);

  // log all recipes
  console.log(recipes);

  // get categories
  let categories = [recipes.map((item) => item.categories)];
  let flattened_cats = categories.flat(Infinity);
  let uniqueCategorisArr = [...new Set(flattened_cats)];
  console.log(uniqueCategorisArr);

  // get one image from every category
  const categoryImgs = {};

  for (let i = 0; i < uniqueCategorisArr.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      if (recipes[j].categories.includes(uniqueCategorisArr[i])) {
        categories = {
          ...categories,
          [uniqueCategorisArr[i]]: recipes[j].imageURL,
        };
        break;
      }
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid.Container gap={2} justify="center">
      <Grid css={{ width: "100%" }}>
        <p style={{ fontSize: "50px", textAlign: "center" }}>
          Choose your{" "}
          <span style={{ fontWeight: "700", color: "#F72D57" }}>Category</span>
        </p>
        {/*  */}
      </Grid>
      <Grid css={{ width: "100%" }}>
        <SearchBar />
      </Grid>
      {uniqueCategorisArr.map((recipe, index) => (
        <Link href="/eachcategory" key={index}>
          <CategoryComponent
            img={categories[recipe]}
            title={recipe.toUpperCase()}
          />
        </Link>
      ))}
      <Grid xs={12} css={{ padding: "0" }}>
        <Footer />
      </Grid>
    </Grid.Container>
  );
};

export default CategoryPage;
