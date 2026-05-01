import { cx } from "class-variance-authority";
import { TableOfContents } from "lucide-preact";
import type { Toc as TocType } from "@/types/index.ts";
import { activeItems, slugify } from "@/utils.ts";
import { TOC_ID } from "@/constants.ts";

export interface Props {
  toc: TocType;
  className?: string;
  id?: string;
  hideHeader?: boolean;
  onEntryClick?: () => void;
}

export function Toc({ toc, className, id, hideHeader, onEntryClick }: Props) {
  const activeItemsSet = activeItems.value;

  return (
    <nav
      id={id}
      class={cx("prose", className)}
      {...(!hideHeader && { "aria-labelledby": TOC_ID })}
    >
      {!hideHeader && (
        <div class="border border-slate-200 px-2 py-1 inline-block rounded-lg">
          <div class="flex items-center gap-x-1">
            <TableOfContents />
            <div>
              <h3 id={TOC_ID} class="text-lg font-semibold not-prose">
                table of contents
              </h3>
            </div>
          </div>
        </div>
      )}

      <ul>
        {toc.map((entry) => (
          <li key={entry.title}>
            <a
              class={cx(
                activeItemsSet.has(entry.title) && "active",
                "[.active]:text-purple-800 [transition:color_0.25s_ease-out]",
              )}
              href={`#${slugify(entry.title)}`}
              onClick={() => onEntryClick?.()}
            >
              {entry.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
