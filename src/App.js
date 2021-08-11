import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const endpoint = window.location.href;
  let isAuth = true;
  if (endpoint.includes("login") || endpoint.includes("signin")) {
    isAuth = false;
  }

  return (
    <Router>
      <div className="App">
        {isAuth && <Header />}
        <div className="mario">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        {isAuth && <Footer />}
      </div>
    </Router>
  );
}

export default App;
