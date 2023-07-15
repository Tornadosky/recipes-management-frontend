import React from "react";
import * as S from "./SignUp.styled";
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

function SignUpPage() {
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
            Sign Up
          </Text>
          <Spacer y={2} />
          <Input
            clearable
            labelPlaceholder="First Name"
            style={S.SectionField}
          />
          <Spacer y={2} />
          <Input
            clearable
            labelPlaceholder="Last Name"
            style={S.SectionField}
          />
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
