import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <br></br>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<ShoppingCart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
