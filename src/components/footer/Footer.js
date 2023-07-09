import React from "react";
import * as S from "./Footer.styled";

const FooterComponent = (props) => {
  return (
    <S.Footer_Wrap>
      <S.Footer_Title> Recipe list</S.Footer_Title>
      <S.Footer_Links>
        <S.Privacy_Link>Privacy Policy</S.Privacy_Link>
        <S.AboutUs_Link>About Us</S.AboutUs_Link>
        <S.ContactUs_Link>Contact Us</S.ContactUs_Link>
      </S.Footer_Links>
    </S.Footer_Wrap>
  );
};
export default FooterComponent;
