import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
