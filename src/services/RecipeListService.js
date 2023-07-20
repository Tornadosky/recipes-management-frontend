import axios from "axios";

const ALL_RECIPE_REST_API_URL = "http://localhost:8080/api/recipes";

class RecipeListService {
  getRecipesByProperties() {
    return axios.get(ALL_RECIPE_REST_API_URL);
  }
}
const Recipe = new RecipeListService();

export default Recipe;
