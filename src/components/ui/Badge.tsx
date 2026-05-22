import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary",
        boys: "bg-blue-50 text-blue-700 border border-blue-100",
        girls: "bg-pink-50 text-pink-700 border border-pink-100",
        mixed: "bg-purple-50 text-purple-700 border border-purple-100",
        verified: "bg-emerald-50 text-emerald-700 border border-emerald-100",
        featured: "bg-accent-light text-amber-800 border border-accent/30",
        amenity: "bg-slate-100 text-slate-600",
        gold: "bg-accent text-primary-dark font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
