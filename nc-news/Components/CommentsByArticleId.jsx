import { useState, useEffect } from "react";
import { fetchArticleById, fetchCommentsByArticleId } from "../api.js";
import { useParams } from "react-router";

export default function CommentsByArticleId() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let params = useParams();
  //   //   console.log(params.id);

  useEffect(() => {
    fetchArticleById(params.id)
      .then((data) => {
        setArticle(data.article);
      })
      .then(() => {
        fetchCommentsByArticleId(params.id).then((data) => {
          setComments(data.comments);
          setLoading(false);
        });
      });
  }, []);

  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <h3>Article Title: {article.title}</h3>
      <h4>Article Topic: {article.topic}</h4>
      <h2>List of Comments:</h2>
      <main className="main-section">
        {comments.map((element) => {
          return (
            <article
              key={element.comment_id}
              className="comments"
              onClick={() => {
                getSingleArticle(element.comment_id);
              }}
            >
              <p>Author: {element.author}</p>
              <p>Votes: {element.votes}</p>
              <p>Comment Body: {element.comment_body}</p>
              <p>Created At: {new Date(element.created_at).toUTCString()} </p>
            </article>
          );
        })}
      </main>
    </>
  );
}
