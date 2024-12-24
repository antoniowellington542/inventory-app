import React, { useState } from "react"
import * as RdxSelect from "@radix-ui/react-select"
import {
	ChevronDownIcon,
	ChevronUpIcon,
	CrossCircledIcon,
} from "@radix-ui/react-icons"
import { classNameUtil } from "@/app/utils/classNameUtil"

interface SelectProps {
	options: Array<{
		value: string
		label: string
	}>
	error?: string
	placeholder?: string
	onChange?: (value: string) => void
}

const Select: React.FC<SelectProps> = (props) => {
	const {
		options,
		error,
		placeholder,
		onChange
	} = props

	const [selectedValue, setSelectedValue] = useState<string>("")

	const handleSelect = (value: string) => {
		setSelectedValue(value)
		onChange?.(value)
	}

	return (
		<div>
			<div className="relative">
				<label
					className={classNameUtil(
						"absolute left-3 top-1/2 z-10 -translate-y-2/3 text-gray-700 pointer-events-none",
						selectedValue && "text-xs left-[13px] top-1 transition-all translate-y-0"
					)}
				>
					{placeholder}
				</label>

				<RdxSelect.Root
					onValueChange={handleSelect}
				>
					<RdxSelect.Trigger
						className={classNameUtil(
							"bg-white w-full rounded-lg border border-gray-500 px-3 h-12 text-gray-800 focus:border-gray-800",
							"transition-all outline-none relative text-left pt-4",
							error && "!border-red-500"
						)}
					>
						<RdxSelect.Value />

						<RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
							<ChevronDownIcon className="w-6 h-6 text-gray-800"/>
						</RdxSelect.Icon>
					</RdxSelect.Trigger>
					<RdxSelect.Portal>
						<RdxSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
							<RdxSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
								<ChevronUpIcon />
							</RdxSelect.ScrollUpButton>
							<RdxSelect.Viewport className="p-2">
								{options.map(option => (
									<RdxSelect.Item
										className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold data-[highlighted]:bg-gray-50 rounded-lg outline-none transition-colors"
										value={option.value}
										key={option.value}
									>
										<RdxSelect.ItemText>
											{option.label}
										</RdxSelect.ItemText>
									</RdxSelect.Item>
								))}
							</RdxSelect.Viewport>
							<RdxSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
								<ChevronDownIcon />
							</RdxSelect.ScrollDownButton>
						</RdxSelect.Content>
					</RdxSelect.Portal>
				</RdxSelect.Root>
			</div>

			{error && (
				<div className="flex items-center gap-2 mt-2 text-red-600">
					<CrossCircledIcon className="mt-[1px]"/>
					<span className="text-xs">{error}</span>
				</div>
			)}
		</div>
	)
}

export default Select