import "./Blog.css";
import Navbar from "../../components/navbar/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="blog">
        <h1 className="blog-title">Welcome to my Blog Page</h1>
        <p className="blog-text">
          Every day I will try to write about a new concept I have learned while
          learning how to code. These posts are what helps me, and hopefully
          you, to learn more about different concepts.
        </p>

        <div className="blog-hero">
          <div className="blog-hero-desc">
            <h5>
              Allow me to introduce you to the <b>Feynman Method</b>
            </h5>
            <p className="blog-text">
              We will be using the Feynman Method. This is a very popular method
              for learning.
            </p>
          </div>
          <img
            className="blog-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Richard_Feynman_1959.png/1022px-Richard_Feynman_1959.png"
            alt="Richard Feynman"
          />
        </div>
        <p>Steps breakdown:</p>
        <ol>
          <li> Learn about a topic.</li>
          <li>Try to explain it to someone. </li>
          <li>See what you missed.</li>
          <li>Repeat steps 1 to 3</li>
        </ol>
        <p className="blog-text">
          It goes like this. Every week we will have a certain topic. Starting
          with CSS. I will learn about it from different resources, create my
          own examples, write about it, update what I have written over time as
          I learn more.
        </p>
      </main>
    </>
  );
};

export default Blog;
/*







*/
