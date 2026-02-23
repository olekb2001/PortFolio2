import { Link } from "react-router-dom";

export default function ProjectCard({ title, description, link, image }) {
  return (
    <Link to={link} className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="read-more">Read more</span>
    </Link>
  );
}