import React from "react";
import Slider from "react-slick";
import { Card, Col, Row, Button, Text, Badge } from "@nextui-org/react";
import * as Data from "./data";
import * as S from "./Carousel.styled";

export const Carousel = ({ isBurger, isLunch, isPizza, isSalad }) => {
  let cardData = [];

  if (isPizza) {
    cardData = Data.cardsPizzaData;
  } else if (isBurger) {
    cardData = Data.cardsBurgersData;
  } else if (isLunch) {
    cardData = Data.cardsLunchsData;
  } else {
    cardData = Data.cardsSaladData;
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div style={S.CarouselContainerStyles}>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div>
            <Badge
              color="error"
              content={card.rating}
              size="lg"
              css={{ marginRight: "1rem" }}
              key={index}
            >
              <Card css={S.CardStyles}>
                <Card.Header></Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={card.image}
                    width="180px"
                    height="170px"
                    objectFit="fit"
                    alt="Card example background"
                  />
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Col css={S.CardColStyles}>
                      <Text
                        h6
                        color="#000"
                        size={12}
                        css={{ marginBottom: "0" }}
                      >
                        {card.name}
                      </Text>

                      <Text color="#000" size={12} css={{ marginBottom: "0" }}>
                        {card.description}
                      </Text>

                      <Text color="#000" size={12}>
                        {card.price}
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
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
