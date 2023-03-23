import Header from "../components/header";
import logo from "../image/.eh.svg";
import works from "../content-json/work.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Single() {
  const { workId } = useParams();

  console.log(workId);

  return (
    <>
      <Header logo={logo} />
      <section id="single">
        {works?.length && <h3>{works[workId].title}</h3>}
      </section>
    </>
  );
}
