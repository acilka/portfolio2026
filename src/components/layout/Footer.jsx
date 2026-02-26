import { personalInfo } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500 dark:text-neutral-600 font-medium uppercase tracking-widest border-t border-neutral-200 dark:border-white/5 mt-6 min-h-[52px]">
      <p>&copy; 2026 ACIL. Code &amp; Design.</p>
      <div className="flex gap-6">
        <a
          href={personalInfo.github}
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}