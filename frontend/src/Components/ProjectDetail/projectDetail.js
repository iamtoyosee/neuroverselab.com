import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/navabar";
import projectList from "../../data/projects";

// Plain-language breakdown of one project: /projects/:slug
// Content lives in src/data/projects.js (oneLiner, problem, steps, why, stack).
const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projectList.findIndex((p) => p.slug === slug);
  const project = projectList[index];
  const next = projectList[(index + 1) % projectList.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="bg-cream min-h-screen">
        <Navbar />
        <div className="pt-40 pb-24 text-center font-body text-lg">
          <p className="mb-6">That project doesn't exist.</p>
          <Link to="/projects" className="font-semibold text-accent hover:underline">
            See all projects
          </Link>
        </div>
      </div>
    );
  }

  const sectionTitle = "font-display font-bold text-2xl lg:text-3xl mb-5";
  const body = "font-body text-[17px] lg:text-lg leading-relaxed text-zinc-700";

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <div className="max-w-[900px] mx-auto px-6 pt-28 lg:pt-36 pb-24">
        <Link
          to="/projects"
          className="font-body font-semibold text-[15px] text-zinc-500 hover:text-zinc-900 transition"
        >
          ← All projects
        </Link>

        {/* Title and the idea in one sentence */}
        <p className="font-body font-semibold text-[13px] tracking-[0.2em] text-accent mt-8">
          THE QUICK BREAKDOWN
        </p>
        <h1 className="font-display font-bold text-[38px] lg:text-[56px] leading-[1.05] mt-3">
          {project.title}
        </h1>
        <p className="font-body text-xl lg:text-2xl leading-snug text-zinc-700 mt-5">
          {project.oneLiner}
        </p>
        {project.status && (
          <p className="inline-block font-body text-sm font-medium text-accent bg-accent-soft rounded-full px-4 py-1.5 mt-6">
            {project.status}
          </p>
        )}

        {project.cover ? (
          <img
            src={project.cover}
            alt={project.title}
            className="w-full mt-10 rounded-3xl border border-stone-200 bg-white"
          />
        ) : (
          <div className="h-[260px] mt-10 rounded-3xl bg-accent-soft flex items-center justify-center px-6">
            <span className="font-display font-bold text-4xl text-accent text-center">
              {project.title}
            </span>
          </div>
        )}

        {/* The problem */}
        <section className="mt-16 lg:mt-20">
          <h2 className={sectionTitle}>The problem</h2>
          <p className={body}>{project.problem}</p>
        </section>

        {/* How it works */}
        <section className="mt-16 lg:mt-20">
          <h2 className={sectionTitle}>How it works</h2>
          <ol className="grid gap-4">
            {project.steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-5 bg-white border border-stone-200 rounded-3xl p-6"
              >
                <span className="flex-none w-10 h-10 rounded-full bg-accent text-white font-display font-bold text-lg flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-1">{step.title}</h3>
                  <p className={body}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Why it matters */}
        <section className="mt-16 lg:mt-20 bg-zinc-900 text-white rounded-3xl p-8 lg:p-12">
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">Why it matters</h2>
          <p className="font-body text-[17px] lg:text-lg leading-relaxed text-zinc-200">
            {project.why}
          </p>
        </section>

        {/* Built with */}
        {project.stack && (
          <section className="mt-16 lg:mt-20">
            <h2 className={sectionTitle}>Built with</h2>
            <div className="flex flex-wrap gap-2.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-body text-[15px] bg-white border border-stone-200 rounded-full px-4 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-14">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-7 rounded-full bg-accent text-white font-body font-semibold flex items-center transition hover:opacity-90"
          >
            View Project ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-7 rounded-full border border-zinc-300 font-body font-semibold flex items-center transition hover:border-zinc-900"
          >
            View on GitHub ↗
          </a>
        </div>

        {/* Next project */}
        {next && next.slug !== project.slug && (
          <Link
            to={`/projects/${next.slug}`}
            className="block mt-20 bg-white border border-stone-200 rounded-3xl p-7 group transition hover:-translate-y-1"
          >
            <p className="font-body text-sm text-zinc-500">Next project</p>
            <p className="font-display font-bold text-2xl lg:text-3xl mt-1 group-hover:text-accent transition">
              {next.title} →
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
