import Header from "../components/header";
import Navbar from "../components/navbar";
import logo from "../image/.eh.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Single() {
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
          <h2 className="uppercase green">{title}</h2>
        </div>
        <div className="portfolioContent">
          <img className="workImg" src={image} alt="image of website" />
          <p className="subtitle uppercase">used skills</p>
          <ul>{skills}</ul>
          <p className="subtitle uppercase">used tools</p>
          <ul>{tools}</ul>
          <p className="subtitle uppercase">team</p>
          <ul>{team}</ul>
          <p className="workDesc">{projectDesc}</p>

          <div className="tabs">
            <h3 className="tab">planning</h3>
            <p>{designDesc}</p>
            <h3 className="tab">development</h3>
            <p>{developmentDesc}</p>
            <h3 className="tab">what i learned</h3>
            <p>{learnedDesc}</p>
          </div>

          <Link to={`/work`} className="workBtn">
            check out more projects
          </Link>
          <Link to={`/contact`} className="workBtn">
            get in touch
          </Link>
        </div>
      </section>
      <Navbar color="mainColor" />
    </>
  );
}
