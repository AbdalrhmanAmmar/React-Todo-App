import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const buttonVariants = cva(
  [
    "rounded-md text-base py-3 my-3 w-full  text-white px-2 font-semibold w-[70%]",
  ],
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-500 to-blue-500",
        solid: "bg-gradient-to-r from-orange-500  to-yellow-500 ",
        Cancel: "bg-gradient-to-r from-red-500  to-red-800 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Button({ children, className, variant, ...rest }: Iprops) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
