import { useSignal } from "@preact/signals";

const NAV_LINKS = [
  { href: "/", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
];

interface Props {
  pathname: string;
}

export function MobileNav({ pathname }: Props) {
  const isOpen = useSignal(false);

  return (
    <div class="relative">
      <button
        type="button"
        class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={() => (isOpen.value = !isOpen.value)}
        aria-expanded={isOpen.value}
        aria-label="Toggle navigation"
      >
        Navigation
        <svg
          viewBox="0 0 8 6"
          aria-hidden="true"
          class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
        >
          <path
            d="M1.75 1.75 4 4.25l2.25-2.5"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {isOpen.value && (
        <>
          <div
            class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs dark:bg-black/80"
            onClick={() => (isOpen.value = false)}
          />
          <div class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
            <div class="flex flex-row-reverse items-center justify-between">
              <button
                type="button"
                aria-label="Close menu"
                class="-m-1 p-1"
                onClick={() => (isOpen.value = false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav aria-label="main" class="mt-6">
              <ul class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      class={`block py-2 ${
                        pathname === href
                          ? "text-violet-600 dark:text-violet-400"
                          : ""
                      }`}
                      onClick={() => (isOpen.value = false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
