import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section
      className="lg:py-20 overflow-hidden pt-16 px-6 pb-16 relative"
      id="projets"
    >
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-3">
              Projets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-500">
                Sélectionnés
              </span>
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Des projets concrets qui montrent ma façon de coder : structurée,
              performante et soignée visuellement.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://github.com"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold transition-all border rounded-full text-neutral-900 dark:text-white border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5"
          >
            Voir le portfolio complet
          </a>
        </div>
      </div>
    </section>
  );
}
