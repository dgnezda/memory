import { cn } from "../../lib/utils";

export default function ColorSwash({ children, className, ...props }: any) {
    return (
        <button className={cn("rounded-lg mt-2 mr-2 p-4", className)} {...props}>
            {children}
        </button>
    )
}