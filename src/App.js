import NavbarComponent from "./components/Navbar/Navbar";
import Categories from "./pages/CategoriesPage";
import FoodType from "./pages/FoodTypePage";
import Home from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/categories" exact element={<Categories />} />
          <Route path="/foodtype" exact element={<FoodType />} />
          <Route path="/" render={() => <div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
