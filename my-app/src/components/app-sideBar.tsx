"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Activity,
  Brain,
  ClipboardList,
  Database,
  FileWarning,
  Microscope,
  Stethoscope,
  Settings,
  BarChart3,
  BookOpen,
  HelpCircle,
  ChevronRight,
  ChevronDown,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const mainModules = [
  {
    title: "Dashboard",
    icon: Activity,
    path: "/",
  },
  {
    title: "Precision Diagnostics",
    icon: Microscope,
    path: "/diagnostics",
  },
  {
    title: "Patient Query Assistant",
    icon: Stethoscope,
    path: "/query-assistant",
  },
  {
    title: "Personalized Care Plans",
    icon: ClipboardList,
    path: "/care-plans",
  },
]

const dataModules = [
  {
    title: "Synthetic Data Generator",
    icon: Database,
    path: "/data-generator",
  },
  {
    title: "Adverse Event Predictor",
    icon: FileWarning,
    path: "/event-predictor",
  },
  {
    title: "Analytics Dashboard",
    icon: BarChart3,
    path: "/analytics",
  },
]

const supportModules = [
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    title: "Documentation",
    icon: BookOpen,
    path: "/documentation",
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    path: "/help",
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [openGroups, setOpenGroups] = useState({
    main: true,
    data: true,
    support: true,
  })

  const toggleGroup = (group: keyof typeof openGroups) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-primary font-sans">Health Hub</span>
            <span className="text-xs text-muted-foreground">AI-Powered Healthcare</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <Collapsible open={openGroups.main} onOpenChange={() => toggleGroup("main")} className="mb-2">
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground">
                Core Modules
                {openGroups.main ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mainModules.map((module) => (
                    <SidebarMenuItem key={module.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === module.path}
                        className="group transition-all duration-200 hover:bg-primary/10 data-[active=true]:bg-primary/15 data-[active=true]:text-primary"
                      >
                        <Link href={module.path}>
                          <module.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110 data-[active=true]:text-primary" />
                          <span>{module.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <SidebarSeparator className="my-2" />

        <Collapsible open={openGroups.data} onOpenChange={() => toggleGroup("data")} className="mb-2">
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground">
                Data & Analytics
                {openGroups.data ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {dataModules.map((module) => (
                    <SidebarMenuItem key={module.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === module.path}
                        className="group transition-all duration-200 hover:bg-primary/10 data-[active=true]:bg-primary/15 data-[active=true]:text-primary"
                      >
                        <Link href={module.path}>
                          <module.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110 data-[active=true]:text-primary" />
                          <span>{module.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <SidebarSeparator className="my-2" />

        <Collapsible open={openGroups.support} onOpenChange={() => toggleGroup("support")}>
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground">
                Support & Settings
                {openGroups.support ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {supportModules.map((module) => (
                    <SidebarMenuItem key={module.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === module.path}
                        className="group transition-all duration-200 hover:bg-primary/10 data-[active=true]:bg-primary/15 data-[active=true]:text-primary"
                      >
                        <Link href={module.path}>
                          <module.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110 data-[active=true]:text-primary" />
                          <span>{module.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter className="mt-auto border-t border-border p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-border">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Sarah Chen" />
            <AvatarFallback className="bg-primary/10 text-primary">SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium">Dr. Sarah Chen</span>
            <span className="text-xs text-muted-foreground">Medical Director</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Version</span>
            <span className="text-xs font-medium">2.1.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Last updated</span>
            <span className="text-xs font-medium">Today</span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

