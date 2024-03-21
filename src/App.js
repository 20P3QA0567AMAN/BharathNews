import React, { Component } from "react";
import NavBar from "./components/NavBar";
import NewsComponents from "./components/NewsComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact index element={<NewsComponents  key="general" category="general" />}/>
            <Route exact path="/business" element={<NewsComponents key="business" category="business" />}/>
            <Route exact path="/entertainment" element={<NewsComponents key="entertainment" category="entertainment" />}/>
            <Route exact path="/general" element={<NewsComponents key="general" category="general" />}/>
            <Route exact path="/health" element={<NewsComponents key="health"  category="health" />}/>
            <Route exact path="/science" element={<NewsComponents key="science" category="science" />}/>
            <Route exact path="/sports" element={<NewsComponents key="sports"  category="sports" />}/>
            <Route exact path="/technology" element={<NewsComponents key="technology"  category="technology" />}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
