import Header from "./components/header";
import Navbar from "./components/navbar";
import Home from "./page/Home";
import About from "./page/About";
import Footer from "./components/footer";
import "./styles/style.css";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />
      <Navbar />
    </>
  );
}
