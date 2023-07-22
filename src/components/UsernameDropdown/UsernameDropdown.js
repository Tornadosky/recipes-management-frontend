import React from "react";
import { Grid, Dropdown, Text } from "@nextui-org/react";
import { FaRegListAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsPen } from "react-icons/bs";

const UsernameDropdown = () => {
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
              Username
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
                Username
                <BsPen style={{ fontSize: "20" }} />
              </Text>

              <Text color="inherit" css={{ d: "flex" }}>
                username@example.com
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

            <Dropdown.Item
              key="logout"
              color="error"
              css={{ marginTop: "5rem" }}
            >
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </Grid.Container>
  );
};

export default UsernameDropdown;
