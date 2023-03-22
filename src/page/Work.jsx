import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import logo from "../image/.eh.svg";
export default function Work() {
  return (
    <>
      <Header logo={logo} />
      <section id="work">
        <div className="highlight">
          <h2 className="uppercase green">Works</h2>
        </div>
      </section>
      <Navbar color="mainColor" />
      <Footer />
    </>
  );
}
