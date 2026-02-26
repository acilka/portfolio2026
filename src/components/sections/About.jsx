import SkillCard from "../ui/SkillCard";
import { skills, pitch } from "../../data/portfolio";

export default function About() {
  return (
    <section
      className="dark:border-white/5 border-neutral-200 border-t py-12 px-6"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2 animate-fade-in opacity-0">
          À propos
        </h2>
        <div className="w-12 h-1 bg-brand-accent rounded-full mb-8 animate-fade-in opacity-0 stagger-1" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mb-10 animate-fade-in opacity-0 stagger-2">
          {pitch.map((paragraph, index) => (
            <p
              key={index}
              className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in opacity-0 stagger-3">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}