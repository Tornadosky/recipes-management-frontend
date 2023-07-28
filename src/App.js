import NavbarComponent from "./components/Navbar/Navbar";
import CategoryPage from "./pages/CategoryPage";
import FoodTypePage from "./pages/FoodTypePage";
import Home from "./pages/HomePage";
import LogInPage from "./components/LogIn/LogIn";
import SignUpPage from "./components/SignUp/SignUp";
import CategoryEachPage from "./pages/CategoryEachPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    setIsSignedUp(JSON.parse(window.localStorage.getItem("isSignedUp")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isSignedUp", isSignedUp);
  }, [isSignedUp]);

  // useEffect(() => {
  //   const cleanup = () => {
  //     alert("woo");
  //   };
  //   window.addEventListener("beforeunload", cleanup);
  //   return () => {
  //     window.removeEventListener("beforeunload", cleanup);
  //   };
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <NavbarComponent isSignedUp={isSignedUp} />
                <Home />
              </>
            }
          />
          <Route
            path="/categories"
            exact
            element={
              <>
                <NavbarComponent isSignedUp={isSignedUp} />
                <CategoryPage />
              </>
            }
          />
          <Route
            path="/foodtype"
            exact
            element={
              <>
                <NavbarComponent isSignedUp={isSignedUp} />
                <FoodTypePage />
              </>
            }
          />
          <Route
            path="/eachcategory"
            exact
            element={
              <>
                <NavbarComponent isSignedUp={isSignedUp} />
                <CategoryEachPage />
              </>
            }
          />
          <Route
            path="/login"
            exact
            element={<LogInPage setIsSignedUp={setIsSignedUp} />}
          />
          <Route path="/signup" exact element={<SignUpPage />} />
          <Route path="/" render={() => <div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
