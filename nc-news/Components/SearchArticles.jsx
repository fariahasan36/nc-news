import { useState } from "react";

export default function SearchArticles({ valueOfArticleTopic, handleClick }) {
  return (
    <div className="search-article">
      <label>
        Search the article:
        <input
          type="search"
          className="inp-search-article"
          id="article-search"
          name="article-search"
          value={valueOfArticleTopic}
          onChange={(e) => handleClick(e.target.value)}
        />
      </label>
      <button
        className="btn-search-articles"
        onClick={() => handleClick(valueOfArticleTopic)}
      >
        Search
      </button>
    </div>
  );
}
