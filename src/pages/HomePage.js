import { Col, Row } from "@nextui-org/react";
import React from "react";
import StakeImage from "../assets/food_home_page.png";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import Footer from "../components/Footer/Footer";
import TextImage from "../components/TextImage/TextImage";

const Home = () => {
  return (
    <Col>
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
      <CardCarousel />

      <Footer isWithImage={true} />
    </Col>
  );
};

export default Home;
