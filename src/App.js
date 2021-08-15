import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Category from "./Components/Category/Category";
import Workerdata from "./Components/WorkerData/Workerdata";
function App() {
  // Declare a new state variable, which we'll call "count"
  const [sideNavBarOpen, setSideNavBarOpen] = useState(false);
  const [curWorker, setCurWorker] = useState({
    name: "mario saliba",
    ocupation: "full stack dev",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHc-4FfvvSAFQ/profile-displayphoto-shrink_800_800/0/1594492798405?e=1634774400&v=beta&t=datBhT_arhrHCuMq_DuPKgck3edmzrmvkIEy1F6NQ0A",
    stars:4,
    decsription:"im a smart guy, Mario is a senior fullstack web developer that have alot of experience with frontend & backend development.",
  });
  const endpoint = window.location.href;
  let isAuth = true;
  if (endpoint.includes("login") || endpoint.includes("signin")) {
    isAuth = false;
  }

  return (
    <Router>
      <div className="App">
        {isAuth && (
          <Header
            setSideNavBarOpen={setSideNavBarOpen}
            sideNavBarOpen={sideNavBarOpen}
          />
        )}
        <div className="mario">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/category">
              <Category />
            </Route>
            <Route exact path="/workerdata">
              <Workerdata worker={curWorker} />
            </Route>
          </Switch>
        </div>
        {isAuth && <Footer />}
      </div>
    </Router>
  );
}

export default App;
