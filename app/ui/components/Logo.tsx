import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { lobster } from "../fonts";
import { cn } from "@/app/lib/utils";

const Logo = ({ children, className, ...props }: any) => {
    return (
        <div className={className} {...props}>
            <PuzzlePieceIcon className='lg:w-24 w-10'/>
            <div className={cn(`${lobster.className} lg:text-3xl text-2xl self-auto ml-1 md:top-5 top-1`, className)}>memory</div>
            {children}
        </div>
    )
}

export default Logo