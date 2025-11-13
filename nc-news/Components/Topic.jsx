import { useEffect, useState } from "react";
import { fetchAllTopics, fetchAllArticleListByTopic } from "../api.js";
import { Link } from "react-router";

export default function Topic({ getArticleByTopic }) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getArticle(slug) {
    fetchAllArticleListByTopic(slug)
      .then((data) => {
        getArticleByTopic(data.articles, slug);
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    fetchAllTopics()
      .then((data) => {
        setLoading(false);
        setError(null);
        setTopics(data.topics);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <h2>List of Topics:</h2>
      <main className="main-section">
        {topics.map((element) => {
          return (
            <article key={element.slug} className="topics">
              <Link to={`/topics/${element.slug}`}>
                <p
                  className="topic-name"
                  onClick={() => {
                    getArticle(element.slug);
                  }}
                >
                  <b>Title:</b> {element.slug}
                </p>
              </Link>
              <p>
                <b>Description:</b> {element.description}
              </p>
            </article>
          );
        })}
      </main>
    </>
  );
}
