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
    </div>
  );
}

export default App;
