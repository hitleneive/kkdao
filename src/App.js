import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes";

function App() {
  return (
    <div className="App">
      <Router basename="/kkdao">
        <AnimatedRoutes />
      </Router>
      <div className="load-font-1" />
      <div className="load-font-2" />
      <div className="load-font-3" />
    </div>
  );
}

export default App;
