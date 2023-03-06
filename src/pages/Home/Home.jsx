import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="hero-title">
          <p className="hero-intro highlight">Hello my name is...</p>
          <h1>Georgi Nedyalkov</h1>
          <p>
            Welcome to my <b className="highlight">Digital Laboratory! 🧪</b>{" "}
          </p>
          <p>
            <br />I am just starting out learning Web Development. <br />{" "}
            Interested in
            <b className="highlight"> blockchain</b>,{" "}
            <b className="highlight">React</b>, and{" "}
            <b className="highlight">JavaScript</b>
          </p>
        </div>
        <div className="details">
          <div className="hero-img">
            <img
              src="https://scontent.fsof10-1.fna.fbcdn.net/v/t1.6435-9/79633962_2615814211789783_9154423049951379456_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=wbQtZTUfKUwAX-M5_ni&_nc_ht=scontent.fsof10-1.fna&oh=00_AfCKqrdrRHEnt4KsEC6p4UgS4WYkQwG9-2856DbrUUPFIA&oe=63A5A76E"
              alt=""
              className="hero-img"
            />
          </div>
          <div className="hero-social">
            <a href="https://github.com/GeorgiNedyalkov">
              <GitHub
                style={{
                  fontSize: "3em",
                  color: "var(--primary-color)",
                }}
              />
            </a>
            <a href="https://www.linkedin.com/in/georgi-nedyalkov-33b4a69b/">
              <LinkedIn
                style={{ fontSize: "3em", color: "var(--primary-color)" }}
              />
            </a>
            <a href="https://www.instagram.com/gnfluent/">
              <Instagram
                style={{ fontSize: "3em", color: "var(--primary-color)" }}
              />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
