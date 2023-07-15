import React from "react";
import { Navbar, Text, Button, Link } from "@nextui-org/react";
import * as S from "./Navbar.styled";
import { BsHeartFill } from "react-icons/bs";

const NavbarComponent = ({ isSignedUp, title }) => {
  return (
    <Navbar css={S.NavbarStyles} variant="static">
      <Navbar.Brand>
        <Text b css={S.NavbarBrandStyles}>
          <i>Recipe List</i>
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link href="/" css={S.NavbarItemStyles}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/categories" css={S.NavbarItemStyles}>
          Category
        </Navbar.Link>
        <Navbar.Link href="/foodtype" css={S.NavbarItemStyles}>
          Food Type
        </Navbar.Link>
        <Navbar.Item>
          <Button auto light size="lg" as={Link} href="/favorites">
            <BsHeartFill />
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          {isSignedUp ? (
            "UserName"
          ) : (
            <Button
              auto
              color={"error"}
              as={Link}
              href="/login"
              css={{ fontSize: "1rem" }}
            >
              Log in
            </Button>
          )}
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComponent;
