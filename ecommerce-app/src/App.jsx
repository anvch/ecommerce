import React, { Component } from "react";
import NavBar from "./NavBar";
import SearchPage from "./SearchPage";
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
            {/* <Route path="/search" element={<SearchPage />} /> */}
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
