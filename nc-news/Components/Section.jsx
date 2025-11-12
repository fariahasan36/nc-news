import { useState, useEffect } from "react";
import { fetchAllArticleList } from "../api";
import { Link } from "react-router";

export default function Section({ topic, getSingleArticle }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArticleList().then((data) => {
      setArticles(data.articles);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <h2>List of Articles:</h2>
      <main className="main-section">
        {articles
          .filter((element) => topic === "" || element.topic === topic)
          .map((element) => {
            return (
              <article
                key={element.article_id}
                className="articles"
                onClick={() => {
                  getSingleArticle(element.article_id);
                }}
              >
                <Link to={`/articles/${element.article_id}`}>
                  <img
                    key={element.article_id}
                    className="article-img"
                    src={element.article_img_url}
                    alt={element.title}
                  ></img>
                </Link>
                <p>
                  <b>Title:</b> {element.title}
                </p>
                <p>
                  <b>Author:</b> {element.author}
                </p>
                <p>
                  <b>Topic:</b> {element.topic}
                </p>
                <p>
                  <b>Votes:</b> {element.votes}
                </p>
                <p>
                  <b>Comment Count:</b> {element.comment_count}
                </p>
                <p>
                  <b>Created At:</b>{" "}
                  {new Date(element.created_at).toUTCString()}{" "}
                </p>
              </article>
            );
          })}
      </main>
    </>
  );
}
