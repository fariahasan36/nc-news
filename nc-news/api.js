export function fetchAllArticleList() {
  return fetch(`https://seeding-nc-news-097y.onrender.com/api/articles/`).then(
    (res) => {
      return res.json();
    }
  );
}

export function fetchArticleById(articleId) {
  return fetch(
    `https://seeding-nc-news-097y.onrender.com/api/articles/${articleId}`
  ).then((res) => {
    return res.json();
  });
}

export function fetchCommentsByArticleId(articleId) {
  return fetch(
    `https://seeding-nc-news-097y.onrender.com/api/articles/${articleId}/comments`
  ).then((res) => {
    return res.json();
  });
}
