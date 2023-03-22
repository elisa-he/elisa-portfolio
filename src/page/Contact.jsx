import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import logo from "../image/.ehBlue.svg";
import github from "../image/icons/github.svg";
import linkedin from "../image/icons/linkedin.svg";

export default function Contact() {
  return (
    <>
      <Header logo={logo} />
      <section id="contact">
        <div className="highlight">
          <h2 className="uppercase blue center">Get in touch</h2>
        </div>
        <p className="center lineHeight">
          If you have any questions, feel free to contact me through my email at
          elisacodes@outlook.com
        </p>
        <div className="contactIcons">
          <Link to={{ pathname: "" }} target="_blank">
            <img src={github} alt="github icon" />
          </Link>
          <Link to={{ pathname: "" }} target="_blank">
            <img src={linkedin} alt="github icon" />
          </Link>
        </div>
      </section>
      <Navbar color="blueColor" />
      <Footer />
    </>
  );
}
