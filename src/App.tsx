import React from "react";
import "./App.css";
import Alert from "./components/Alert/Alert";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <div className="min-h-full">
      <Nav />
      <Header />
      <MainSection />
    </div>
  );
}

export default App;
