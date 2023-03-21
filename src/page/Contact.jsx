import Navbar from "../components/navbar";
import Header from "../components/header";
import logo from "../image/.ehBlue.svg";

export default function Contact() {
  return (
    <>
      <Header logo={logo} />
      <section id="contact">
        <h2 className="uppercase">Get in touch</h2>
        <p className="center">
          If you have any questions, feel free to contact me through my email at
          elisacodes@outlook.com
        </p>
      </section>
      <Navbar color="blueColor" />
    </>
  );
}
