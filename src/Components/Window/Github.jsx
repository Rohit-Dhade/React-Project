import React from "react";
import MacWindow from "./MacWindow";
import githubdata from "../../assets/github.json";
import './github.scss'

const GitCard = ({
  data = {
    id: 1,
    title: "",
    description: "",
    image: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return <div className="card">
    <img src={data.image} alt="" />
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <div className="tags">
        {data.tags.map(tag => <p className="tag" >{tag}</p>)}
    </div>

    <div className="urls">
        <a href={data.repoLink}>Repositry</a>
        {data.demoLink && <a href={data.demoLink}>Demolink</a>}
    </div>
  </div>;
};

const Github = () => {
  return (
    <MacWindow>
      <div className="cards">
        {githubdata.map((projects) => {
            return <GitCard data={projects}/>
        })}</div>
    </MacWindow>
  );
};

export default Github;
