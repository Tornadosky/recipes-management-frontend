import React from "react";
import { IoSearch } from "react-icons/io5";
import * as S from "./SearchBar.style";

const SearchBar = () => {
  return (
    <div style={S.SearchBox}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
      </style>
      <input placeholder="  Seach a recipe. . ." style={S.SearchInput} />
      <IoSearch style={S.SearchIcon} />
    </div>
  );
};

export default SearchBar;
