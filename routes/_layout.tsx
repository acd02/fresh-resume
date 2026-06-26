import { define } from "@/utils.ts";
import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { Partial } from "fresh/runtime";

export default define.layout(function Layout({ Component, url }) {
  return (
    <>
      <div class="fixed inset-0 flex justify-center sm:px-8 print:hidden">
        <div class="flex w-full max-w-7xl lg:px-8">
          <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div class="relative flex w-full flex-col">
        <Partial name="main">
          <Header pathname={url.pathname} />
          <main class="flex-auto">
            <Component />
          </main>
        </Partial>
        <Footer />
      </div>
    </>
  );
});
