import { useState, useEffect } from "react";
import {
  fetchArticleById,
  fetchCommentsByArticleId,
  postCommentByArticleId,
} from "../api.js";
import { useParams } from "react-router";

export default function CommentsByArticleId() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userComment, setUserComment] = useState("");
  const [successComment, setSuccessComment] = useState("");

  let params = useParams();
  //   //   console.log(params.id);

  function handleUserCommentChange(event) {
    setUserComment(event.target.value);
  }

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

  const { article_id } = article;

  function addComment() {
    const username = "grumpy19";

    if (!userComment) {
      return setError("Please insert a comment.");
    }
    postCommentByArticleId(article_id, userComment, username).then((data) => {
      fetchCommentsByArticleId(article_id)
        .then((data) => {
          setComments(data.comments);
          setLoading(false);
          setSuccessComment("Comment created successfully.");
        })
        .catch((error) => {
          setError(error);
        });
    });
  }

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
      <label className="lb-comment-text">
        Please comment here:{" "}
        <textarea
          value={userComment}
          onChange={handleUserCommentChange}
          className="comment-text"
          id="comment"
        ></textarea>
        <button onClick={addComment}>Add Comment</button>
        <p>{successComment}</p>
      </label>
    </>
  );
}
