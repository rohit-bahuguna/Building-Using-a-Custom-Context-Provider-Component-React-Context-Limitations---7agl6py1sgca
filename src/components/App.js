import React, { Component, useState } from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotMatch from "./NotMatch";
import "../styles/App.css";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <><div id="main">
        bbhkjkkhj
        <BrowserRouter>
          
            <Navigation />
            <Routes>
              <Route  path="/" element={Home} />
              <Route  path="/about" element={About} />
              <Route  path="*" element={NotMatch} />
            </Routes>
         
        </BrowserRouter>
        </div>
      </>
    );
  }
}

export default App;
