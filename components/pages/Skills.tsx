import { LabeledItem } from "@/components/LabeledItem.tsx";

function SkillList(
  { items }: { items: (string | { label: string; href: string })[] },
) {
  return (
    <ul class="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
      {items.map((item) =>
        typeof item === "string"
          ? <li key={item}>{item}</li>
          : (
            <li key={item.href}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={item.href}
                class="text-violet-600 hover:text-violet-700 transition dark:text-violet-400 dark:hover:text-violet-300 underline"
              >
                {item.label}
              </a>
            </li>
          )
      )}
    </ul>
  );
}

export function Skills() {
  return (
    <div class="space-y-20">
      <LabeledItem title="HTML">
        <p class="text-sm text-zinc-600 dark:text-zinc-400">N/A</p>
      </LabeledItem>

      <LabeledItem title="CSS">
        <SkillList
          items={[
            "PostCSS",
            "SCSS, Less, Stylus",
            "CSS Modules",
            "Tailwind",
            "CSS-in-JS (Stitches, Emotion, styled-components…)",
          ]}
        />
      </LabeledItem>

      <LabeledItem title="JS">
        <SkillList
          items={[
            "TypeScript",
            "ES6 & beyond",
            {
              label: "Flux-like architectures",
              href:
                "https://facebookarchive.github.io/flux/docs/in-depth-overview/",
            },
            "Functional programming (as far as JS goes)",
          ]}
        />
        <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          State machines (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://xstate.js.org/docs/"
            class="text-violet-600 hover:text-violet-700 transition dark:text-violet-400 dark:hover:text-violet-300 underline"
          >
            XState
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://thisrobot.life/"
            class="text-violet-600 hover:text-violet-700 transition dark:text-violet-400 dark:hover:text-violet-300 underline"
          >
            Robot
          </a>
          )
        </p>
      </LabeledItem>

      <LabeledItem title="Libs / Frameworks">
        <SkillList
          items={[
            { label: "React", href: "https://react.dev/" },
            { label: "Next.js", href: "https://nextjs.org/" },
            { label: "Astro", href: "https://astro.build/" },
            {
              label: "TanStack Query",
              href: "https://tanstack.com/query/latest",
            },
            { label: "Zag", href: "https://zagjs.com/" },
            { label: "Valtio", href: "https://valtio.dev/" },
          ]}
        />
      </LabeledItem>

      <LabeledItem title="Back-end">
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
          Node.js / Express /{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://hapi.dev/"
            class="text-violet-600 hover:text-violet-700 transition dark:text-violet-400 dark:hover:text-violet-300 underline"
          >
            Hapi
          </a>
        </p>
      </LabeledItem>

      <LabeledItem title="Testing">
        <SkillList
          items={[
            "Jest / Vitest",
            { label: "Testing Library", href: "https://testing-library.com/" },
            "Playwright",
          ]}
        />
      </LabeledItem>

      <LabeledItem title="Workflow">
        <div class="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div>
            <p class="font-medium text-zinc-700 dark:text-zinc-300">
              Versioning
            </p>
            <p>git</p>
          </div>
          <div>
            <p class="font-medium text-zinc-700 dark:text-zinc-300">Tooling</p>
            <p>Webpack, Prettier, eslint, Vite</p>
          </div>
          <div>
            <p class="font-medium text-zinc-700 dark:text-zinc-300">Tracking</p>
            <p>Jira</p>
          </div>
          <div>
            <p class="font-medium text-zinc-700 dark:text-zinc-300">Design</p>
            <p>
              Figma / <del>Sketch</del>
            </p>
          </div>
          <div>
            <p class="font-medium text-zinc-700 dark:text-zinc-300">
              Methodology
            </p>
            <p>Agile</p>
          </div>
        </div>
      </LabeledItem>
    </div>
  );
}
