import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import                     from
import Header from "./container/Header";
import ProductListng from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListng} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 error not found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
