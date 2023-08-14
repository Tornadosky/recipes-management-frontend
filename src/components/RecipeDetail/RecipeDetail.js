import React, { useState } from "react";
import { IoHeart, IoTimeOutline } from "react-icons/io5";
import * as S from "./RecipeDetail.style";
import menu from "./menu.json";

const RecipeDetail = ({ recipeID = "6467d38aa4725c2a87bb5209" }) => {
  const [ingredientSelected, setSelection] = useState(true);
  const [portion, setPortion] = useState(1);
  const selectIngredient = () => {
    setSelection(true);
  };
  const selectInstruction = () => {
    setSelection(false);
  };

  const getRecipe = () => {
    if (ingredientSelected) {
      return (
        <ul>
          {menu.ingredients.map((item) => (
            <li
              style={{
                margin: "20px",
              }}
            >
              <span
                style={{
                  width: "500px",
                  display: "inline-block",
                }}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}{" "}
              </span>
              <span
                style={{
                  width: "100px",
                  marginLeft: "50px",
                  display: "inline-block",
                }}
              >
                {item.quantity * portion}
              </span>
              <span style={{ marginLeft: "50px", display: "inline-block" }}>
                {item.units}
              </span>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <ol>
          {" "}
          {menu.steps.map((item) => (
            <li
              style={{
                margin: "20px",
              }}
            >
              {item}
            </li>
          ))}
        </ol>
      );
    }
  };

  const body = getRecipe();

  async function fetchData() {
    const url = "http://localhost:8080/api/auth/login";
    console.log(url);
    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    var data = await result.json();
    console.log(data);
  }

  return (
    <div>
      <div style={S.Container}>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
        </style>
        <img style={S.Image} src={menu.imageURL} />
        <div style={S.MenuBox}>
          <p style={S.MenuName}>{menu.name}</p>
          <p style={S.MenuCreator}>
            contributed by <span style={{ fontWeight: "700" }}>Name</span>
          </p>
          <div style={S.MenuCategory}>{menu.categories}</div>
          <div style={S.MenuCategory}>
            <IoTimeOutline style={S.ClockIcon} />
            {menu.preparationTime} min
          </div>
          <div style={S.MenuType}>{menu.types[0]}</div>
          <div style={S.MenuType}>{menu.types[1] ? menu.types[1] : "-"}</div>
          <div style={S.MenuType}>{menu.types[2] ? menu.types[2] : "-"}</div>
          <div style={S.MenuPortion}>
            <input
              style={S.Input}
              type="number"
              defaultValue={portion}
              min="1"
              onChange={(e) =>
                e.target.value >= 1 ? setPortion(e.target.value) : setPortion(1)
              }
            ></input>
            Portion
          </div>
          <div style={S.FavIconBox}>
            <IoHeart style={S.FavIcon} />
          </div>
        </div>
        <div>
          {ingredientSelected ? (
            <div>
              <div style={S.Tab}>
                <div style={S.SelectedTab} onClick={getRecipe}>
                  Ingredients
                </div>
                <div style={S.NotSelectedTab} onClick={selectInstruction}>
                  Instruction
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div style={S.Tab}>
                <div style={S.NotSelectedTab} onClick={selectIngredient}>
                  Ingredients
                </div>
                <div style={S.SelectedTab}>Instruction</div>
              </div>
            </div>
          )}
          <div style={S.Body}>{body}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
