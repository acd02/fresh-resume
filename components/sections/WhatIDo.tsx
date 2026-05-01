import { Pen } from "lucide-preact";
import { Section } from "@/islands/Section.tsx";

export function WhatIDo() {
  return (
    <Section title="What I Do" icon={<Pen />}>
      <p>
        Mostly, I build user interfaces, whether for single page apps or
        traditional websites.
      </p>

      <p>
        I like using design systems (because it’s just easier to maintain and it
        scales better). I actually worked on{" "}
        <a href="https://sparkui.vercel.app/?path=/docs/introduction--docs">
          one
        </a>{" "}
        at my current company.
      </p>

      <p>
        Also, when the design system is developed with accessibility in mind,
        the apps built on top will be more accessible from the get-go.
      </p>

      <p>
        When it comes to testing, writing them sure isn't always a walk in the
        park, but I've learned the hard way they're valuable.
      </p>

      <p>
        On a regular basis, they help me catch bugs or regressions, and those
        can show up fast when doing some refactoring or simply when a lot of
        people interact with the codebase
      </p>
    </Section>
  );
}
