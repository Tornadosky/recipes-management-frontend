import React from "react";
import Footer from "../components/footer-component/Footer";
import TextImage from "../components/TextImage/TextImage";
import StakeImage from "../assets/food_home_page.png";
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

      <Footer isWithImage={true} />
    </Col>
  );
};

export default Home;
