import { useState } from "react";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import "./App.css";
import Navbar from "../Components/Navbar";
import SearchArticles from "../Components/SearchArticles";
import SingleArticle from "../Components/SingleArticle";
import Section from "../Components/Section";
import { Routes, Route } from "react-router";
import Footer from "../Components/Footer";
import CommentsByArticleId from "../Components/CommentsByArticleId";

function App() {
  const [articleTopic, setArticleTopic] = useState("");
  const [articleId, setArticleId] = useState(12);
  function handleClick(id) {
    setArticleTopic(id);
  }
  function getArticleById(id) {
    setArticleId(id);
    console.log("Id>> ", id);
  }
  return (
    <>
      <header className="header">
        <Logo />
        <Header />
      </header>
      <Navbar articleId={articleId} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchArticles
                valueOfArticleTopic={articleTopic}
                handleClick={handleClick}
              />
              <Section topic={articleTopic} getSingleArticle={getArticleById} />
            </>
          }
        ></Route>
        <Route path="/articles/:id" element={<SingleArticle />}></Route>
        <Route
          exact
          path="/articles/:id/comments"
          element={<CommentsByArticleId />}
        ></Route>
      </Routes>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
