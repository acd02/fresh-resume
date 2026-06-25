import { define } from "@/utils.ts";
import { SiteHeader } from "@/components/SiteHeader.tsx";
import { SiteFooter } from "@/components/SiteFooter.tsx";

export default define.page(function App({ Component, url }) {
  const pathname = url.pathname;
  return (
    <html lang="en" class="h-full antialiased">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alexandre Cadiot — wesh</title>
        <meta name="description" content="Personal website and resume of Alexandre Cadiot, Staff Frontend Engineer." />
        {pathname === "/cv" && <meta name="robots" content="noindex" />}
      </head>
      <body class="flex h-full bg-zinc-50 dark:bg-black">
        <div class="fixed inset-0 flex justify-center sm:px-8 print:hidden">
          <div class="flex w-full max-w-7xl lg:px-8">
            <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div class="relative flex w-full flex-col">
          <SiteHeader pathname={pathname} />
          <main class="flex-auto">
            <Component />
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
});
