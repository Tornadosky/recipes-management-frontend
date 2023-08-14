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
import * as S from "./SignUp.styled";

function SignUpPage({ setIsSignedUp }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function SignUp() {
    if (!validateEmail(email)) {
      alert("Please input valid email");
    } else if (!validatePass(password)) {
      alert("Password must be more than 6 characters");
    } else {
      console.log(username, email, password);
      let item = { username, email, password };
      let result = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      console.log(result);
      let resultm = await result.json();
      alert(resultm.message);

      if (result.status === 200) {
        setIsSignedUp(true);
        localStorage.setItem("userinfo", JSON.stringify(item));
        navigate("/");
      }
    }
  }

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  const validatePass = (value) => {
    return value.match(/^.{6,}$/);
  };
  const helper = React.useMemo(() => {
    if (!email)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(email);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [email]);
  return (
    <div style={S.SignUpWrapper}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
      </style>
      <text>
        <a style={S.Header} href="/">
          Recipe List
        </a>
      </text>
      <Row css={{ padding: "6rem 12rem 0 12rem" }}>
        <Col>
          <Text b css={{ color: "black", fontSize: "3rem" }}>
            Sign Up
          </Text>
          <Spacer y={2} />
          <Input
            clearable
            labelPlaceholder="Username"
            style={S.SectionField}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Spacer y={2} />
          <Input
            clearable
            helperColor={helper.color}
            helperText={helper.text}
            type="email"
            labelPlaceholder="Email"
            style={S.SectionField}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer y={2} />
          <Input
            clearable
            type="password"
            labelPlaceholder="Password"
            style={S.SectionField}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacer y={1} />
          <Button style={S.Button} auto onPress={SignUp}>
            Sign Up
          </Button>
          <Col>
            <Text size="$3xl" h3>
              Cook{" "}
              <Text color="error" span>
                whatever
              </Text>{" "}
              you want,{" "}
              <Text color="error" span>
                whenever
              </Text>{" "}
              you want
            </Text>
            <Text css={{ fontSize: "14px" }}>
              Work with us and accomodate your schedule as you like. Our work
              rates have never been higher, this is because we give our empoyees
              several benefits that they enjoy throughout their journey.
            </Text>
            <Button style={S.Button} auto>
              Join Us
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

export default SignUpPage;
