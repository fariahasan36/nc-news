import { Link } from "react-router";
export default function Navbar({ articleId }) {
  return (
    <>
      <ul className="nav">
        <li>
          <Link to="/">Articles</Link>
        </li>
        <li>
          <Link to={`/articles/${articleId}/comments`}>Comments</Link>
        </li>
        <li>
          <Link to={"/topics"}>Topics</Link>
        </li>
        <li>
          <a href="#about">Users</a>
        </li>
      </ul>
    </>
  );
}
