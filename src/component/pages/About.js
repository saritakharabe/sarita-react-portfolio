import React from "react";
import Image from '../../assets/image/profilepic.jpeg';

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto flex-row">
        <div className="flex flex-col xl:flex-row gap-24">
          <img style={{ width: '18rem' }}
            className="rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="lg:text-4xl font-medium lg:font-extrabold mb-3 before:opacity-40 before:-top-[2rem] before:lg:block">
                Sarita Kharabe
              </h2>
              <p className="mb-4 lg:text-3xl">
                Full Stack Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am a Full Stack developer. Currently earning a
                certificate in full stack Coding Bootcamp from The University of
                Pennsylvania, My technical skills are HTML, CSS3, Angular
                JavaScript, CSS, React.js,Typescript, Java, MongoDb, MySql and responsive web design. <br></br>
                I am an innovative problem solver passionate about
                developing apps, focusing on Front end and back end design and
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;