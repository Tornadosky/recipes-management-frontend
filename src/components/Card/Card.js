import { Card, Col, Row, Button, Text, Badge } from "@nextui-org/react";
import { IoPizzaOutline } from "react-icons/io5";

import CardImage from "../../assets/pizza.png";

export const CardPopularCategories = () => (
  <div style={{ fontFamily: "'Poppins', sans-serif" }}>
    <Button
      hover="#F72D57"
      ghost
      auto
      css={{
        w: "300px",
        h: "70px",
        borderRadius: "5px",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#FFFFFF",
        color: "#F72D57",
        margin: "1rem",
        fontSize: "$xl",
        fontWeight: "$bold",
        border: "$backgroundAlpha",
        "&:hover": {
          background: "#F72D57",
          color: "#FFFFFF",
        },
      }}
    >
      <IoPizzaOutline style={{ marginRight: "0.7rem", fontSize: "2rem" }} />
      Pizzas
    </Button>
    <Badge color="error" content="5⭐" size="lg" css={{ marginRight: "1rem" }}>
      <Card
        css={{
          w: "300px",
          h: "320px",
          padding: "2rem 0 1rem 0",
          margin: "1rem",
        }}
      >
        <Card.Header
          css={{ position: "absolute", zIndex: 1, top: 5 }}
        ></Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={CardImage}
            width="219px"
            height="122px"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text h6 color="#000" size={12} css={{ marginBottom: "0" }}>
                Pepperoni Pizza
              </Text>

              <Text color="#000" size={12} css={{ marginBottom: "0" }}>
                Di Napoles
              </Text>

              <Text color="#000" size={12}>
                $11,99
              </Text>
              <Button color="error" auto size={"sm"}>
                <Text
                  css={{ color: "#FFFFFF" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Add to cart
                </Text>
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Badge>
  </div>
);
