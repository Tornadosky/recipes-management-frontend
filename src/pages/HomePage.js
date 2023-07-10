import React from "react";
import Footer from "../components/footer-component/Footer";
import NavbarComponent from "../components/Navbar/Navbar";
import TextImage from "../components/TextImage/TextImage";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <TextImage
        title="Experience Cooking like no other"
        text="We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more."
        isImageFirst={false}
      />
      <Footer isWithImage={true} />
    </div>
  );
};

export default HomePage;
