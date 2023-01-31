import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
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
          <Route path="/edit/:id">
            <EditProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
