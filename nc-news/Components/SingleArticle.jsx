import { useState, useEffect } from "react";
import { fetchArticleById, PatchArticlesByArticleId } from "../api";
import { Link, useParams } from "react-router";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let params = useParams();

  useEffect(() => {
    fetchArticleById(params.id)
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const { article_id } = article;

  function increaseVoteByArticleId() {
    setArticle({ ...article, votes: article.votes + 1 });
    PatchArticlesByArticleId(article_id, 1)
      .then(() => {
        return fetchArticleById(article_id);
      })
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setArticle(article);
        setError(error);
      });
  }

  if (isLoading) return <p>Loading</p>;
  // const utcDate1 = new Date(article.created_at);
  return (
    <>
      <main className="main-section">
        <article className="single-article">
          <p>Title: {article.title}</p>
          <img
            className="single-article-img"
            key={article.article_id}
            src={article.article_img_url}
            alt={article.title}
          ></img>
          <p>Author: {article.author}</p>
          <p>Topic: {article.topic}</p>
          <p>Body: {article.article_body}</p>
          <p>Comment Count: {article.comment_count}</p>
          <p>Created At: {new Date(article.created_at).toUTCString()}</p>
          <p>
            Votes: {article.votes}
            <button className="votes" onClick={increaseVoteByArticleId}>
              👍+1{" "}
            </button>
          </p>
        </article>
      </main>
    </>
  );
}
