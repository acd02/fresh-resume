import { cx } from "class-variance-authority";
import { Container } from "@/components/Container.tsx";
import { MobileNav } from "@/islands/MobileNav.tsx";

const NAV_LINKS = [
  { href: "/", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
];

function NavItem(
  { href, label, pathname }: { href: string; label: string; pathname: string },
) {
  const isActive = pathname === href;
  return (
    <li>
      <a
        href={href}
        class={cx(
          "relative block px-3 py-2.5 transition",
          isActive
            ? "text-violet-600 dark:text-violet-400"
            : "text-zinc-600 hover:text-violet-700 dark:text-zinc-200 dark:hover:text-violet-400",
        )}
      >
        {label}
        {isActive && (
          <span class="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 dark:from-violet-400/0 dark:via-violet-400/40 dark:to-violet-400/0" />
        )}
      </a>
    </li>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="main" class="pointer-events-auto hidden md:block">
      <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {NAV_LINKS.map(({ href, label }) => (
          <NavItem key={href} href={href} label={label} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
}

interface Props {
  pathname: string;
}

export function SiteHeader({ pathname }: Props) {
  return (
    <header class="pointer-events-none relative z-50 flex flex-none flex-col print:hidden">
      <div class="sticky top-0 z-10 h-16 pt-6">
        <Container class="w-full">
          <div class="relative flex gap-4">
            <div class="flex flex-1">
              <a
                href="/"
                aria-label="Home"
                class="pointer-events-auto"
              >
                <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                  <img
                    src="/poulpe.webp"
                    alt=""
                    class="h-9 w-9 rounded-full object-cover dark:bg-zinc-800"
                  />
                </div>
              </a>
            </div>

            <div class="flex flex-1 justify-end md:justify-center">
              <div class="pointer-events-auto md:hidden">
                <MobileNav pathname={pathname} />
              </div>
              <DesktopNav pathname={pathname} />
            </div>

            <div class="flex justify-end md:flex-1" />
          </div>
        </Container>
      </div>
    </header>
  );
}
