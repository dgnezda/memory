import Link from "next/link";
import Button from "./Button";
import { mainColors } from "../colors";
import { cn } from "@/app/lib/utils";

const EmailButton = ({ children, className, address, ...props }: any) => {
    return (
        <div className="my-4" {...props}>
            <Button className={cn(`${mainColors.main} ${mainColors.hover} w-40`, className)}>
                <Link href={address} className="text-white text-md text-bold">
                    {children}
                </Link>
            </Button>
        </div>
    )
}

export default EmailButton;