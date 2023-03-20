export default function Home() {
  return (
    <>
      <section id="top">
        <div className="title">
          <p className="homeTitle">
            Hey, I'm
            <br />
            <span data-text="Elisa..." className="elisa">
              Elisa...
            </span>
          </p>
        </div>
      </section>
      <section id="bottom">
        <a href="#about" className="learnLink">
          Learn More
        </a>

        <div className="line"></div>
      </section>
    </>
  );
}
