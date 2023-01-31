import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
