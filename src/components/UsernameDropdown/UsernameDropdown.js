import { Button, Dropdown, Grid, Text } from "@nextui-org/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";

const UsernameDropdown = ({ setIsSignedUp }) => {
  const userinfo = JSON.parse(localStorage.getItem("userinfo"));
  const username = userinfo.username;
  const email = userinfo["email"];

  function LogOut() {
    localStorage.setItem("userinfo", "");
    setIsSignedUp(false);
  }
  return (
    <Grid.Container justify="flex-start" gap={2}>
      <Grid>
        <Dropdown
          placement="bottom-left"
          css={{ height: "400px", width: "240px" }}
        >
          <Dropdown.Trigger>
            <Text
              color="error"
              style={{
                cursor: "pointer",
              }}
            >
              {username}
            </Text>
          </Dropdown.Trigger>
          <Dropdown.Menu
            color="error"
            aria-label="User Actions"
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Dropdown.Item
              key="profile"
              css={{ height: "$18", marginBottom: "1rem" }}
            >
              <Text
                color="inherit"
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {username}
                <BsPen style={{ fontSize: "20" }} />
              </Text>

              <Text color="inherit" css={{ d: "flex" }}>
                {email}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item
              key="settings"
              css={{ d: "flex", alignItems: "center", textAlign: "center" }}
            >
              <FaRegListAlt style={{ fontSize: "25", marginRight: "2rem" }} />{" "}
              My Recipes
            </Dropdown.Item>
            <Dropdown.Item key="my_favorites">
              <AiFillHeart
                style={{
                  fontSize: "25",

                  marginRight: "2rem",
                }}
              />{" "}
              My Favorites
            </Dropdown.Item>

            <Dropdown.Item color="error" css={{ marginTop: "1rem" }}>
              <Button onPress={LogOut}>Log Out</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </Grid.Container>
  );
};

export default UsernameDropdown;
