import type { ComponentChildren } from "preact";

interface Props {
  title: string;
  children: ComponentChildren;
}

export function LabeledItem({ title, children }: Props) {
  return (
    <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div class="grid grid-cols-1 items-baseline gap-y-4 md:gap-y-8 md:grid-cols-4">
        <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <div class="md:col-span-3">{children}</div>
      </div>
    </section>
  );
}
