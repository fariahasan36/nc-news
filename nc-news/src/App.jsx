import { useState } from "react";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import "./App.css";
import Navbar from "../Components/Navbar";
import Section from "../Components/Section";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <Logo />
        <Header />
      </header>
      <Navbar />
      <Section />
    </>
  );
}

export default App;
