import { classNameUtil } from "@/app/utils/classNameUtil"
import React, { ComponentProps } from "react"
import { Link, useLocation } from "react-router-dom"

interface ListItemMenuProps extends ComponentProps<"li"> {
    name: string
    icon?: React.ReactNode
    destinyRoute: string
    className?: string
}

const ListItemMenu: React.FC<ListItemMenuProps> = ({
    name,
    icon,
    destinyRoute,
    className,
    ...props
}) => {
    const location = useLocation()

    const isCurrentOption = location.pathname === `/${destinyRoute}`

    return (
        <li
            {...props}
            className={classNameUtil(
                "text-gray-900 pl-3 pt-1 pb-1",
                className,
                isCurrentOption && "bg-blue-500 text-white rounded-[4px]"
            )}
        >
            <div className="flex items-center gap-2">
                {icon}

                <Link
                    to={`/${destinyRoute}`}
                    className="text-lg"
                >
                    {name}
                </Link>
            </div>
        </li>
    )
}

export default ListItemMenu