import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
