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
  const [user, setUser] = useState("");
  useEffect(() => {
    setIsSignedUp(JSON.parse(window.localStorage.getItem("isSignedUp")));
    setUser(window.localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isSignedUp", isSignedUp);
    window.localStorage.setItem("user", user);
  }, [isSignedUp, user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <NavbarComponent isSignedUp={isSignedUp} user={user} />
                <Home />
              </>
            }
          />
          <Route
            path="/categories"
            exact
            element={
              <>
                <NavbarComponent isSignedUp={isSignedUp} user={user} />
                <CategoryPage />
              </>
            }
          />
          <Route
            path="/foodtype"
            exact
            element={
              <>
                <NavbarComponent isSignedUp={isSignedUp} user={user} />
                <FoodTypePage />
              </>
            }
          />
          <Route
            path="/eachcategory"
            exact
            element={
              <>
                <NavbarComponent isSignedUp={isSignedUp} user={user} />
                <CategoryEachPage />
              </>
            }
          />
          <Route
            path="/login"
            exact
            element={
              <LogInPage setIsSignedUp={setIsSignedUp} setUser={setUser} />
            }
          />
          <Route
            path="/signup"
            exact
            element={
              <SignUpPage setIsSignedUp={setIsSignedUp} setUser={setUser} />
            }
          />
          <Route path="/" render={() => <div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
