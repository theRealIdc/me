import React from "react";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline ">
        <h1 className="text-4xl font-bold text-white ">idc.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-4">
          <Link
            href="https://github.com/theRealIdc"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/christevie-ikonga-87b3bb19a/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
