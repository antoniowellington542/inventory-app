"use client"

import * as React from "react"
import {
  ArrowLeftRight,
  GalleryVerticalEnd,
  Gauge,
  Layers
} from "lucide-react"

import { NavMain } from "@/components/AppSideBar/NavMain"
import { NavUser } from "@/components/AppSideBar/NavUser"
import { TeamSwitcher } from "@/components/AppSideBar/TeamSwitcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Gauge,
      isActive: true
    },
    {
      title: "Produtos",
      url: "/products",
      icon: Layers
    },
    {
      title: "Transacoes",
      url: "/product-transactions",
      icon: ArrowLeftRight
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
