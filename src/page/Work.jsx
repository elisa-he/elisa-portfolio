import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import logo from "../image/.eh.svg";
import works from "../content-json/work.json";
export default function Work() {
  return (
    <>
      <Header logo={logo} />
      <section id="work">
        <div className="highlight">
          <h2 className="uppercase green">Works</h2>
        </div>

        {works &&
          works.map((work, i) => {
            return (
              <div className="workWrap" key={i}>
                <h3>{work.title}</h3>
                {work.usedSkill.slice(0, 3).map((skill, i) => (
                  <p key={i} className="skill">
                    {skill}
                  </p>
                ))}
              </div>
            );
          })}
      </section>
      <Navbar color="mainColor" />
      <Footer />
    </>
  );
}
