import cssImg from "../assets/Css-framework.webp";
import "../styles/article.css";

export default function CssFrameworks() {
  return (
    <section className="article">
      <h1>CSS Frameworks – Social Media App</h1>

      <img src={cssImg} alt="CSS Frameworks Project Screenshot" />

      <p className="caption">
        Responsive social media prototype built with Tailwind CSS.
      </p>

      <div className="links">
        <a href="https://olekb2001.github.io/css-frameworks-course-assignment/" target="_blank">
          View Live Site
        </a>
        <a href="https://github.com/olekb2001/css-frameworks-course-assignment/tree/css-frameworks" target="_blank">
          View GitHub Repository
        </a>
      </div>

      <p>
        This project was built using Tailwind CSS to create a responsive
        social media interface including login, feed and profile pages.
      </p>

      <p>
        For Portfolio 2, I improved layout responsiveness and navigation
        clarity while refining visual consistency.
      </p>
    </section>
  );
}