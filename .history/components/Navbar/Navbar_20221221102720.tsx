import Link from "next/link";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link href="/">
          <a className="navbar-editor">Editor's Pick</a>
        </Link>
        <Link href="/cart">
          <a className="navbar-cart">Your Item (Bookmark)</a>
        </Link>
        {/* <Link href="/anime">
          <a className="navbarAnime">Anime Search Engine</a>
        </Link> */}
      </div>
    </div>
  );
};

        {/* <Link href="/anime">
          <a className="navbarAnime">Anime Search Engine</a>
        </Link> */}