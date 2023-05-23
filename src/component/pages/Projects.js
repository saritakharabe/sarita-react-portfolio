import React from "react";

import { projects } from "../../data";
const styles = {
  header: {
    color: "blue",
    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  },
  img: {
    height: 300,
    width: 600,
    marginLeft: "20",
    marginRight: "20",
  },
  subtitle: {
    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    color: "black",
    fontSize: 15,
  },
  title: {
    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    fontSize: 20,
    color: "white",
    textDecoration: "none",
  },
  link: {
    fontSize: 25,
    color: "black",
  },
};

export default function Projects() {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <h1 style={styles.header}>Apps I've Build</h1>
        <div className="row">
          {projects.map((project) => (
            <div className="col-sm-4" key={project.id}>
              <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <h2 class="card-title">{project.title}</h2>
                  <h3 style={styles.subtitle}>{project.subtitle}</h3>
                  <p class="card-text">{project.description}</p>
                  <img src={project.image} style={styles.img} alt="" />
                  <a
                    href={project.link}
                    style={styles.link}
                  >
                    See details
                  </a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
