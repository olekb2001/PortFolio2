import { Typewriter } from "react-simple-typewriter";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        I'm a <span className="accent">Frontend Developer</span> in progress who
        builds{" "}
        <span className="highligght">
          <Typewriter
            words={["modern", "responsive", "accessible"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={74}
            deleteSpeed={47}
            delaySpeed={1202}
          />
        </span>{" "}
        websites.
      </h1>
    </section>
  );
}
