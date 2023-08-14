import React from "react";
import * as S from "./CategoryComponent.style";
import notLoaded from "../../assets/lotloaded.jpeg";

const CategoryComponent = ({ img, title }) => {
  const image = img ? img : notLoaded;
  return (
    <div style={S.Container}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
      </style>
      <img style={S.Image} src={image} alt="" />
      <p style={S.CategoryName}>{title}</p>
    </div>
  );
};

export default CategoryComponent;
