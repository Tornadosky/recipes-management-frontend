import React from "react";
import * as S from "./CategoryComponent.style";
import imagesample from "../../assets/avatar.png";

const CategoryComponent = () => {
  return (
    <div style={S.Container}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
      </style>
      <img style={S.Image} src={imagesample} />
      <p style={S.CategoryName}>Breakfast</p>
    </div>
  );
};

export default CategoryComponent;
