import React from "react";
import { cn } from "@/lib/utils";

export const Section = (
  props: React.PropsWithChildren<{ className?: string }>
) => {
  return (
    <section className={cn("max-w-6xl px-10 sm:px-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
