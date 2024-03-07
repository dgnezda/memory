import { cn } from "../../lib/utils";

export default function WhiteDiv({ children, className, value, ...props }: any) {
    return (
        <div className={cn("bg-white rounded-lg mt-2 mr-2 p-4", className)} {...props}>
            <div className="text-l">{value}</div>
            {children}
        </div>
    )
}