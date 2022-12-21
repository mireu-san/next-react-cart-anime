import { Link } from "next/link";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLinks">
        <Link href="/">
          <a className="navbarEditor">Editor's Pick</a>
        </Link>
        <Link href="/cart">
          <a className="navbarCart">Your Item (Bookmark)</a>
        </Link>
        {/* <Link href="/anime">
          <a className="navbarAnime">Anime Search Engine</a>
        </Link> */}
      </div>
    </div>
  );
};
