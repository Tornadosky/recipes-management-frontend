import React from "react";
import { Navbar, Row } from "@nextui-org/react";
import * as S from "./Footer.styled";
import TextImage from "../TextImage/TextImage";
import BurgerImg from "../../assets/burg.png";

const Footer = ({ image, title, text, isWithImage }) => {
  return (
    <Row css={S.MainRowStyles}>
      {isWithImage ? (
        <>
          <TextImage
            image={BurgerImg}
            isImageFirst={true}
            title="Don's miss out on your favorite food"
            text="Sign up now to enjoy your favourite food anywhere, anytime. It is quick, easy and accessible to anyone of any age. Free of charge, taste now is the solution to your every day foods."
          />
        </>
      ) : (
        ""
      )}
      <Row>
        <Navbar css={S.FooterWrapper}>
          <Navbar.Brand css={S.FooterProviderStyles}> Recipe list</Navbar.Brand>
          <Navbar.Content hideIn="xs" css={S.LinkWrappStyle}>
            <Navbar.Link href="#">Privacy Policy</Navbar.Link>
            <Navbar.Link href="#">About Us</Navbar.Link>
            <Navbar.Link href="#">Contact Us</Navbar.Link>
          </Navbar.Content>
        </Navbar>
      </Row>
    </Row>
  );
};

export default Footer;
