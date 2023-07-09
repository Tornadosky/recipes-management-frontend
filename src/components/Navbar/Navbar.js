import React from "react";
import * as S from "./Navbar.styled";

const Navbar = ({ isSignedUp, title }) => {
  return (
    <S.Navbar_Wrap>
      <S.Navbar_Body>
        <S.Navbar_Title>{title}</S.Navbar_Title>
        <S.Navbar_Links>
          <S.Navbar_Link>Home</S.Navbar_Link>
          <S.Navbar_Link>Home</S.Navbar_Link>
          <S.Navbar_Link>Home</S.Navbar_Link>
          <S.Navbar_Link>Home</S.Navbar_Link>
          <S.Navbar_Link>{!isSignedUp ? "Login" : "UserName"}</S.Navbar_Link>
        </S.Navbar_Links>
      </S.Navbar_Body>
    </S.Navbar_Wrap>
  );
};

export default Navbar;
