import { ReactNode } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops extends VariantProps<typeof TextVariants> {
  children: ReactNode;
  as: keyof JSX.IntrinsicElements;
}

const TextVariants = cva([""], {
  variants: {
    variant: {
      default:
        "font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500",
      solid:
        "font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 my-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Text({ children, variant, as: Component }: Iprops) {
  return (
    <Component as={Component} className={cn(TextVariants({ variant }))}>
      {children}
    </Component>
  );
}

export default Text;
