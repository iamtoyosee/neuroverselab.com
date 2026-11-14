import React from "react";
import { Link } from "react-router-dom";

// One project card on the home page. Data comes from src/data/projects.js.
const ProjectCard = ({ project }) => (
  <article className="h-full bg-white border border-stone-200 rounded-3xl overflow-hidden flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)]">
    <Link to={`/projects/${project.slug}`} aria-label={`What is ${project.title}?`}>
    {project.cover ? (
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        className="w-full h-[220px] object-cover object-top"
      />
    ) : (
      // No screenshot yet: a soft purple panel with the project name
      <div className="h-[220px] bg-accent-soft flex items-center justify-center px-6">
        <span className="font-display font-bold text-3xl text-accent text-center">
          {project.title}
        </span>
      </div>
    )}
    </Link>
    <div className="p-6 pb-7 flex flex-col gap-2.5 flex-1">
      <Link to={`/projects/${project.slug}`}>
        <h3 className="font-display font-semibold text-[23px] hover:text-accent transition">{project.title}</h3>
      </Link>
      <p className="font-body text-base leading-relaxed text-zinc-600">
        {project.summary}
      </p>
      <div className="mt-auto pt-3 flex flex-wrap gap-x-6 gap-y-2">
        <Link
          to={`/projects/${project.slug}`}
          className="font-body font-semibold text-[15px] text-accent hover:underline"
        >
          Quick breakdown →
        </Link>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-semibold text-[15px] text-zinc-600 hover:text-zinc-900 hover:underline"
        >
          View Project ↗
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;
