import type { VNode } from "preact";
import { useSignal } from "@preact/signals";
import { cx } from "class-variance-authority";

import type { Toc as TocType } from "@/types/index.ts";
import { Toc } from "@/islands/Toc.tsx";
import { TOC_ID } from "@/constants.ts";

interface Props {
  toc: TocType;
  icon: VNode;
}

export function TocTriggerMobile({ toc, icon }: Props) {
  const isTocOpen = useSignal(false);

  const closeToc = () => isTocOpen.value = false;
  const toggleToc = () => isTocOpen.value = !isTocOpen.value;

  return (
    <>
      {isTocOpen.value && (
        <Toc
          id={TOC_ID}
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
        aria-expanded={isTocOpen.value}
        aria-controls={TOC_ID}
      >
        <span class="flex items-center gap-x-1">
          {icon}
        </span>
        <span>
          {isTocOpen.value
            ? "close table of contents"
            : "see table of contents"}
        </span>
      </button>
    </>
  );
}
