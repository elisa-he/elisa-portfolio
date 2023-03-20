import about from "../content-json/about.json";
import { useState } from "react";

export default function About() {
  const indoorHobby =
    about && about.hobbyList[0].indoorHobby.map((hobby) => <li>{hobby}</li>);

  const outdoorHobby =
    about && about.hobbyList[1].outdoorHobby.map((hobby) => <li>{hobby}</li>);
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
            <a href="" className="workBtn">
              My Work
            </a>
          </p>
          <img
            src={about && about.image[1].url}
            alt="person on computer"
            className="aboutPic"
          />
        </div>
      </section>
      <section id="hobby">
        <div className="highlightContain">
          <div className="highlight">
            <h2 className="uppercase">What I Like To Do</h2>
          </div>
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
