import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Order from "./Components/Order/Order";

import Category from "./Components/Category/Category";
import Workerdata from "./Components/WorkerData/Workerdata";
function App() {
  // Declare a new state variable, which we'll call "count"
  const [sideNavBarOpen, setSideNavBarOpen] = useState(false);
  const [curWorker, setCurWorker] = useState({});

  console.log(curWorker);
  const endpoint = window.location.href;
  let isAuth = true;
  if (endpoint.includes("login") || endpoint.includes("signup")) {
    isAuth = false;
  }

  return (
    <Router>
      <div className="App">
        <div className="mario">
          <Header
            setSideNavBarOpen={setSideNavBarOpen}
            sideNavBarOpen={sideNavBarOpen}
          />

          <div className="mainPage">
            <Switch>
              <Route exact path="/">
                <Home setCurWorker={setCurWorker} />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/category">
                <Category />
              </Route>
              <Route path="/workerdata">
                <Workerdata worker={curWorker} />
              </Route>
              <Route exact path="/order">
                <Order worker={curWorker} />
              </Route>
            </Switch>
          </div>
        </div>
        {isAuth && <Footer />}
      </div>
    </Router>
  );
}

export default App;
