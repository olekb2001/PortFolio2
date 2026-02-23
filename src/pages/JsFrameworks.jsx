import jsImg from "../assets/javascriptframework.webp";
import "../styles/article.css";

export default function JsFrameworks() {
  return (
    <section className="article">
      <h1>JavaScript Frameworks - E-commerce Application</h1>

      <img src={jsImg} alt="JavaScript Frameworks Project Screenshot" />

      <p className="caption">
        E-commerce application built with Next.js, React and TypeScript.
      </p>

      <div className="links">
        <a
          href="https://jsfw-2025-v1-ole-kristian-jsframewo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Site
        </a>
        <a
          href="https://github.com/NoroffFEU/jsfw-2025-v1-ole-kristian-jsframeworks"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>

      <p>
        This project is a fully functional e-commerce application built using
        Next.js with the App Router, React and TypeScript. It connects to the
        Noroff API and allows users to browse products, view detailed product
        pages, manage a shopping cart and complete a checkout flow.
      </p>

      <p>
        The application uses React Context and useReducer for global state
        management, and localStorage to persist cart data between sessions.
        Form validation is handled using React Hook Form and Zod.
      </p>

      <p>
        For Portfolio 2, I improved code stability by refining event listener
        logic to prevent duplicate bindings and improved error handling for
        clearer debugging and better maintainability.
      </p>
    </section>
  );
}