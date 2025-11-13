import { useState } from "react";

export default function ArticleByTopic({ articlesByTopic, topic }) {
  console.log(articlesByTopic);
  return (
    <>
      <h2>List of Articles by topic : {topic}</h2>
      <main className="main-section">
        {articlesByTopic.map((element) => {
          return (
            <article key={element.article_id} className="articles">
              <img
                key={element.article_id}
                className="article-img"
                src={element.article_img_url}
                alt={element.title}
              ></img>
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
                <b>Created At:</b> {new Date(element.created_at).toUTCString()}{" "}
              </p>
            </article>
          );
        })}
      </main>
    </>
  );
}
