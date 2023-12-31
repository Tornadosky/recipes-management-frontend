import React from "react";
import { IoHeart } from "react-icons/io5";
import * as S from "./RecipeComponent.style";
import imagesample from "../../assets/greek.png";

const RecipeComponent = () => {
  return (
    <div style={S.Container}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
      </style>
      <img style={S.Image} src={imagesample} />
      <p style={S.MenuName}>Menu Name</p>
      <p style={S.MenuCategory}>Menu Category</p>
      <div style={S.FavIconBox}>
        <IoHeart style={S.FavIcon} />
      </div>
    </div>
  );
};

export default RecipeComponent;
