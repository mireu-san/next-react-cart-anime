import "../styles/Home.module.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Shop } from "../pages/shop/Shop";
import { Cart } from "../pages/cart/Cart";
// import { Anime } from "../pages/cart/Anime";
import { DataContextProvider } from "../components/context/DataContext";
import Link from "next/link";
import { useRouter } from "next/router";

function App() {
  const router = useRouter();

  return (
    <div className="App">
      <DataContextProvider>
        <Navbar />
        {router.pathname === "/" && <Shop />}
        {router.pathname === "/cart" && <Cart />}
        {/* {router.pathname === "/home" && <Anime />} */}
        <footer>
          Copyright &copy; Chesed Kim. All Rights Reserved, except contents of
          each item on the page.
        </footer>
      </DataContextProvider>
    </div>
  );
}

export default App;
