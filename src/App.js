// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes/>
    </div>
  );
}

export default App;
