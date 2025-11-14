import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router";

export default function SearchArticles({ valueOfArticleTopic, handleClick }) {
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");

  function handleSortBy(event) {
    setSortBy(event.target.value);
  }

  function handleOrderBy(event) {
    const isChecked = event.target.checked;
    setOrderBy(isChecked ? "DESC" : "ASC");
  }

  // Notify parent whenever sortBy, orderBy, or topic changes
  useEffect(() => {
    handleClick(valueOfArticleTopic, sortBy, orderBy);
  }, [valueOfArticleTopic, sortBy, orderBy]);

  return (
    <div className="search-article">
      <fieldset>
        <label>
          Created At
          <input
            type="radio"
            id="created-at"
            name="sort-by"
            value="created_at"
            checked={sortBy === "created_at"}
            onChange={(event) => {
              handleSortBy(event);
            }}
          />
        </label>
        <label>
          Votes
          <input
            type="radio"
            id="votes"
            name="sort-by"
            value="votes"
            checked={sortBy === "votes"}
            onChange={(event) => {
              handleSortBy(event);
            }}
          />
        </label>
      </fieldset>
      <label>
        DESC Order
        <input
          type="checkbox"
          id="desc-order"
          name="desc-order"
          checked={orderBy === "DESC"}
          onChange={(event) => {
            handleOrderBy(event);
          }}
        />
      </label>

      <label>
        Search by topic:
        <input
          type="search"
          className="inp-search-article"
          id="article-search"
          name="article-search"
          value={valueOfArticleTopic}
          onChange={(e) => handleClick(e.target.value, sortBy, orderBy)}
        />
      </label>

      <button
        className="btn-search-articles"
        onClick={() => handleClick(valueOfArticleTopic, sortBy, orderBy)}
      >
        Search
      </button>
    </div>
  );
}
