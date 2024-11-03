import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    <div>
      <nav className="md:w-10/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="md:w-10/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
