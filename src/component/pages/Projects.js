import React from "react";
import { projects } from "../../data";
const styles = {
  header: {
    color: "blue",
    fontFamily: "Rockwell, Courier Bold, Courier",
  },
  imgCard: {
    background: "rgba(0, 0, 0, 0",
    height: 300,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  img: {
    height: 150,
    width: 300,
  },
  subtitle: {
    fontFamily: "Rockwell, Courier Bold, Courier",
    color: "white",
    fontSize: 20,
  },
  title: {
    fontFamily: "Rockwell, Courier Bold, Courier",
    fontSize: 20,
    color: "white",
    textDecoration: "none",
  },
  link: {
      fontSize: 15,
      color: 'white',
  }
};

export default function Projects() {
  return (
    <section className="section bg-secondary">
    <div className="container mx-auto flex-row">
      <h1 style={styles.header}>Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            key={project.id}
            style={styles.imgCard}
          >
            <div className="card-body">
              <h2>{project.title}</h2>
              <h3 style={styles.subtitle}>{project.subtitle}</h3>
              <img src={project.image} style={styles.img} alt="" />
              <a href={project.link} style={styles.link}>See details</a>
            </div>
          </div>
          // </li>
        ))}
      </div>
    </div>
    </section>
  );
}
