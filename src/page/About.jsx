// import about from "../content-json/about.json";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
export default function About() {

  const [about, setAbout] = useState(); 

  const fetchData = useCallback(() => {
    fetch("../content-json/about.json")
    .then(response =>response.json())
    .then(data => {
      console.log(data)
      setAbout(data)
    })
    .catch(error => console.error(error))
  },[])

  useEffect(() => {
    fetchData()
  },[fetchData])


  const indoorHobby =
    about &&
    about.hobbyList[0].indoorHobby.map((hobby, i) => <li key={i}>{hobby}</li>);

  const outdoorHobby =
    about &&
    about.hobbyList[1].outdoorHobby.map((hobby, i) => <li key={i}>{hobby}</li>);
  return (
    <>
      <section id="about">
      
        <div className="firstRow">
          <img
            src={about && about.image[0].url}
            alt="picture of nurse"
            className="aboutPic"
          />
          <p className="firstDesc">{about && about.description[0].desc}</p>
        </div>

        <div className="line bottom"></div>

        <div className="secondRow">
          <p className="secondDesc">
            {about && about.description[1].desc}
            <br />
            <Link to={`/work`} className="workBtn">
              My Work
            </Link>
          </p>
          <img
            src={about && about.image[1].url}
            alt="person on computer"
            className="aboutPic"
          />
        </div>
      </section>
      <section id="hobby">
        <div className="highlight">
          <h2 className="uppercase green">What I Like To Do</h2>
        </div>
        <div className="contentWrap">
          <p>
            On my free time, I like to play games when I'm in the indoor-sy
            mood:
          </p>
          <ul>{indoorHobby}</ul>
          <p>In my outdoor-sy mood, I like to:</p>
          <ul>{outdoorHobby}</ul>
        </div>
      </section>
    </>
  );
}
