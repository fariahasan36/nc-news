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
          <Link to={"/users"}>Users</Link>
        </li>
      </ul>

      <div className="mobile-menu-btn">
        <div className="open">
          <i class="fa fa-bars"></i>
        </div>
        <div className="close">X</div>
      </div>
      <ul className="mobile-nav">
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
          <Link to={"/users"}>Users</Link>
        </li>
      </ul>
    </>
  );
}
