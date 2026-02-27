import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-6xl font-bold text-neutral-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Cette page n'existe pas.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 dark:bg-white dark:text-black rounded hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
      >
        Retour a l'accueil
      </Link>
    </div>
  );
}