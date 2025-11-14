import { useState } from "react";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import "./App.css";
import Navbar from "../Components/Navbar";
import SearchArticles from "../Components/SearchArticles";
import SingleArticle from "../Components/SingleArticle";
import Section from "../Components/Section";
import { Routes, Route, useSearchParams } from "react-router";
import Footer from "../Components/Footer";
import CommentsByArticleId from "../Components/CommentsByArticleId";
import Topic from "../Components/Topic";
import ArticleByTopic from "../Components/ArticleByTopic";
import User from "../Components/User";

function App() {
  const [articleTopic, setArticleTopic] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");
  const [searchParams, setSearchParams] = useSearchParams();

  const [articleId, setArticleId] = useState(12);
  const [articles, setArticles] = useState([]);

  function handleClick(newTopic, newSortBy, newOrderBy) {
    setArticleTopic(newTopic);
    setSortBy(newSortBy);
    setOrderBy(newOrderBy);
    setSearchParams(
      `?sort_by=${newSortBy}&order=${newOrderBy}&topic=${newTopic}`
    );
  }

  function getArticleById(id) {
    setArticleId(id);
  }

  function getArticles(slug) {
    // setArticles(articles);
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
          path="/articles"
          element={
            <>
              <SearchArticles
                valueOfArticleTopic={articleTopic}
                handleClick={handleClick}
              />
              <Section
                topic={articleTopic}
                getSingleArticle={getArticleById}
                articleSortBy={sortBy}
                articleOrderBy={orderBy}
              />
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
          element={<Topic getArticle={getArticles} />}
        ></Route>
        <Route path="/topics/:topic" element={<ArticleByTopic />}></Route>
        <Route path="/users" element={<User />}></Route>
      </Routes>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
