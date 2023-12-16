import { ReactNode } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops extends VariantProps<typeof TextVariants> {
  children: ReactNode;
  as: keyof JSX.IntrinsicElements; 
}

const TextVariants = cva(
  [
    "font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500",
  ],
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

function Text({ children, variant, as: Component }: Iprops) {
  return (
    <Component as={Component} className={cn(TextVariants({ variant }))}>
      {children}
    </Component>
  );
}

export default Text;
