import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const buttonVariants = cva(
  ["rounded-md text-base py-3 my-3 mx-auto text-white px-2"],
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

function Button({ children, variant, ...rest }: Iprops) {
  return (
    <button className={cn(buttonVariants({ variant }))} {...rest}>
      {children}
    </button>
  );
}

export default Button;
