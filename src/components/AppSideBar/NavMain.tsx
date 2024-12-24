"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { useNavigate, useRoutes } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[]
}) {

    const navigate = useNavigate()

    return (
        <SidebarGroup>
        <SidebarGroupLabel>Estoque</SidebarGroupLabel>
        <SidebarMenu>
            {items.map((item) => (
            <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
            >
                <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        tooltip={item.title}
                        onClick={() => {
                            navigate(item.url)
                        }}
                    >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                </SidebarMenuItem>
            </Collapsible>
            ))}
        </SidebarMenu>
        </SidebarGroup>
    )
}
