import { define } from "@/utils.ts";
import { SimpleLayout } from "@/components/SimpleLayout.tsx";
import { Experience } from "@/components/sections/Experience.tsx";
import { Head } from "fresh/runtime";

export default define.page(function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Work Experience — Alexandre Cadiot</title>
        <meta name="description" content="A timeline of my roles across agencies, startups, and product companies, building UIs, design systems, and accessible frontends." />
      </Head>
      <SimpleLayout
        title="Work Experience"
        intro="I've worked across agencies, startups, and product companies, building UIs, design systems, and accessible, maintainable frontends."
      >
        <Experience />
      </SimpleLayout>
    </>
  );
});
