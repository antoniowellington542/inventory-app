import { ComponentProps, forwardRef } from "react"

import {
    CrossCircledIcon
} from "@radix-ui/react-icons"
import { classNameUtil } from "@/app/utils/classNameUtil"

interface InputProps extends ComponentProps<"input"> {
    name: string
    error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    placeholder,
    name,
    id,
    error,
    className,
    ...props
}, ref) => {
    const inputId = id ?? name

    return (
        <div className="relative">
            <input
                {...props}
                ref={ref}
                name={name}
                id={inputId}
                className={classNameUtil(
                    "bg-white w-full rounded-lg border border-gray-500 px-3 h-12 text-gray-800 pt-3.5",
                    "peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none",
                    error && "!border-red-500",
                    className
                )}
                placeholder=" "
            />

            <label
                className="absolute text-xs left-3 top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5
                transition-all peer-focus:bd-red-500"
                htmlFor={name}
                id={inputId}
            >
                {placeholder}
            </label>
            
            {error && (
                <div className="flex items-center gap-2 mt-2 text-red-600">
                    <CrossCircledIcon className="mt-[1px]"/>
                    <span className="text-xs">{error}</span>
                </div>
            )}
        </div>
    )
})

Input.displayName = "Input"

export default Input