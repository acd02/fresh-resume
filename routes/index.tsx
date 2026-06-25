import { define } from "@/utils.ts";
import { Container } from "@/components/Container.tsx";
import { About } from "@/components/pages/About.tsx";
import { DownloadCvButton } from "@/islands/DownloadCvButton.tsx";
import type { LucideIcon } from "lucide-preact";
import { ArrowDownToLine, CodeXml, Mail, Play, Zap } from "lucide-preact";
import { Head } from "fresh/runtime";

function SocialLink({
  href,
  label,
  icon: Icon,
  class: cls,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  class?: string;
}) {
  return (
    <li class={`flex ${cls ?? ""}`}>
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        class="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-violet-700 dark:text-zinc-200 dark:hover:text-violet-700"
      >
        <Icon class="h-6 w-6 flex-none" />
        <span class="ml-4">{label}</span>
      </a>
    </li>
  );
}

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>Alexandre Cadiot — Staff Frontend Engineer</title>
        <meta
          name="description"
          content="Staff Frontend Engineer specialising in accessible, maintainable UIs and design systems."
        />
      </Head>
      <Container class="mt-16 sm:mt-32">
        <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div class="lg:order-first lg:row-span-2">
            <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I'm Alexandre CADIOT, staff frontend engineer
            </h1>
            <div class="mt-6">
              <About />
            </div>
          </div>
          <div class="lg:pl-20">
            <div class="size-0 lg:size-72" />
          </div>
          <div class="lg:pl-20">
            <DownloadCvButton
              icon={
                <ArrowDownToLine class="h-4 w-4 flex-none stroke-zinc-400 transition group-hover:stroke-zinc-600 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              }
            />
            <p class="mb-6 text-sm font-semibold flex dark:text-zinc-200 items-center gap-x-4">
              <Play class="text-purple-400" /> current position @leboncoin
            </p>
            <ul role="list">
              <SocialLink
                href="https://github.com/acd02"
                label="https://github.com/acd02"
                icon={CodeXml}
              />
              <SocialLink
                href="https://stackblitz.com/@acd02/collections"
                label="StackBlitz"
                icon={Zap}
                class="mt-4"
              />
              <SocialLink
                href="mailto:alex.acd02@gmail.com"
                label="alex.acd02@gmail.com"
                icon={Mail}
                class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              />
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
});
