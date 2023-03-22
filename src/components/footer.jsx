import arrow from "../image/Arrow.svg";
export default function Footer() {
  function scrollUp() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <section id="footer">
        <p className="footer uppercase">copyright by elisa</p>
        <img
          className="arrow"
          src={arrow}
          alt="arrow vector"
          onClick={scrollUp}
        />
      </section>
    </>
  );
}
