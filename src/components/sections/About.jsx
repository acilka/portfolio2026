import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/portfolio";

export default function About() {
  return (
    <section
      className="dark:border-white/5 border-neutral-200 border-t pt-12 px-6 pb-12"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:w-2/3 lg:w-1/2">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-3">
            Ce que j'apporte
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base font-light leading-relaxed">
            Développeur Front-End avec un vrai sens du design. Je traduis les
            maquettes en interfaces propres, rapides et maintenables.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}