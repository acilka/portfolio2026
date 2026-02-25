import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col h-full rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden rounded-t-2xl relative border-b border-neutral-100 dark:border-white/5">
        <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/90 backdrop-blur-md text-neutral-900 dark:text-white rounded-full border border-neutral-200 dark:border-white/10">
            {project.category}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-brand-accent transition-colors">
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              className="text-neutral-400 hover:text-brand-accent transition-colors"
              aria-label={`GitHub ${project.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="solar:github-circle-linear" width={20} />
            </a>
          )}
        </div>

        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-white/5">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.techs.map((tech, index) => (
              <span key={tech} className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-neutral-500 font-mono">
                  {tech}
                </span>
                {index < project.techs.length - 1 && (
                  <span className="text-[10px] text-neutral-300 dark:text-neutral-700">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>
          <Link
            to={`/projet/${project.id}`}
            className="inline-flex items-center text-xs font-medium text-brand-accent hover:text-orange-600 transition-colors"
          >
            Voir les détails
            <Icon icon="solar:arrow-right-linear" width={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
