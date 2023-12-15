import { Component, ReactNode } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops {
  children: ReactNode;
  as: string;
}

const TextVariants = cva(
  ["rounded-md text-base py-3 my-3 w-full text-white px-2"],
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-500 to-blue-500",
        solid:
          "bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 to-90% to-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Text({ children, variant, as }: Iprops) {
  return (
    <div as={Component} className={cn(TextVariants({ variant }))}>
      {children}
    </div>
  );
}

export default Text;
