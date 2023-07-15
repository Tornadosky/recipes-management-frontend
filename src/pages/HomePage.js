import React from "react";
import Footer from "../components/Footer/Footer";
import TextImage from "../components/TextImage/TextImage";
import StakeImage from "../assets/food_home_page.png";
import Card from "../components/Card/Card";
import { Col } from "@nextui-org/react";

const Home = () => {
  return (
    <Col>
      <TextImage
        text="We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more."
        title="Experience Cooking like no other"
        isImageFirst={false}
        image={StakeImage}
      ></TextImage>
      {/* this divition below is to be deleted once the carousel is ready */}
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer isWithImage={true} />
    </Col>
  );
};

export default Home;
