export default function fetchAllArticleist(setArticles) {
  fetch(`https://seeding-nc-news-097y.onrender.com/api/articles/`)
    .then((res) => res.json())
    .then((data) => {
      setArticles(data);
      console.log(data);
    });
}
