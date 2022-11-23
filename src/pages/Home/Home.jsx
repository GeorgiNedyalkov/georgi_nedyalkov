import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="hero-title">
          <p className="hero-intro highlight">Hello my name is...</p>
          <h1>Georgi Nedyalkov</h1>
          <p>
            Welcome to my <b className="highlight">Digital Laboratory</b>. I am
            just starting out learning Web Development. Interested in
            <b className="highlight"> blockchain</b>,{" "}
            <b className="highlight">React</b>, and{" "}
            <b className="highlight">JavaScript</b>
          </p>
        </div>
        <div className="details">
          <div className="hero-img">
            <img
              src="https://avatars.githubusercontent.com/u/51360924?s=400&u=d13e4865f8faae1bcb7819018f45a0627c910bb3&v=4"
              alt=""
              className="hero-img"
            />
          </div>
          <div className="hero-social">
            <a href="https://github.com/GeorgiNedyalkov">
              <GitHub style={{ fontSize: "3em", color: "black" }} />
            </a>
            <a href="https://www.linkedin.com/in/georgi-nedyalkov-33b4a69b/">
              <LinkedIn style={{ fontSize: "3em", color: "black" }} />
            </a>
            <a href="https://www.instagram.com/gnfluent/">
              <Instagram style={{ fontSize: "3em", color: "black" }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
