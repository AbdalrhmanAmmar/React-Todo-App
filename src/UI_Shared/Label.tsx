import { LabelHTMLAttributes } from "react";
import { cn } from "../Libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Iprops
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  Text: string;
}
    
const labelVariants = cva(
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
    
    
function Label({ Text,variant, ...rest }: Iprops) {

  return (
    <label className={cn(labelVariants({ variant }))} {...rest}>
      {Text}
    </label>
  );
}

export default Label