import { useState } from "react";
import fetchAllArticleist from "../api";

export default function Section() {
  const [articles, setArticles] = useState({});
  fetchAllArticleist(setArticles);
  return (
    <main className="main-section">
      <section className="articles">
        <img
          className="cooking-img"
          src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
          alt="cooking"
        ></img>
        <p>Cooking Image</p>
      </section>
      <section className="articles">
        <img
          className="cooking-img"
          src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
          alt="cooking"
        ></img>
        <p>Cooking Image</p>
      </section>
      <section className="articles">
        <img
          className="cooking-img"
          src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
          alt="cooking"
        ></img>
        <p>Cooking Image</p>
      </section>
      <section className="articles">
        <img
          className="cooking-img"
          src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
          alt="cooking"
        ></img>
        <p>Cooking Image</p>
      </section>
    </main>
  );
}
