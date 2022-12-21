import { Link } from "next/link";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link href="/">
          <a className="navbar-editor">Editor's Pick</a>
        </Link>
        <Link to="/cart" className="navbar-cart">
          Your Item (Bookmark)
        </Link>
      </div>
    </div>
  );
};
