import React from "react";
import { Navbar } from "@nextui-org/react";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <Navbar css={S.FooterWrapper}>
      <Navbar.Brand css={S.FooterProviderStyles}> Recipe list</Navbar.Brand>
      <Navbar.Content hideIn="xs" css={S.LinkWrappStyle}>
        <Navbar.Link href="#">Privacy Policy</Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
        <Navbar.Link href="#">Contact Us</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Footer;
