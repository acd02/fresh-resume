import { Link } from "lucide-preact";

interface Role {
  company: string;
  initials: string;
  logo?: string;
  title: string;
  start: string;
  end: string;
  description: string;
  link?: { href: string; label: string };
}

const roles: Role[] = [
  {
    company: "Le Bon Coin",
    initials: "LBC",
    logo: "/lbc.webp",
    title: "Staff Frontend Engineer",
    start: "Dec 2019",
    end: "Present",
    description:
      "Improving the real estate ads experience. On the Spark Design System team, building and maintaining the component library used across the company.",
    link: { href: "https://www.leboncoin.fr/", label: "leboncoin.fr" },
  },
  {
    company: "Blueboard (acquired by Channel Advisor)",
    initials: "BB",
    logo: "/blueboard.webp",
    title: "Frontend Engineer",
    start: "Apr 2019",
    end: "Nov 2019",
    description:
      "Built a dashboard for product users to view brand data, and a Chrome extension to surface contextual data on any page.",
  },
  {
    company: "Fabernovel Technologies",
    initials: "FN",
    logo: "/zen.webp",
    title: "Frontend Engineer",
    start: "Oct 2016",
    end: "Mar 2019",
    description:
      "Built dashboards and onboarding flows for bank companies, and showcase websites for various clients.",
    link: { href: "https://www.fabernovel.com/", label: "fabernovel.com" },
  },
];

function RoleCard({ role }: { role: Role }) {
  return (
    <li class="group relative flex flex-col items-start">
      <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 overflow-hidden dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {role.logo
          ? (
            <img
              src={role.logo}
              alt=""
              class="h-20 w-20 object-contain"
            />
          )
          : (
            <span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {role.initials}
            </span>
          )}
      </div>
      <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
        <span class="relative z-10">{role.company}</span>
      </h2>
      <p class="relative z-10 mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {role.title} · {role.start} — {role.end}
      </p>
      <p class="relative z-10 my-2 text-sm text-zinc-600 dark:text-zinc-400">
        {role.description}
      </p>
      {role.link && (
        <p class="relative z-10 mt-auto flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-violet-700 dark:text-zinc-200 dark:group-hover:text-violet-400">
          <Link class="h-4 w-4 flex-none" />
          <a href={role.link.href} class="ml-2">{role.link.label}</a>
        </p>
      )}
    </li>
  );
}

export function Experience() {
  return (
    <ul
      role="list"
      class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {roles.map((role) => <RoleCard key={role.company} role={role} />)}
    </ul>
  );
}
