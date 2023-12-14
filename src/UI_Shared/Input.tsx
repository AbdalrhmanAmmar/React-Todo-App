import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { InputHTMLAttributes, ReactNode } from "react";

interface Iprops
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  children: ReactNode;
}

const InputVariants = cva(
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

function Input({  variant, ...rest }: Iprops) {
  return <input className={cn(InputVariants({ variant }))} {...rest} />;
}

export default Input;
