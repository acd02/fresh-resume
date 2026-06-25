import { ArrowDownToLine } from "lucide-preact";

export function DownloadCvButton() {
  function handleClick() {
    const iframe = document.createElement("iframe");
    iframe.style.cssText = "position:fixed;width:0;height:0;opacity:0;";
    iframe.src = "/cv";
    document.body.appendChild(iframe);
    iframe.addEventListener("load", () => {
      iframe.contentWindow?.print();
      // remove after print dialog closes
      iframe.contentWindow?.addEventListener("afterprint", () => {
        iframe.remove();
      });
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      class="group mb-8 cursor-pointer flex items-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-800 ring-1 ring-zinc-900/5 transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:text-zinc-200 dark:ring-white/10 dark:hover:bg-zinc-800"
    >
      <ArrowDownToLine class="h-4 w-4 flex-none stroke-zinc-400 transition group-hover:stroke-zinc-600 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      Download CV
    </button>
  );
}
