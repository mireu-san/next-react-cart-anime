import Link from "next/link";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <NavbarStyle>
    <div className="navbar">
    <NavbarLinksStyle>
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
        </NavbarLinksStyle>
      </div>
    </div>
    </NavbarStyle>
  );
};


const NavbarStyle = styled.div`
  background-color: black;
  overflow: hidden;
  
  display: flex;
  flex-direction: row;
  justify-content: center;

  border-radius: 20px;
`;

const NavbarLinksStyle = styled.div`
  a {
    display: inline-block;

    text-decoration: none;
    color: white;
    font-size: 24px;
    padding: 20px;
  }
`;

const NavbarEditorStyle = styled.div`
  @media only screen and (max-width: 600px) {
    background-color: black;
    overflow: hidden;
    margin: auto;

    display: flex;
    align-items: center;

    margin-left: 25px;
  }
`;