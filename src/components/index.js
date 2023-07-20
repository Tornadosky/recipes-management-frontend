import CardImage from "../assets/pizza.png";
import Carousel from "./Carousel/Carousel";

const cardsData = [
  {
    name: "Buffalo Pizza",
    description: "Milano",
    price: "$11.99",
    rating: "5⭐",
    image: CardImage,
  },
  {
    name: "Pepperoni Pizza",
    description: "Di Napoles",
    price: "$13.99",
    rating: "4.9⭐",
    image: CardImage,
  },
  {
    name: "Vegetarian Pizza ",
    description: "Cosa di Mario ",
    price: "$12.99",
    rating: "4.8⭐",
    image: CardImage,
  },
  {
    name: "Pizza Margherita ",
    description: "Milano",
    price: "$12.99",
    rating: "4.6⭐",
    image: CardImage,
  },
  {
    name: "BBQ chicken pizza ",
    description: "Milano",
    price: "$12.99",
    rating: "4.5⭐",
    image: CardImage,
  },
  {
    name: "Veggie Pizza ",
    description: "Locale",
    price: "$12.99",
    rating: "4.4⭐",
    image: CardImage,
  },
];

const ListCards = () => {
  return (
    <div>
      <Carousel cardsData={cardsData} />
    </div>
  );
};
export default ListCards;
