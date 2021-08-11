import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Search />
      <Home />
      <Footer />
      </Route>
    </Switch>
    </div>
      </Router >
  );
}

export default App;
