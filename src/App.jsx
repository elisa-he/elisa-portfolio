import Header from "./components/header";
import Navbar from "./components/navbar";
import Home from "./page/Home";
import About from "./page/About";
import Footer from "./components/footer";
import "./styles/style.css";
import logo from "./image/.eh.svg";

export default function App() {
  return (
    <>
      <Header logo={logo} />
      <Home />
      <About />
      <Navbar color="mainColor" />
      <Footer />
    </>
  );
}
