import { classNameUtil } from "@/app/utils/classNameUtil"
import { CrossCircledIcon } from "@radix-ui/react-icons"
import React from "react"
import { NumericFormat } from "react-number-format"

interface InputCurrencyProps {
    error?: string
    onChange?: (value: string) => void
    value?: string
}

const InputCurrency: React.FC<InputCurrencyProps> = (props) => {
    const {
        error,
        onChange,
        value
    } = props

    return (
        <div>
            <NumericFormat
                className={classNameUtil(
                    "w-full text-gray-800 text-[32px] font-bold outline-none tracking-[-1px]",
                    error && "!text-red-900"
                )}
                thousandSeparator="."
                decimalSeparator=","
                onChange={event => onChange?.(event.target.value)}
                value={value}
            />

            {error && (
                <div className="flex items-center gap-2 mt-2 text-red-600">
                    <CrossCircledIcon className="mt-[1px]"/>
                    <span className="text-xs">{error}</span>
                </div>
            )}
        </div>
    )
}

export default InputCurrency