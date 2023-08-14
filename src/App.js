import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./components/LogIn/LogIn";
import NavbarComponent from "./components/Navbar/Navbar";
import SignUpPage from "./components/SignUp/SignUp";
import CategoryEachPage from "./pages/CategoryEachPage";
import CategoryPage from "./pages/CategoryPage";
import FoodTypePage from "./pages/FoodTypePage";
import Home from "./pages/HomePage";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  useEffect(() => {
    setIsSignedUp(JSON.parse(localStorage.getItem("isSignedUp")));
  }, []);

  useEffect(() => {
    localStorage.setItem("isSignedUp", isSignedUp);
  }, [isSignedUp]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <NavbarComponent
                  isSignedUp={isSignedUp}
                  setIsSignedUp={setIsSignedUp}
                />
                <Home />
              </>
            }
          />
          <Route
            path="/categories"
            exact
            element={
              <>
                <NavbarComponent
                  isSignedUp={isSignedUp}
                  setIsSignedUp={setIsSignedUp}
                />{" "}
                <CategoryPage />
              </>
            }
          />
          <Route
            path="/foodtype"
            exact
            element={
              <>
                <NavbarComponent
                  isSignedUp={isSignedUp}
                  setIsSignedUp={setIsSignedUp}
                />{" "}
                <FoodTypePage />
              </>
            }
          />
          <Route
            path="/eachcategory"
            exact
            element={
              <>
                <NavbarComponent
                  isSignedUp={isSignedUp}
                  setIsSignedUp={setIsSignedUp}
                />
                <CategoryEachPage />
              </>
            }
          />
          <Route
            path="/login"
            exact
            element={<LogInPage setIsSignedUp={setIsSignedUp} />}
          />
          <Route
            path="/signup"
            exact
            element={<SignUpPage setIsSignedUp={setIsSignedUp} />}
          />
          <Route path="/" render={() => <div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
