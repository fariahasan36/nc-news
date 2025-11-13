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
import Topic from "../Components/Topic";
import ArticleByTopic from "../Components/ArticleByTopic";

function App() {
  const [articleTopic, setArticleTopic] = useState("");
  const [articleId, setArticleId] = useState(12);
  const [articles, setArticles] = useState([]);

  function handleClick(id) {
    setArticleTopic(id);
  }
  function getArticleById(id) {
    setArticleId(id);
  }

  function getArticles(articles, slug) {
    setArticles(articles);
    setArticleTopic(slug);
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
        <Route
          path="/topics"
          element={<Topic getArticleByTopic={getArticles} />}
        ></Route>
        <Route
          path="/topics/:topic"
          element={
            <ArticleByTopic articlesByTopic={articles} topic={articleTopic} />
          }
        ></Route>
      </Routes>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
