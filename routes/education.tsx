import { define } from "@/utils.ts";
import { SimpleLayout } from "@/components/SimpleLayout.tsx";
import { Education } from "@/components/sections/Education.tsx";
import { Head } from "fresh/runtime";

export default define.page(function EducationPage() {
  return (
    <>
      <Head>
        <title>Education — Alexandre Cadiot</title>
        <meta name="description" content="Formal training in web development." />
      </Head>
      <SimpleLayout
        title="Education"
        intro="Formal training in web development."
      >
        <Education />
      </SimpleLayout>
    </>
  );
});
