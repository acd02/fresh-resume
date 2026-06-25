import type { ComponentChildren } from "preact";
import { cx } from "class-variance-authority";

interface Props {
  class?: string;
  children?: ComponentChildren;
}

export function ContainerOuter({ class: cls, children }: Props) {
  return (
    <div class={cx("sm:px-8", cls)}>
      <div class="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}

export function ContainerInner({ class: cls, children }: Props) {
  return (
    <div class={cx("relative px-4 sm:px-8 lg:px-12", cls)}>
      <div class="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
}

export function Container({ class: cls, children }: Props) {
  return (
    <ContainerOuter class={cls}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
}
