import { createDefine } from "fresh";
import type { SubTitle, Title, Toc } from "@/types/index.ts";
import { signal } from "@preact/signals";

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  toc: Toc;
}

export const define = createDefine<State>();

export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const activeItems = signal(new Set<Title | SubTitle>());
