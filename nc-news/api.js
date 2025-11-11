export default function fetchAllArticleist() {
  return fetch(`https://seeding-nc-news-097y.onrender.com/api/articles/`).then(
    (res) => {
      return res.json();
    }
  );
}

export function fetchAllArticleistById(setArticles, articleId) {
  fetch(`https://seeding-nc-news-097y.onrender.com/api/articles/${articleId}`)
    .then((res) => res.json())
    .then((data) => {
      setArticles(data.articles);
    });
}
