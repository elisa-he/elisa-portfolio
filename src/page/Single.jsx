import Header from "../components/header";
import Navbar from "../components/navbar";
import logo from "../image/.eh.svg";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Single() {

  const [works, setWorks] = useState(); 

  const fetchData = useCallback(() => {
    fetch("../content-json/work.json")
    .then(response => response.json())
    .then(data =>{
      setWorks(data)
    })
    .catch(error => console.error(error))
  },[])

  useEffect(() => {
    fetchData()
  },[fetchData])


  const { workId } = useParams();

  console.log(workId);

  return (
    <>
      <Header logo={logo} />
      <section id="single">
        {works?.length && <h2>{works[workId]?.title}</h2>}
        <img className="workImg" src={works?.length && works[workId]?.image} alt="image of website" />
        <p className="subtitle">used skills</p>
        <ul>
        {works?.length && works[workId]?.usedSkill.map((skill,i) => <li key={i}>{skill}</li> )}
        </ul>
        <p className="subtitle">used tools</p>
        <ul>
      {works?.length && works[workId]?.usedTool.map((tool,i) => <li key={i}>{tool}</li> )}
        </ul>
        <p className="subtitle">team</p>
        <ul>
        {works?.length && works[workId]?.team.map((t,i) => <li key={i}>{t}</li> )}
        </ul>
        <p className="workDesc">
          {works?.length && works[workId]?.desc}
        </p>
      <h3 className="tabs">
        planning
      </h3>
      <h3 className="tabs">
        development
      </h3>
      <h3 className="tabs">
        what i learned
      </h3>
      <Link to={`/work`} className="workBtn">
        check out more projects
      </Link>
     <Link to={`/contact`} className="workBtn">
        get in touch
      </Link>
      </section>
      <Navbar color="mainColor" />
    </>
  );
}
