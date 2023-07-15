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
import BurgerImage from "../../assets/BurgerSignUp.png";

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
      <Row css={{ padding: "10rem 12rem 0 12rem" }}>
        <Col>
          <Text b css={{ color: "black", fontSize: "3rem" }}>
            Sign Up
          </Text>
          <Spacer y={1.5} />
          <Input
            {...bindings}
            clearable
            bordered
            color="error"
            shadow={false}
            onClearClick={reset}
            helperColor={helper.color}
            helperText={helper.text}
            type="email"
            labelPlaceholder="Email"
            status="error"
            width="300px"
            size="lg"
            css={{
              borderRadius: "0",
              color: "#F72D57",
            }}
          />
          <Spacer y={1.6} />
          <Input
            type="password"
            labelPlaceholder="Password"
            status="error"
            width="300px"
            size="lg"
            bordered
          />
          <Spacer y={1} />
          <Button
            shadow
            color="error"
            auto
            css={{ height: "40px", width: "100px" }}
          >
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
            <Button
              shadow
              color="error"
              auto
              css={{ height: "40px", width: "100px" }}
            >
              Join Us
            </Button>
          </Col>
        </Col>
        <Col>
          <Image
            width={530}
            height={300}
            src={BurgerImage}
            alt="Default Image"
            objectFit="cover"
            css={{
              position: "absolute",
              zIndex: "1",
            }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default SignUpPage;
