import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" counter="us" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" counter="us" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  counter="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={<News key="general" counter="us" category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" counter="us" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" counter="us" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" counter="us" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={
                <News key="technology" counter="us" category="technology" />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
