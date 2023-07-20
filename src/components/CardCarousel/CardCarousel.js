import Button from "../CarouselButton/Button";
import Carousel from "../Carousel/Carousel";
import React, { useState } from "react";

const CardCarousel = () => {
  const [isPizza, setIsPizza] = useState(true);
  const [isBurger, setIsBurger] = useState(false);
  const [isSalad, setIsSalad] = useState(false);
  const [isLunch, setIsLunch] = useState(false);

  return (
    <div>
      <Button
        setIsPizza={setIsPizza}
        setIsBurger={setIsBurger}
        setIsLunch={setIsLunch}
        setIsSalad={setIsSalad}
      />
      <Carousel
        isBurger={isBurger}
        isLunch={isLunch}
        isPizza={isPizza}
        isSalad={isSalad}
      />
    </div>
  );
};

export default CardCarousel;
