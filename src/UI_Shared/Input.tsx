import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { InputHTMLAttributes } from "react";

interface Iprops
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

const InputVariants = cva(["w-full xl:px-5  text-center  py-2 rounded-lg"], {
  variants: {
    variant: {
      default: "border-2 border-black",
      solid:
        "bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 to-90% to-green-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Input({ variant, className, ...rest }: Iprops) {
  return (
    <input className={cn(InputVariants({ variant }), className)} {...rest} />
  );
}

export default Input;
