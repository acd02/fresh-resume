import { SpotlightSection } from "@/components/SpotlightSection.tsx";

export function Education() {
  return (
    <div class="space-y-20">
      <SpotlightSection title="IFOCOP">
        <p class="text-sm text-zinc-500 dark:text-zinc-400 mb-3">2015</p>
        <ul class="text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.francecompetences.fr/recherche/rncp/15364/"
              class="text-violet-600 hover:text-violet-700 transition dark:text-violet-400 dark:hover:text-violet-300"
            >
              Web development bachelor's degree
            </a>
          </li>
        </ul>
      </SpotlightSection>
    </div>
  );
}
