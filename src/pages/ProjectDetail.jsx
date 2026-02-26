import { useParams, Link, Navigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { projects } from "../data/portfolio";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = projects[currentIndex - 1] || null;
  const nextProject = projects[currentIndex + 1] || null;

  return (
    <article className="max-w-4xl mx-auto px-6 pt-8 pb-20">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8"
      >
        <Icon icon="solar:arrow-left-linear" width={16} />
        Retour aux projets
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 rounded-full">
            {project.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </header>

      <div className="flex flex-col gap-4 mb-12">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-contain"
          />
        </div>
        {project.screenshots &&
          project.screenshots.length > 0 &&
          project.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10"
            >
              <img
                src={screenshot}
                alt={`${project.title} - capture ${index + 2}`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
            A propos du projet
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {project.challenges && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Defis techniques
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                    <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.improvements && (
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Perspectives d amelioration
              </h2>
              <ul className="space-y-3">
                {project.improvements.map((improvement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                    <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {improvement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="p-5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5">
              <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-white/10 rounded-full border border-neutral-200 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
                >
                  <Icon icon="mdi:github" width={18} />
                  Voir le code
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                >
                  <Icon icon="solar:arrow-right-up-linear" width={18} />
                  Voir le site
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>

      <nav className="flex items-center justify-between pt-8 border-t border-neutral-200 dark:border-white/5">
        {prevProject ? (
          <Link
            to={`/projet/${prevProject.id}`}
            className="group flex items-center gap-3 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Icon
              icon="solar:arrow-left-linear"
              width={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                Precedent
              </p>
              <p className="text-sm font-medium">{prevProject.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projet/${nextProject.id}`}
            className="group flex items-center gap-3 text-right text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                Suivant
              </p>
              <p className="text-sm font-medium">{nextProject.title}</p>
            </div>
            <Icon
              icon="solar:arrow-right-linear"
              width={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
