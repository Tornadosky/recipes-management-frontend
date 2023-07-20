import { Button } from "@nextui-org/react";
import { IoPizzaOutline } from "react-icons/io5";
import { GiHamburger, GiHotMeal } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import * as S from "./Button.styled";

const buttonList = [
  { text: "Pizzas", icon: <IoPizzaOutline /> },
  { text: "Burgers", icon: <GiHamburger /> },
  { text: "Salads", icon: <TbSalad /> },
  { text: "Lunch", icon: <GiHotMeal /> },
];

const ButtonPopularCategories = ({
  setIsPizza,
  setIsBurger,
  setIsSalad,
  setIsLunch,
}) => {
  const handlePizzaClick = () => {
    setIsPizza(true);
    setIsBurger(false);
    setIsLunch(false);
    setIsSalad(false);
  };

  const handleBurgerClick = () => {
    setIsPizza(false);
    setIsBurger(true);
    setIsLunch(false);
    setIsSalad(false);
  };

  const handleSaladClick = () => {
    setIsPizza(false);
    setIsBurger(false);
    setIsLunch(false);
    setIsSalad(true);
  };

  const handleLunchClick = () => {
    setIsPizza(false);
    setIsBurger(false);
    setIsLunch(true);
    setIsSalad(false);
  };

  return (
    <div style={{ display: "flex", width: "1250px", margin: "auto" }}>
      {buttonList.map((buttonList, index) => (
        <Button
          key={index}
          hover="#F72D57"
          ghost
          auto
          onClick={
            buttonList.text === "Pizzas"
              ? handlePizzaClick
              : buttonList.text === "Burgers"
              ? handleBurgerClick
              : buttonList.text === "Salads"
              ? handleSaladClick
              : handleLunchClick
          }
          css={S.ButtonStyle}
        >
          {buttonList.icon}
          {buttonList.text}
        </Button>
      ))}
    </div>
  );
};
export default ButtonPopularCategories;
