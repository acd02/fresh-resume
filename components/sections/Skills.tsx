import { PocketKnife } from "lucide-preact";
import { Section } from "@/islands/Section.tsx";
import type { SubTitle } from "@/types/index.ts";
import { slugify } from "@/utils.ts";

export interface Props {
  subTitles: SubTitle[] | undefined;
}

export function Skills({ subTitles = [] }: Props) {
  const getContent = (subTitle: SubTitle) => {
    switch (true) {
      case subTitle === "HTML":
        return (
          <li>
            <h4 id={slugify(subTitle)}>
              <strong>{subTitle}</strong>
            </h4>
          </li>
        );

      case subTitle === "CSS":
        return (
          <li>
            <h4 id={slugify(subTitle)}>
              <strong>{subTitle}:</strong>
            </h4>
            <ul>
              <li>PostCSS</li>
              <li>SCSS, Less, Stylus</li>
              <li>CSS Modules</li>
              <li>Tailwind</li>
              <li>CSS-in-JS (Stitches, Emotion, styled-components…)</li>
            </ul>
          </li>
        );

      case subTitle === "JS":
        return (
          <li>
            <h4 id={slugify(subTitle)}>
              <strong>{subTitle}:</strong>
            </h4>
            <ul>
              <li>TypeScript</li>
              <li>ES6 &amp; beyond</li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://facebookarchive.github.io/flux/docs/in-depth-overview/"
                >
                  Flux-like architectures
                </a>
              </li>
              <li>Functional programming (as far as JS goes)</li>
              <li>
                State machines (<a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://xstate.js.org/docs/"
                >
                  XState
                </a>,{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://thisrobot.life/"
                >
                  Robot
                </a>)
              </li>
            </ul>
          </li>
        );

      case subTitle === "Libs / Framerworks":
        return (
          <li>
            <h4 id={slugify(subTitle)}>
              <strong>{subTitle}:</strong>
            </h4>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://react.dev/"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://nextjs.org/"
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://astro.build/"
                >
                  Astro
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://tanstack.com/query/latest"
                >
                  TanStack Query
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://zagjs.com/"
                >
                  Zag
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://valtio.dev/"
                >
                  Valtio
                </a>
              </li>
            </ul>
          </li>
        );

      case subTitle === "Back-end":
        return (
          <li>
            <h4 id={slugify(subTitle)}>
              <strong>{subTitle}:</strong>
            </h4>
            <ul>
              <li>
                Node.js / Express /{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://hapi.dev/"
                >
                  Hapi
                </a>
              </li>
            </ul>
          </li>
        );

      case subTitle === "Testing":
        return (
          <li>
            <h4 id={slugify(subTitle)}>
              <strong>{subTitle}:</strong>
            </h4>
            <ul>
              <li>Jest / Vitest</li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://testing-library.com/"
                >
                  Testing Library
                </a>
              </li>
              <li>Playwright</li>
            </ul>
          </li>
        );

      case subTitle === "Workflow":
        return (
          <li>
            <h4 id={slugify(subTitle)}>
              <strong>{subTitle}:</strong>
            </h4>
            <ul>
              <li>
                Versioning:
                <ul>
                  <li>git</li>
                </ul>
              </li>
              <li>
                Tooling:
                <ul>
                  <li>Webpack</li>
                  <li>Prettier, eslint</li>
                  <li>Vite</li>
                </ul>
              </li>
              <li>
                Tracking:
                <ul>
                  <li>jira</li>
                </ul>
              </li>
              <li>
                Design:
                <ul>
                  <li>
                    Figma / <del>Sketch</del>
                  </li>
                </ul>
              </li>
              <li>
                Work methodology:
                <ul>
                  <li>Agile</li>
                </ul>
              </li>
            </ul>
          </li>
        );

      default:
        return;
    }
  };

  return (
    <Section title="Skills" icon={<PocketKnife />}>
      <ul>
        {subTitles?.map(getContent)}
      </ul>
    </Section>
  );
}
