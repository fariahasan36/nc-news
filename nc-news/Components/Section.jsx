import { useState, useEffect } from "react";
import fetchAllArticleist from "../api";

export default function Section({ topic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // function searchArticleById(params) {
  console.log(topic);
  // }

  useEffect(() => {
    fetchAllArticleist().then((data) => {
      setArticles(data.articles);
      setLoading(false);
    });
  }, []);

  console.log(articles);
  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <main className="main-section">
        {articles
          .filter((element) => topic === "" || element.topic === topic)
          .map((element) => {
            return (
              <article key={element.article_id} className="articles">
                <img
                  className="cooking-img"
                  src={element.article_img_url}
                  alt={element.title}
                ></img>
                <p>Title: {element.title}</p>
                <p>Author: {element.author}</p>
                <p>Topic: {element.topic}</p>
                <p>Votes: {element.votes}</p>
                <p>Comment Count: {element.comment_count}</p>
              </article>
            );
          })}
      </main>
    </>
  );
}
