import { define } from "@/utils.ts";
import { WhatIDo } from "@/components/sections/WhatIDo.tsx";
import { Skills } from "@/components/sections/Skills.tsx";
import { Experience } from "@/components/sections/Experience.tsx";
import { Education } from "@/components/sections/Education.tsx";
import { Head } from "fresh/runtime";

export default define.page(function CV() {
  return (
    <>
      <Head>
        <title>CV — Alexandre Cadiot</title>
      </Head>
      <div class="cv-page mx-auto max-w-3xl px-8 py-12">
      <section class="mb-12">
        <h1 class="text-3xl font-bold tracking-tight text-zinc-800">
          Alexandre Cadiot
        </h1>
        <p class="mt-1 text-base text-zinc-500">Staff Frontend Engineer</p>
        <div class="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500">
          <a href="mailto:alex.acd02@gmail.com">alex.acd02@gmail.com</a>
          <a href="https://github.com/acd02">github.com/acd02</a>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
          About
        </h2>
        <WhatIDo />
      </section>

      <section class="mb-12">
        <h2 class="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Experience
        </h2>
        <Experience />
      </section>

      <section class="mb-12">
        <h2 class="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Skills
        </h2>
        <Skills />
      </section>

      <section>
        <h2 class="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Education
        </h2>
        <Education />
      </section>
      </div>
    </>
  );
});
