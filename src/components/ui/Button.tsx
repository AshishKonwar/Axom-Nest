import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-sm hover:bg-primary-dark active:scale-95",
        secondary:
          "bg-white text-primary border border-primary/20 hover:bg-primary/5 active:scale-95",
        ghost:
          "text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:scale-95",
        accent:
          "bg-accent text-primary-dark font-bold shadow-gold hover:bg-accent-dark active:scale-95",
        outline:
          "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:scale-95",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        default: "h-10 px-6",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
