import React from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import * as S from "./SearchBar.style";

const SearchBar = (searchKey = 0) => {
  const navigate = useNavigate();

  const search = () => {
    const url = "/searched/";
    navigate("/searched");
  };

  return (
    <div style={S.SearchBox}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
      </style>
      <input placeholder="  Seach a recipe. . ." style={S.SearchInput} />
      <IoSearch style={S.SearchIcon} onClick={search} />
    </div>
  );
};

export default SearchBar;
