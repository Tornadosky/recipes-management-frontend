import NavbarComponent from "./components/Navbar/Navbar";
import CategoryPage from "./pages/CategoryPage";
import FoodTypePage from "./pages/FoodTypePage";
import Home from "./pages/HomePage";
import LogInPage from "./components/LogIn/LogIn";
import SignUpPage from "./components/SignUp/SignUp";
import CategoryEachPage from "./pages/CategoryEachPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <NavbarComponent />
                <Home />
              </>
            }
          />
          <Route
            path="/categories"
            exact
            element={
              <>
                <NavbarComponent />
                <CategoryPage />
              </>
            }
          />
          <Route
            path="/foodtype"
            exact
            element={
              <>
                <NavbarComponent />
                <FoodTypePage />
              </>
            }
          />
          <Route
            path="/eachcategory"
            exact
            element={
              <>
                <NavbarComponent />
                <CategoryEachPage />
              </>
            }
          />
          <Route path="/login" exact element={<LogInPage />} />
          <Route path="/signup" exact element={<SignUpPage />} />
          <Route path="/" render={() => <div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
