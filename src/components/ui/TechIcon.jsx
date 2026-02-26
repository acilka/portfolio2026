import { Icon } from "@iconify/react";

export default function TechIcon({ name, icon, width }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <Icon
        icon={icon}
        width={width || 24}
        className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
      />
      <span className="text-[10px] font-medium text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white uppercase tracking-wider transition-colors">
        {name}
      </span>
    </div>
  );
}