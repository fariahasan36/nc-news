import { useEffect, useState } from "react";
import { fetchAllTopics } from "../api.js";
import { Link } from "react-router";

interface Topic {
  slug: string;
  description: number;
}

export default function Topic({ getArticle }: any) {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllTopics()
      .then((data) => {
        setLoading(false);
        setError(null);
        setTopics(data.topics);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
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
              <Link
                to={`/topics/${element.slug}`}
                onClick={() => {
                  getArticle(element.slug);
                }}
              >
                <p className="topic-name">
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
