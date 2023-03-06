import "./About.css";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <main className="about">
          <h1>About page</h1>
          <p>
            Hi, my name is Georgi Nedyalkov. I am an aspiring web developer
            focusing on learning React, node js, javascripts and computer
            science concepts.
          </p>

          <section>
            <h3>Random Facts</h3>
            <h3>What I am doing now</h3>
            <h3>Music</h3>
            <h3>Hobbies</h3>
            <ul>
              <li>BJJ</li>
              <li>Breaking</li>
              <li>Gaming</li>
            </ul>
            <h3>Movies</h3>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
