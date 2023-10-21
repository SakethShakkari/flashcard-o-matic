import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./../components/Home";
import Decks from "./../components/Decks/index";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/decks">
          <Decks />
        </Route>
        <Route>
        <NotFound />
        </Route>
      </Switch>
      </div>
    </>
  );
}

export default Layout;
