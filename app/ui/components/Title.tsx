import { cn } from '../../lib/utils'

const Title = ({ children, className, ...props }: any) => {
    return (
        <div className={cn("text-xl col-span-2 bg-white rounded-lg md:mt-4 mt-0 mr-2 p-4", className)} {...props}>
            {children}
        </div>
    )
}

export default Title