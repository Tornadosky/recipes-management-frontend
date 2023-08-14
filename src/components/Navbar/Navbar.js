import { Button, Link, Navbar, Text } from "@nextui-org/react";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
import UsernameDropdown from "../UsernameDropdown/UsernameDropdown";
import * as S from "./Navbar.styled";

const NavbarComponent = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <Navbar css={S.NavbarStyles} variant="static">
      <Navbar.Brand>
        <Text css={S.NavbarBrandStyles}>Recipe List</Text>
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
            <UsernameDropdown setIsSignedUp={setIsSignedUp} />
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
