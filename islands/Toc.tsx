import type { VNode } from "preact";
import { cx } from "class-variance-authority";
import type { Toc as TocType } from "@/types/index.ts";
import { activeItems, slugify } from "@/utils.ts";
import { TOC_HEADER_ID } from "@/constants.ts";
import { useComputed } from "@preact/signals";

type BaseProps = {
  toc: TocType;
  className?: string;
  id?: string;
  onEntryClick?: () => void;
};

type WithHeader = BaseProps & {
  hideHeader?: false;
  icon: VNode;
};

type WithoutHeader = BaseProps & {
  hideHeader: true;
  icon?: never;
};

type Props = WithHeader | WithoutHeader;

export function Toc(
  { toc, className, id, icon, hideHeader, onEntryClick }: Props,
) {
  const activeItemsSet = useComputed(() => activeItems.value);

  return (
    <nav
      id={id}
      class={cx("prose", className)}
      {...(!hideHeader && { "aria-labelledby": TOC_HEADER_ID })}
    >
      {!hideHeader && (
        <div class="border border-slate-200 px-2 py-1 inline-block rounded-lg">
          <div class="flex items-center gap-x-1">
            {icon}
            <div>
              <h3 id={TOC_HEADER_ID} class="text-lg font-semibold not-prose">
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
                activeItemsSet.value.has(entry.title) && "active",
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
