import { Head } from "fresh/runtime";
import { define } from "@/utils.ts";
import { TOC_ID } from "@/constants.ts";

import { Header } from "@/components/Header.tsx";

import { WhatIDo } from "@/components/sections/WhatIDo.tsx";
import { Skills } from "@/components/sections/Skills.tsx";
import { Experience } from "@/components/sections/Experience.tsx";
import { Education } from "@/components/sections/Education.tsx";

import { Toc } from "@/islands/Toc.tsx";
import { TocTriggerMobile } from "@/islands/TocTriggerMobile.tsx";

export default define.page(function Home(ctx) {
  const toc = ctx.state.toc;
  const skillsSection = toc.find((entry) => entry.title === "Skills");

  return (
    <>
      <Head>
        <title>Alex Cadiot's resume</title>
      </Head>

      <a
        href={`#${TOC_ID}`}
        class="hidden xl:block xl:left-1/2 xl:-translate-y-1/2 xl:fixed xl:top-4 xl:not-focus:sr-only"
      >
        Skip to table of content
      </a>

      <div class="xl:p-4 root fresh-gradient">
        <main id="main" class="p-4 prose xl:p-0 mb-10 [grid-area:main]">
          <Header />

          <WhatIDo />
          <Skills subTitles={skillsSection?.subTitles} />
          <Experience />
          <Education />
        </main>

        <div class="[grid-area:right] hidden xl:block">
          <Toc
            className="sticky xl:top-4 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-700/40 shadow-lg"
            toc={toc}
          />
        </div>

        <div class="[grid-area:bottom] sticky bottom-0 xl:hidden">
          <TocTriggerMobile toc={toc} />
        </div>
      </div>
    </>
  );
});
