import React from "react";
import { Text, Row, Col, Button, Card } from "@nextui-org/react";
import { MdCloudUpload } from "react-icons/md";
import PlaceholderImage from "../../assets/placeholder-image.jpg";

const NewRecipes = () => {
  return (
    <div>
      <Row>
        <Text size="$3xl" h3>
          Add new{" "}
          <Text color="error" span>
            Recipe
          </Text>
        </Text>
      </Row>
      <Row>
        <Col>
          <Card css={{ w: "350px", h: "350px" }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={PlaceholderImage}
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop:
                  "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
                width: "100%",
              }}
            >
              <Row justify="center">
                <Button flat auto rounded color="error">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    <MdCloudUpload />
                    Upload image
                  </Text>
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default NewRecipes;
