import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatPage from "./pages/CatPage";
import AboutPage from "./pages/AboutPage";
import DisplayCat from "./pages/DisplayCat";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <NavBar />
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cats">
            <CatPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/cats/:id">
            <DisplayCat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
