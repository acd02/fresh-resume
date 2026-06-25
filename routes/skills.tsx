import { define } from "@/utils.ts";
import { SimpleLayout } from "@/components/SimpleLayout.tsx";
import { Skills } from "@/components/sections/Skills.tsx";
import { Head } from "fresh/runtime";

export default define.page(function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills & Tools — Alexandre Cadiot</title>
        <meta name="description" content="Technologies, languages, and tools I work with regularly as a Staff Frontend Engineer." />
      </Head>
      <SimpleLayout
        title="Skills & Tools"
        intro="A breakdown of the technologies, languages, and tools I work with regularly."
      >
        <Skills />
      </SimpleLayout>
    </>
  );
});
