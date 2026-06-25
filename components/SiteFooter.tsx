import { ContainerInner, ContainerOuter } from "@/components/Container.tsx";

const LINKS = [
  { href: "/", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
];

export function SiteFooter() {
  return (
    <footer class="mt-32 flex-none print:hidden">
      <ContainerOuter>
        <div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {LINKS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    class="transition hover:text-violet-700 dark:hover:text-violet-400"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <p class="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Alexandre Cadiot
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
