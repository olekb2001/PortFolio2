import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

import cssImg from "../assets/Css-framework.webp";
import semesterImg from "../assets/crimsonbid.webp";
import jsImg from "../assets/javascriptframework.webp";

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          title="CSS Frameworks"
          description="A responsive social app built using Tailwind CSS with improved layout and navigation structure."
          link="/css-frameworks"
          image={cssImg}
        />

        <ProjectCard
          title="JavaScript Frameworks"
          description="An e-commerce application built with Next.js featuring cart, dynamic routing and validation."
          link="/js-frameworks"
          image={jsImg}
        />

        <ProjectCard
          title="Semester Project 2"
          description="A vanilla JavaScript auction platform with authentication, listings and bidding functionality."
          link="/semester-project"
          image = {semesterImg}
        />
      </div>
    </section>
  );
}
