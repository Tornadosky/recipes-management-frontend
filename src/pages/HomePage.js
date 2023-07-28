import React from "react";
import Footer from "../components/Footer/Footer";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import TextImage from "../components/TextImage/TextImage";
import StakeImage from "../assets/food_home_page.png";
import { Col, Row } from "@nextui-org/react";

const Home = () => {
  return (
    <Col data-testid="home">
      <TextImage
        text="We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more."
        title="Experience Cooking like no other"
        isImageFirst={false}
        image={StakeImage}
      ></TextImage>
      <Row>
        <h3 style={{ margin: "6rem auto 2rem auto", fontSize: "48px" }}>
          Our Popular <span style={{ color: "red" }}>Categories</span>
        </h3>
      </Row>
      <CardCarousel data-testid="carousel" />

      <Footer isWithImage={true} data-testid="footer" />
    </Col>
  );
};

export default Home;
