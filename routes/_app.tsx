import { define } from "@/utils.ts";

export default define.page(function App({ Component, url }) {
  const pathname = url.pathname;
  return (
    <html lang="en" class="h-full antialiased">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alexandre Cadiot — Staff Frontend Engineer</title>
        <meta
          name="description"
          content="Personal website and resume of Alexandre Cadiot, Staff Frontend Engineer."
        />
        {pathname === "/cv" && <meta name="robots" content="noindex" />}
      </head>
      <body
        f-client-nav
        f-view-transition
        class="flex h-full bg-zinc-50 dark:bg-black"
      >
        <Component />
      </body>
    </html>
  );
});
