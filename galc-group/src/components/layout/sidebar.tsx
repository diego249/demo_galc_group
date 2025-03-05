"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Building2, FileText, Home, Menu, PlusSquare, Settings, X } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const routes = [
    {
      href: "/dashboard",
      icon: BarChart3,
      title: "Dashboard",
    },
    {
      href: "/projects",
      icon: Building2,
      title: "Proyectos",
    },
    {
      href: "/projects/new",
      icon: PlusSquare,
      title: "Nuevo Proyecto",
    },
    {
      href: "/settings",
      icon: Settings,
      title: "Configuración",
    },
  ]

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden fixed top-4 left-4 z-50" 
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </Button>
      
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-sm transition-transform duration-300 md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 border-b">
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
              <Home className="h-6 w-6" />
              <span>GALC Group</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={toggleSidebar}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="grid gap-1 px-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === route.href 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {route.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-semibold text-primary-foreground">GG</span>
              </div>
              <div className="truncate">
                <p className="text-sm font-medium">GALC Group</p>
                <p className="text-xs text-muted-foreground">Constructora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
