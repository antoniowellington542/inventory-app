import { classNameUtil } from "@/app/utils/classNameUtil"
import React, { ComponentProps } from "react"
import Spinner from "@/view/components/Spinner"

interface ButtonProps extends ComponentProps<"button"> {
    isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
    name,
    className,
    isLoading,
    disabled,
    children,
    ...props
}) => {
    return (
        <div>
            <button
                {...props}
                disabled={disabled || isLoading}
                className={classNameUtil(
                    "w-full bg-yellow-600 hover:bg-yellow-500 disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium",
                    "text-white transition-all disabled:cursor-not-allowed flex items-center justify-center",
                    className
                )}
            >
                {isLoading && <Spinner />}

                {!isLoading && children}
            </button>
        </div>
    )
}

export default Button