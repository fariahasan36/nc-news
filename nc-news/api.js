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

export function patchArticlesByArticleId(articleId, votes) {
  return fetch(
    `https://seeding-nc-news-097y.onrender.com/api/articles/${articleId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inc_votes: votes,
      }),
    }
  ).then((res) => {
    return res.json();
  });
}
export function postCommentByArticleId(articleId, comment_body, user_name) {
  console.log(articleId);
  return fetch(
    `https://seeding-nc-news-097y.onrender.com/api/articles/${articleId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user_name,
        body: comment_body,
      }),
    }
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Cannot post a comment");
    }
    return res.json();
  });
}
