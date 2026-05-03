import type { ComponentChildren, VNode } from "preact";
import { useEffect, useRef } from "preact/hooks";
import type { Title } from "@/types/index.ts";
import { activeItems, slugify } from "@/utils.ts";
import { useComputed } from "@preact/signals";
import { cx } from "class-variance-authority";

export interface Props {
  title: Title;
  icon: VNode;
  children?: ComponentChildren;
}

export function Section({ title, icon, children }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isActive = useComputed(() => activeItems.value.has(title));

  useEffect(function handleIntersectionObserver() {
    if (!headingRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 50) {
          activeItems.value = new Set([...activeItems.value, title]);
        }

        if (
          entry.isIntersecting && entry.boundingClientRect.top >= 50
        ) {
          const next = new Set(activeItems.value);
          next.delete(title);
          activeItems.value = next;
        }
      },
      { rootMargin: "-50px 0px 0px 0px", threshold: 1 },
    );

    observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h3
        class={cx(
          "text-slate-900 transition-colors duration-500",
          isActive.value && "text-purple-900!",
        )}
        ref={headingRef}
        id={slugify(title)}
      >
        <span class="flex items-center gap-x-1">
          {icon}
          <span>{title}</span>
        </span>
      </h3>
      <hr class="not-prose text-slate-300 mb-2" />
      {children}
    </>
  );
}
