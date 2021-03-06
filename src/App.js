import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Order from "./Components/Order/Order";
import CategoryList from "./Components/CategoryList";
import Category from "./Components/Category/Category";
import Workerdata from "./Components/WorkerData/Workerdata";
import TopRated from "./Components/TopRated/TopRated";
function App() {
  // Declare a new state variable, which we'll call "count"
  const [sideNavBarOpen, setSideNavBarOpen] = useState(false);
  const [selectedJobDate, setSelectedJobDate] = useState({});
  const [selectedJobTime, setSelectedJobTime] = useState({});
  const [curWorker, setCurWorker] = useState({});

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
                <Home />
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
              <Route path="/toprated">
                <TopRated />
              </Route>
              <Route path="/workerdata/:id">
                <Workerdata
                  setCurWorker={setCurWorker}
                  setSelectedJobDate={setSelectedJobDate}
                  setSelectedJobTime={setSelectedJobTime}
                />
              </Route>
              <Route exact path="/order/:id">
                <Order
                  curWorker={curWorker}
                  selectedJobDate={selectedJobDate}
                  selectedJobTime={selectedJobTime}
                />
              </Route>
              <Route path="/:category">
                <CategoryList />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
