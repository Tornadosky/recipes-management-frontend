import React, { useState, useMemo } from "react";
import {
  Text,
  Row,
  Col,
  Button,
  Card,
  Input,
  Dropdown,
} from "@nextui-org/react";
import { MdCloudUpload } from "react-icons/md";
import PlaceholderImage from "../../assets/placeholder-image.jpg";
import * as S from "./NewRecipes.styled";
import { BsPlus } from "react-icons/bs";

const NewRecipes = () => {
  // image upload
  const [image, setImage] = useState(PlaceholderImage);
  const [instruction, setInstruction] = useState("");
  const [addInstruction, setAddInstruction] = useState([]);
  const [category, setCategory] = useState(new Set(["Select one.."]));
  const [foodType, setFoodType] = useState(new Set(["Select one.."]));
  const [portion, setPortion] = useState(new Set(["Select one.."]));
  const [ingredients, setIngredients] = useState("");
  const [addIngredients, setAddIngredients] = useState([]);
  const [amount, setAmount] = useState("");
  const [addAmount, setAddAmount] = useState([]);

  //image upload
  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  //dropdown selection
  const selectedCategoryValue = useMemo(
    () => Array.from(category).join(", ").replaceAll("_", " "),
    [category]
  );
  const selectedFoodTypeValue = useMemo(
    () => Array.from(foodType).join(", ").replaceAll("_", " "),
    [foodType]
  );
  const selectedPortionTypeValue = useMemo(
    () => Array.from(portion).join(", ").replaceAll("_", " "),
    [portion]
  );

  //for adding ingredients and instructions
  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleAddIngredientsButton = () => {
    if (ingredients !== "") {
      setAddIngredients([...addIngredients, ingredients]);
      setIngredients("");
    }
  };

  // add amount
  const handleAddAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAddAmount = () => {
    setAddAmount([...addAmount, amount]);
    setIngredients("");
  };

  //add instructions
  const handleInstructionChange = (e) => {
    setInstruction(e.target.value);
  };

  const handleAddInstruction = () => {
    if (instruction !== "") {
      setAddInstruction([...addInstruction, instruction]);
      setInstruction("");
    }
  };

  //save all data
  const SaveData = (event) => {
    event.preventDefault();
    const data = {
      image: image,
      category: category,
      foodType: foodType,
      amount: amount,
      instruction: instruction,
      addInstruction: addInstruction,
      addIngredients: addIngredients,
      portion: portion,
      ingredients: ingredients,
      addAmount: addAmount,
    };
    console.log(data);
    setImage("");
    setCategory("");
    setFoodType("");
    setAmount("");
    setInstruction("");
    setAddInstruction("");
    setAddIngredients("");
    setPortion("");
    setIngredients("");
    setAddAmount("");
  };

  return (
    <form onSubmit={SaveData}>
      <Col css={S.NewRecipesWrapper}>
        <Row justify="center">
          <Text size="$3xl" h3>
            Add new{" "}
            <Text color="error" span>
              Recipe
            </Text>
          </Text>
        </Row>
        <Row>
          <Col>
            <Card css={{ w: "300px", h: "300px" }}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={image}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card example background"
                />
              </Card.Body>
              <Card.Footer isBlurred css={S.FooterBlur}>
                <Row justify="center">
                  <Button
                    flat
                    auto
                    rounded
                    color="error"
                    onPress={() => {
                      document.querySelector("#image-upload").click();
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={10}
                      weight="bold"
                      transform="uppercase"
                    >
                      <MdCloudUpload
                        style={{
                          fontSize: "12px",
                          marginRight: "0.5rem",
                          paddingTop: "10px",
                        }}
                      />
                      Upload image
                    </Text>
                  </Button>
                  <input
                    type="file"
                    id="image-upload"
                    accept=".jpg,.jpeg,.png,.gif"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Row>
              <Text h1 css={{ fontSize: "16px" }}>
                Recipe Title
              </Text>
            </Row>
            <Row>
              <Input
                size="xl"
                color="error"
                placeholder="Placeholder text"
                css={{ width: "550px", height: "40px" }}
              />
            </Row>
            <Row css={{ marginTop: "1rem" }}>
              <Col css={{ marginRight: "1rem" }}>
                <label for="" style={{ fontSize: "14px", color: "#F31260" }}>
                  Category
                </label>
                <Dropdown>
                  <Dropdown.Button flat color="error" css={S.RecipeDropdown}>
                    {selectedCategoryValue}
                  </Dropdown.Button>

                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={category}
                    onSelectionChange={setCategory}
                  >
                    <Dropdown.Item key="text">Text</Dropdown.Item>
                    <Dropdown.Item key="text">Text</Dropdown.Item>
                    <Dropdown.Item key="date">Date</Dropdown.Item>
                    <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                    <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <label style={{ fontSize: "14px", color: "#F31260" }}>
                  Food Type
                </label>
                <Dropdown>
                  <Dropdown.Button flat color="error" css={S.RecipeDropdown}>
                    {selectedFoodTypeValue}
                  </Dropdown.Button>

                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={foodType}
                    onSelectionChange={setFoodType}
                  >
                    <Dropdown.Item key="text">Text</Dropdown.Item>
                    <Dropdown.Item key="number">Number</Dropdown.Item>
                    <Dropdown.Item key="date">Date</Dropdown.Item>
                    <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                    <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row css={{ marginTop: "1rem" }}>
              <Col css={{ marginRight: "1rem" }}>
                <label style={{ fontSize: "14px", color: "#F31260" }}>
                  Portion
                </label>
                <Dropdown>
                  <Dropdown.Button
                    flat
                    color="error"
                    css={S.RecipeDropdown}
                    containerCss={{ display: "block", textAlign: "start" }}
                  >
                    {selectedPortionTypeValue}
                  </Dropdown.Button>

                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={portion}
                    onSelectionChange={setPortion}
                  >
                    <Dropdown.Item key="text">Text</Dropdown.Item>
                    <Dropdown.Item key="number">Number</Dropdown.Item>
                    <Dropdown.Item key="date">Date</Dropdown.Item>
                    <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                    <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <Input
                  width="265px"
                  type="number"
                  label="Time(min)"
                  status="error"
                  css={{ m: "0.3rem 0 0 0" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Col css={{ marginTop: "5rem" }} justify="center">
          <Row>
            <Text>Ingredients</Text>
          </Row>
          <Row css={{ display: "flex", justifyContent: "space-between" }}>
            <Col>
              <Input
                size="md"
                placeholder="Placeholder text"
                css={{ width: "589px", marginRight: "2rem" }}
                type="text"
                value={ingredients}
                onChange={handleIngredientsChange}
              />
            </Col>
            <Col>
              <Input
                size="md"
                placeholder="Amount"
                css={{ width: "126px" }}
                type="text"
                value={amount}
                onChange={handleAddAmountChange}
              />
            </Col>
            <Col>
              <Button
                auto
                color="error"
                css={{ w: "40px", marginLeft: "-3rem" }}
                onClick={() => {
                  handleAddIngredientsButton();
                  handleAddAmount();
                }}
              >
                <BsPlus style={{ fontSize: "25px" }} />
              </Button>
            </Col>
          </Row>
          <Row>
            <ol
              style={{
                width: "77.5%",
                height: "auto",
                backgroundColor: "#F1F3F5",
                borderRadius: "10px",
              }}
            >
              {addIngredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </Row>
          <Row>
            <Text>Instruction</Text>
          </Row>
          <Row>
            <Col>
              <Input
                size="md"
                placeholder="Placeholder text"
                css={{ width: "750px", marginRight: "2rem" }}
                type="text"
                value={instruction}
                onChange={handleInstructionChange}
              />
            </Col>

            <Col>
              <Button
                auto
                color="error"
                css={{ w: "40px" }}
                onClick={handleAddInstruction}
              >
                <BsPlus style={{ fontSize: "25px" }} />
              </Button>
            </Col>
          </Row>
          <Row>
            <ol
              style={{
                width: "77.5%",
                height: "auto",
                backgroundColor: "#F1F3F5",
                borderRadius: "10px",
              }}
            >
              {addInstruction.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </Row>
        </Col>
        <Row>
          <Button
            type="submit"
            rounded
            size="auto"
            color="error"
            css={{ w: "150px", h: "50px", marginTop: "10rem" }}
          >
            Add Recipe
          </Button>
        </Row>
      </Col>
    </form>
  );
};

export default NewRecipes;
