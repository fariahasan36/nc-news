import { useState, useEffect } from "react";
import {
  fetchArticleById,
  fetchCommentsByArticleId,
  postCommentByArticleId,
  deleteCommentByCommentId,
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

  function handleUserCommentChange(event) {
    setUserComment(event.target.value);
  }

  function deleteComment(commentId) {
    deleteCommentByCommentId(commentId).then(() => {
      fetchCommentsByArticleId(params.id).then((data) => {
        setComments(data.comments);
        setLoading(false);
        setSuccessComment("Your comment is deleted!");
      });
    });
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
  const username = "grumpy19";
  function addComment() {
    if (!userComment) {
      return setError("Please insert a comment.");
    }
    postCommentByArticleId(article_id, userComment, username).then((data) => {
      fetchCommentsByArticleId(article_id)
        .then((data) => {
          setComments(data.comments);
          setLoading(false);
          setSuccessComment("Comment created successfully.");
          setUserComment("");
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
            <article key={element.comment_id} className="comments">
              <p>Author: {element.author}</p>
              <p>Votes: {element.votes}</p>
              <p>Comment Body: {element.comment_body}</p>
              <p>Created At: {new Date(element.created_at).toUTCString()} </p>
              {element.author == username && (
                <button
                  onClick={() => {
                    deleteComment(element.comment_id);
                  }}
                >
                  Delete Comment
                </button>
              )}
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
