import React from "react";
import AllRoutes from "./AllRoutes";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Auth from "./pages/auth/auth";
import Login from "./components/userpage/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AllRoutes />
    </div>
  );
}

export default App;
