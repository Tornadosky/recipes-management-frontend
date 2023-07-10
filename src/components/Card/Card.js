import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { IoPizzaOutline } from "react-icons/io5";
import * as S from "./Card.styled";
import CardImage from "../../assets/pizza.png";

let Name = "getname";
const CardComponent = () => (
  <div>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Open+Sans:wght@300&family=Poppins&family=Praise&display=swap');
    </style>
    <Button auto style={S.CategoryHead}>
      <IoPizzaOutline style={S.CategoryIcon} />
      Pizzas
    </Button>
    <Card style={S.DishCard}>
      <Card.Header
        css={{ position: "absolute", zIndex: 1, top: 5 }}
      ></Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={CardImage}
          objectFit="cover"
          alt="Card example background"
          style={S.DishPic}
        />
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col style={S.DishText}>
            <Text style={S.DishName}>Dish Name</Text>
            <Text>by {Name}</Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  </div>
);

export default CardComponent;
