import {
  Button,
  Col,
  Image,
  Input,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BurgerImage from "../../assets/burg.png";
import * as S from "../SignUp/SignUp.styled";

function LogInPage({ setIsSignedUp, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function LogIn() {
    console.log(username, password);
    let item = { username, password };
    let result = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    if (result.status === 200) {
      result = await result.json();
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
      setIsSignedUp(true);
      setUser(username);
      navigate("/");
    } else {
      alert("Please input correct email and password");
    }
  }

  return (
    <div style={S.SignUpWrapper}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
      </style>
      <text>
        <a href="/" style={S.Header}>
          Recipe List
        </a>
      </text>
      <Row css={{ padding: "6rem 12rem 0 12rem" }}>
        <Col>
          <Text b css={{ color: "black", fontSize: "3rem" }}>
            Log In
          </Text>
          <Spacer y={2} />
          <Input
            clearable
            type="username"
            labelPlaceholder="Username"
            style={S.SectionField}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Spacer y={2} />
          <Input
            clearable
            type="password"
            labelPlaceholder="Password"
            style={S.SectionField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacer y={1} />
          <Button style={S.Button} auto onPress={LogIn}>
            Log In
          </Button>
          <Col>
            <Text css={{ fontSize: "14px" }}>
              Don't have an account yet? Sign up Now!
            </Text>
            <Button style={S.Button} auto>
              <a
                href="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign Up
              </a>
            </Button>
          </Col>
        </Col>
        <Col>
          <Image
            src={BurgerImage}
            style={S.Image}
            width={530}
            height={400}
            alt="Default Image"
            objectFit="cover"
          />
        </Col>
      </Row>
    </div>
  );
}

export default LogInPage;
