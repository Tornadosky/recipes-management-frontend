import React from "react";
import * as S from "../signup-component/SignUp.styled";
import {
  Image,
  Row,
  Col,
  Text,
  Input,
  useInput,
  Spacer,
  Button,
} from "@nextui-org/react";
import BurgerImage from "../../assets/burg.png";

function LogInPage() {
  const { value, reset, bindings } = useInput("");
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <div style={S.SignUpWrapper}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
      </style>
      <text style={S.Header}>Recipe List</text>
      <Row css={{ padding: "6rem 12rem 0 12rem" }}>
        <Col>
          <Text b css={{ color: "black", fontSize: "3rem" }}>
            Log In
          </Text>
          <Spacer y={2} />
          <Input
            {...bindings}
            clearable
            onClearClick={reset}
            helperColor={helper.color}
            helperText={helper.text}
            type="email"
            labelPlaceholder="Email"
            style={S.SectionField}
          />
          <Spacer y={2} />
          <Input
            clearable
            type="password"
            labelPlaceholder="Password"
            style={S.SectionField}
          />
          <Spacer y={1} />
          <Button style={S.Button} auto>
            Log In
          </Button>
          <Col>
            <Text css={{ fontSize: "14px" }}>
              Don't have an account yet? Sign up Now!
            </Text>
            <Button style={S.Button} auto>
              Sign Up
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
