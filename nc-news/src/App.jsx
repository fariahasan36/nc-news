import { useState } from "react";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import "./App.css";
import Navbar from "../Components/Navbar";
import SearchArticles from "../Components/SearchArticles";
import SingleArticle from "../Components/SingleArticle";
import Section from "../Components/Section";
import { Routes, Route } from "react-router";

function App() {
  const [articleTopic, setArticleId] = useState("");
  function handleClick(id) {
    setArticleId(id);
  }
  return (
    <>
      <header className="header">
        <Logo />
        <Header />
      </header>
      <Navbar />
      <SearchArticles
        valueOfArticleTopic={articleTopic}
        handleClick={handleClick}
      />
      <Section topic={articleTopic} />
      <Routes>
        {/* <Route path="/articles" element={<SingleArticle />}></Route> */}
        <Route path="/articles/:id" element={<SingleArticle />}></Route>
      </Routes>
    </>
  );
}

export default App;
