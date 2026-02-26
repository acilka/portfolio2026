import { Icon } from "@iconify/react";
import { personalInfo } from "../../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 border-t border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tighter text-neutral-900 dark:text-white">
              Travaillons
              <br />
              ensemble.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-light text-base mb-6 max-w-sm">
              Un projet en tête ? Discutons-en. Disponible en freelance ou pour
              un poste en CDI.
            </p>
          </div>

          <div className="hidden md:block">
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
              Localisation
            </p>
            <p className="text-neutral-900 dark:text-white font-medium mt-1">
              {personalInfo.location}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center justify-between p-5 rounded border border-neutral-200 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 bg-white dark:bg-white/5 transition-all"
          >
            <span className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <Icon icon="solar:letter-linear" width={16} />
              </span>
              <span className="text-base font-medium text-neutral-900 dark:text-white">
                {personalInfo.email}
              </span>
            </span>
            <Icon
              icon="solar:arrow-right-linear"
              width={18}
              className="text-neutral-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-all"
            />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded border border-neutral-200 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 bg-white dark:bg-white/5 transition-all"
          >
            <span className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                <Icon icon="uim:linkedin-alt" width={16} />
              </span>
              <span className="text-base font-medium text-neutral-900 dark:text-white">
                LinkedIn
              </span>
            </span>
            <Icon
              icon="solar:arrow-right-up-linear"
              width={18}
              className="text-neutral-400 group-hover:text-[#0077b5] group-hover:translate-x-1 transition-all"
            />
          </a>

          <div className="md:hidden mt-6">
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
              Localisation
            </p>
            <p className="text-neutral-900 dark:text-white font-medium mt-1">
              {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}