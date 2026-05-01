import { TableOfContents } from "lucide-preact";
import { useId, useState } from "preact/hooks";
import { cx } from "class-variance-authority";

import type { Toc as TocType } from "@/types/index.ts";
import { Toc } from "@/islands/Toc.tsx";

interface Props {
  toc: TocType;
}

export function TocTriggerMobile({ toc }: Props) {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const id = useId();

  const closeToc = () => setIsTocOpen(false);
  const toggleToc = () => setIsTocOpen((open) => !open);

  return (
    <>
      {isTocOpen && (
        <Toc
          id={id}
          hideHeader
          className={cx(
            "w-3/4 max-w-none mx-auto py-2 bottom-6 relative",
            "bg-slate-100 rounded-lg",
            "fadeInUp",
          )}
          onEntryClick={closeToc}
          toc={toc}
        />
      )}

      <button
        type="button"
        class={cx(
          "flex w-3/4 mx-auto bottom-4 flex-col justify-center items-center py-2.5 relative",
          "bg-slate-400 text-md cursor-pointer rounded-full",
        )}
        onClick={toggleToc}
        aria-expanded={isTocOpen}
        aria-controls={id}
      >
        <span class="flex items-center gap-x-1">
          <TableOfContents />
        </span>
        <span>
          {isTocOpen ? "close table of contents" : "see table of contents"}
        </span>
      </button>
    </>
  );
}
