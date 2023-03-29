import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import logo from "../image/.eh.svg";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Work() {
  const [works, setWorks] = useState();

  const fetchData = useCallback(() => {
    fetch("../content-json/work.json")
      .then((response) => response.json())
      .then((data) => {
        setWorks(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header logo={logo} />
      <section id="work">
        <div className="workContent">
          <div className="highlight">
            <h2 className="uppercase green">Works</h2>
          </div>

          {works &&
            works.map((work, i) => {
              return (
                <div className="workWrap" key={i}>
                  <Link to={`/work/${i}`} className="link">
                    <img
                      className="workImg"
                      src={work?.image}
                      alt="project images"
                    />
                    <div className="workCap">
                      <h3>{work?.title}</h3>
                      <ul>
                        {work?.usedSkill.slice(0, 3).map((skill, i) => (
                          <li key={i} className="skill">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </section>

      <Navbar color="mainColor" />
      <Footer />
    </>
  );
}
