import { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import { useParams } from "react-router";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);

  let params = useParams();

  useEffect(() => {
    fetchArticleById(params.id).then((data) => {
      setArticle(data.article);
      setLoading(false);
    });
  }, []);
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
          <p>Votes: {article.votes}</p>
          <p>Comment Count: {article.comment_count}</p>
          <p>Created At: {new Date(article.created_at).toUTCString()}</p>
        </article>
      </main>
    </>
  );
}
