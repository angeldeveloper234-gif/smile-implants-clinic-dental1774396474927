import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap font-sans font-bold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
                outline:
                    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
                ghost:
                    "text-primary hover:bg-primary/10",
                secondary:
                    "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20",
            },
            size: {
                default: "h-12 px-8 text-sm",
                sm: "h-9 px-4 text-xs",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }