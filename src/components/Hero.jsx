import { Typewriter } from "react-simple-typewriter";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        I'm a <span className="accent">Frontend Developer</span> in progress
        who builds{" "}
        <br/>
        <span className="highlight">
          <Typewriter
            words={["modern", "responsive", "accessible"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={1600}
          />
        </span>{" "}
        websites.
      </h1>
    </section>
  );
}
