import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
export default function Work() {
  return (
    <>
      <Header />
      <section id="work">
        <div className="highlight">
          <h2 className="uppercase">Works</h2>
        </div>
      </section>
      <Navbar color="mainColor" />
      <Footer />
    </>
  );
}
