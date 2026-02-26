import { Icon } from "@iconify/react";

export default function SkillCard({ skill }) {
  return (
    <div className="group p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 hover:border-neutral-200 dark:hover:border-white/10 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/10 flex items-center justify-center text-brand-accent mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
        <Icon icon={skill.icon} width={20} />
      </div>
      <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
        {skill.title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}