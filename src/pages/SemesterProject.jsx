import semesterImg from "../assets/crimsonbid.webp";
import "../styles/article.css";

export default function SemesterProject() {
  return (
    <section className="article">
      <h1>Semester Project 2 - CrimsonBid</h1>

      <img src={semesterImg} alt="CrimsonBid Project Screenshot" />

      <p className="caption">
        Auction platform built with vanilla JavaScript and API integration.
      </p>

      <div className="links">
        <a
          href="https://olekb2001.github.io/semester-project-2-auction-house/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Site
        </a>
        <a
          href="https://github.com/olekb2001/semester-project-2-auction-house"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>

      <p>
        CrimsonBid is a vanilla JavaScript auction platform where users can
        register, create listings and place bids. The project focuses on API
        integration, authentication handling and dynamic UI updates without
        using a frontend framework.
      </p>

      <p>
        The application uses modular JavaScript structure and localStorage for
        managing user session data and maintaining state between page loads.
      </p>

      <p>
        For Portfolio 2, I refactored the navigation logic to prevent duplicate
        event listeners and improved error handling to make the application
        more stable and maintainable.
      </p>
    </section>
  );
}