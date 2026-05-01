import { Code2, Mail, Play, Zap } from "lucide-preact";

export function Header() {
  return (
    <>
      <h1>Alexandre CADIOT</h1>
      <h2>Staff Frontend Engineer</h2>
      <div class="flex flex-col gap-y-4">
        <span class="flex items-center gap-x-1">
          <Mail />
          <span>
            <a href="mailto:alex.acd02@gmail.com">alex.acd02@gmail.com</a>
          </span>
        </span>
        <span class="flex items-center gap-x-1">
          <Code2 />
          <span>
            <a href="https://github.com/acd02">https://github.com/acd02</a>
          </span>
        </span>
        <span class="flex items-center gap-x-1">
          <Zap />
          <span>
            <a href="https://stackblitz.com/@acd02/collections">stackblitz</a>
          </span>
        </span>
        <span class="flex items-center gap-x-1">
          <Play color="#ea580c" fill="#ea580c" />
          <span>
            current position @<a href="https://www.leboncoin.fr/">leboncoin</a>
          </span>
        </span>
      </div>
    </>
  );
}
