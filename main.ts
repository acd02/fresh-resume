import { App, staticFiles } from "fresh";
import { define, type State } from "./utils.ts";
import type { Toc } from "@/types/index.ts";

export const app = new App<State>();

app.use(staticFiles());

const toc: Toc = [
  { title: "What I Do" },
  {
    title: "Skills",
    subTitles: [
      "HTML",
      "CSS",
      "JS",
      "Libs / Framerworks",
      "Back-end",
      "Testing",
      "Workflow",
    ],
  },
  { title: "Experience" },
  { title: "Education" },
];

// Pass a shared value from a middleware
app.use(async (ctx) => {
  ctx.state.toc = toc;
  return await ctx.next();
});

// this can also be defined via a file. feel free to delete this!
const exampleLoggerMiddleware = define.middleware((ctx) => {
  console.log(`${ctx.req.method} ${ctx.req.url}`);
  return ctx.next();
});
app.use(exampleLoggerMiddleware);

// Include file-system based routes here
app.fsRoutes();
