"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Building2,
  ChevronDown,
  Construction,
  FileText,
  Home,
  Menu,
  PieChart,
  Plus,
  Settings,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isProjectsOpen, setIsProjectsOpen] = useState(true)

  const routes = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    {
      href: "/dashboard/projects",
      label: "Projects",
      icon: Construction,
      isActive: pathname.includes("/dashboard/projects"),
      children: [
        { href: "/dashboard/projects/residential", label: "Residential" },
        { href: "/dashboard/projects/commercial", label: "Commercial" },
        { href: "/dashboard/projects/infrastructure", label: "Infrastructure" },
      ],
    },
    { href: "/dashboard/clients", label: "Clients", icon: Users },
    { href: "/dashboard/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/analytics", label: "Analytics", icon: PieChart },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-2 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <Building2 className="h-6 w-6" />
                <span>GALC Group</span>
              </Link>
              <div className="grid gap-1 pt-2">
                {routes.map((route) => (
                  <div key={route.href}>
                    <Link
                      href={route.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === route.href || route.isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <route.icon className="h-5 w-5" />
                      {route.label}
                      {route.children && (
                        <ChevronDown
                          className={`ml-auto h-4 w-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`}
                          onClick={(e) => {
                            e.preventDefault()
                            setIsProjectsOpen(!isProjectsOpen)
                          }}
                        />
                      )}
                    </Link>
                    {route.children && isProjectsOpen && (
                      <div className="ml-6 mt-1 grid gap-1">
                        {route.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                              pathname === child.href
                                ? "bg-muted font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Building2 className="h-6 w-6" />
          <span>GALC Group</span>
        </Link>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <nav className="grid gap-2 p-4 text-sm">
            <div className="py-2">
              <h2 className="mb-2 px-2 text-lg font-semibold">Menu</h2>
              <div className="grid gap-1">
                {routes.map((route) => (
                  <div key={route.href}>
                    <Link
                      href={route.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                        pathname === route.href || route.isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <route.icon className="h-4 w-4" />
                      {route.label}
                      {route.children && (
                        <ChevronDown
                          className={`ml-auto h-4 w-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`}
                          onClick={(e) => {
                            e.preventDefault()
                            setIsProjectsOpen(!isProjectsOpen)
                          }}
                        />
                      )}
                    </Link>
                    {route.children && isProjectsOpen && (
                      <div className="ml-6 mt-1 grid gap-1">
                        {route.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                              pathname === child.href
                                ? "bg-muted font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

