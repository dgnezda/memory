import { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/utils'

const Button = ({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={cn("px-4 py-2 bg-red-500", className)} {...props}>
            {children}
        </button>
    )
}

export default Button