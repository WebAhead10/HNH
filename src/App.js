import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"

function App() {
  // Declare a new state variable, which we'll call "count"
  const [sideNavBarOpen, setSideNavBarOpen] = useState(false);
  const endpoint = window.location.href;
  let isAuth = true;
  if (endpoint.includes("login") || endpoint.includes("signup")) {
    isAuth = false;
  }

  return (
    <Router>
      <div className="App">
      {isAuth && <Header setSideNavBarOpen={setSideNavBarOpen} sideNavBarOpen={sideNavBarOpen}/>}
        <div className="mario">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
        {isAuth && <Footer />}
      </div>
    </Router>
  );
}

export default App;
