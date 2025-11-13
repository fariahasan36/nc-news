export function fetchAllArticleList() {
  return fetch(`https://seeding-nc-news-097y.onrender.com/api/articles/`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Cannot get articles");
      }
      return res.json();
    }
  );
}
export function fetchAllArticleListByTopic(topic) {
  return fetch(
    `https://seeding-nc-news-097y.onrender.com/api/articles/?topic=${topic}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Cannot get articles by topic");
    }
    return res.json();
  });
}
export function fetchArticleById(articleId) {
  return fetch(
    `https://seeding-nc-news-097y.onrender.com/api/articles/${articleId}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Cannot get article");
    }
    return res.json();
  });
}

export function fetchCommentsByArticleId(articleId) {
  return fetch(
    `https://seeding-nc-news-097y.onrender.com/api/articles/${articleId}/comments`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Cannot get comments");
    }
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
    if (!res.ok) {
      throw new Error("Cannot update article");
    }
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

export function deleteCommentByCommentId(commentId) {
  return fetch(
    `https://seeding-nc-news-097y.onrender.com/api/comments/${commentId}`,
    {
      method: "DELETE",
    }
  ).then((res) => {
    if (!res.ok) throw new Error("Cannot delete comment");
    return res.status;
  });
}

export function fetchAllTopics() {
  return fetch(`https://seeding-nc-news-097y.onrender.com/api/topics`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Cannot get topics");
      }
      return res.json();
    }
  );
}
