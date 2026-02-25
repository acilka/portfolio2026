import { Icon } from "@iconify/react";
import TechIcon from "../ui/TechIcon";
import { personalInfo, techStack, tools, creativeTools } from "../../data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col max-w-7xl mx-auto px-6 justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Content Left */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10 order-2 lg:order-1">
          <h1 className="md:text-6xl lg:text-7xl dark:text-white leading-[0.9] animate-fade-in stagger-1 text-5xl font-bold text-neutral-900 tracking-tighter opacity-0 mb-4">
            {personalInfo.name} <br />
            <span className="dark:text-neutral-600 text-neutral-400">
              {personalInfo.title}
            </span>
          </h1>

          <p className="text-lg font-light text-neutral-600 dark:text-neutral-400 max-w-xl mb-6 leading-relaxed animate-fade-in opacity-0 stagger-2">
            {personalInfo.description}
          </p>

          {/* Liens contact rapides */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in opacity-0 stagger-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-neutral-500 hover:text-brand-accent transition-colors"
              aria-label="Email"
            >
              <Icon icon="solar:letter-linear" width={20} />
              <span className="text-sm font-medium hidden sm:inline">
                {personalInfo.email}
              </span>
            </a>
            <span className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <Icon icon="uim:linkedin-alt" width={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" width={20} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-in opacity-0 stagger-3 mb-12">
            <a
              href="#projets"
              className="group flex items-center gap-2 dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors text-sm font-semibold text-white bg-neutral-900 rounded py-2.5 px-5"
            >
              Voir mes projets
              <Icon
                icon="solar:arrow-right-linear"
                width={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-transparent border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-medium text-sm rounded hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
            >
              Me contacter
            </a>
          </div>

          {/* Stack, Outils & Créatif — taille augmentée */}
          <div className="animate-fade-in opacity-0 stagger-4 w-full space-y-8">
            {/* Stack Technique */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-5">
                Stack Technique
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {techStack.map((tech) => (
                  <TechIcon
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    width={tech.width}
                  />
                ))}
              </div>
            </div>

            {/* Outils */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-5">
                Outils
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {tools.map((tool) => (
                  <TechIcon
                    key={tool.name}
                    name={tool.name}
                    icon={tool.icon}
                    width={tool.width}
                  />
                ))}
              </div>
            </div>

            {/* Créatif */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-5">
                Créatif
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-5">
                {creativeTools.map((tool) => (
                  <TechIcon
                    key={tool.name}
                    name={tool.name}
                    icon={tool.icon}
                    width={tool.width}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photo Right — sans bulle */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex lg:justify-end animate-fade-in stagger-2 opacity-0 relative justify-center">
          <div className="group relative">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 cursor-pointer w-full h-full object-cover grayscale scale-105"
              />
              <div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 to-transparent opacity-0 absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
