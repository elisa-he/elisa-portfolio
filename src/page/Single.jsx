import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import logo from "../image/.eh.svg";
import arrow from "../image/arrow-menu.svg";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Single() {
  const [works, setWorks] = useState();
  const [openTab, setOpenTab] = useState(false);

  const handleClick = () => {
    setOpenTab(!openTab);
  };

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

  const { workId } = useParams();

  const title = works?.length && works[workId]?.title;

  const skills =
    works?.length &&
    works[workId]?.usedSkill.map((skill, i) => <li key={i}>{skill}</li>);

  const tools =
    works?.length &&
    works[workId]?.usedTool.map((tool, i) => <li key={i}>{tool}</li>);

  const image = works?.length && works[workId]?.image;

  const team =
    works?.length && works[workId]?.team.map((t, i) => <li key={i}>{t}</li>);

  const projectDesc = works?.length && works[workId]?.desc;

  const designDesc = works?.length && works[workId]?.designDesc;
  const developmentDesc = works?.length && works[workId]?.developmentDesc;
  const learnedDesc = works?.length && works[workId]?.learnedDesc;

  return (
    <>
      <Header logo={logo} />
      <section id="single">
        <div className="highlight">
          <h2 className=" uppercase green">{title}</h2>
        </div>
        <div className="portfolioContent">
          <img className="workImg" src={image} alt="image of website" />
          <div className="workTop">
            <div className="workLeft">
              <p className="subtitle uppercase">used skills</p>
              <ul>{skills}</ul>
            </div>
            <div className="workRight">
              <p className="subtitle uppercase">used tools</p>
              <ul>{tools}</ul>
            </div>
          </div>

          <p className="subtitle uppercase">team</p>
          <ul>{team}</ul>
          <p className="workDesc">{projectDesc}</p>

          <div className="tabs">
            <div className="tab">
              <input type="checkbox" name="planning" id="planning" />
              <label className="check" htmlFor="planning">
                <h3>planning</h3>
                <img src={arrow} alt="arrow to right" />
              </label>
            </div>
            <p className="desc">{designDesc}</p>
            <div className="tab">
              <input type="checkbox" name="development" id="development" />
              <label className="check" htmlFor="development">
                <h3>development</h3>
                <img src={arrow} alt="arrow to right" />
              </label>
            </div>
            <p className="desc">{developmentDesc}</p>
            <div className="tab">
              <input type="checkbox" name="learn" id="learn" />
              <label className="check" htmlFor="learn">
                <h3>what i learned</h3>
                <img src={arrow} alt="arrow to right" />
              </label>
            </div>
            <p className="desc">{learnedDesc}</p>
          </div>

          <Link to={`/work`} className="btnGreen ">
            <button className="uppercase"> check out more projects</button>
          </Link>
          <Link to={`/contact`} className="btn black-outline ">
            <button className="uppercase">get in touch</button>
          </Link>
        </div>
      </section>
      <Navbar color="mainColor" />
      <Footer />
    </>
  );
}
