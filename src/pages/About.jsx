import "../styles/about.css";
import profile1 from "../assets/profile1.jpeg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <img
          src={profile1}
          alt="Ole Kristian Berge portrait"
          className="about-image"
        />

        <div className="about-text">
          <h1>About Me</h1>

          <p>
            Hi, I am Ole Kristian Berge — a frontend developer in progress with
            two years of hands-on learning and project development.
          </p>

          <p>
            I enjoy building modern, responsive web experiences with a focus on
            structure, maintainability and user experience.
          </p>

          <p>
            I am an extroverted and social person who enjoys skiing,
            snowboarding and working out. I value continuous improvement and
            pushing myself both technically and personally.
          </p>

          <div className="contact-info">
            <p>
              <strong>Email:</strong> olekb2001@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +47 413 48 359
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
