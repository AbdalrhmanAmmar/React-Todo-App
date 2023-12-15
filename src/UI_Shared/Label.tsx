import { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  Text: ReactNode;
}

const labelVariants = cva([" font-semibold my-3"], {
  variants: {
    variant: {
      default: "text-black",
      solid:
        "bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 to-90% to-green-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Label({ Text, variant, ...rest }: Iprops) {
  return (
    <label className={cn(labelVariants({ variant }))} {...rest}>
      {Text}
    </label>
  );
}

export default Label;
