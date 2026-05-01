export type Title = "What I Do" | "Skills" | "Experience" | "Education";

export type SubTitle =
  | "HTML"
  | "CSS"
  | "JS"
  | "Libs / Framerworks"
  | "Back-end"
  | "Testing"
  | "Workflow";

interface TocEntry {
  title: Title;
  subTitles?: SubTitle[];
}

export type Toc = TocEntry[];
