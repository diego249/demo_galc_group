"use client"

import { useState } from "react"
import {
  Building2,
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  Settings,
  Menu,
  Bell,
  BarChart3,
  TrendingUp,
  Clock,
  HardHat,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-muted/40">
        <div className="flex h-14 items-center border-b px-4">
          <div className="flex items-center gap-2 font-semibold">
            <Building2 className="h-6 w-6" />
            <span className="text-xl">GALC Group</span>
          </div>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">Dashboard</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Overview
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Building2 className="h-4 w-4" />
                Projects
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Team
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Documents
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Schedule
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <div className="flex items-center gap-2 font-semibold">
              <Building2 className="h-6 w-6" />
              <span className="text-xl">GALC Group</span>
            </div>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">Dashboard</h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Overview
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Building2 className="h-4 w-4" />
                  Projects
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Users className="h-4 w-4" />
                  Team
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FileText className="h-4 w-4" />
                  Documents
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:px-6">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex-1" />
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Avatar"
              className="rounded-full"
              height={32}
              width={32}
            />
            <span className="sr-only">Profile</span>
          </Button>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">36</div>
                <p className="text-xs text-muted-foreground">+4 new hires</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1.2M</div>
                <p className="text-xs text-muted-foreground">+8% from last quarter</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Project Completion</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">86%</div>
                <p className="text-xs text-muted-foreground">+2% from last week</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Current Projects</CardTitle>
                <CardDescription>Overview of ongoing construction projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Skyline Tower", progress: 75, location: "Downtown" },
                    { name: "Riverside Apartments", progress: 45, location: "East Side" },
                    { name: "Central Plaza", progress: 90, location: "Business District" },
                    { name: "Harbor View Hotel", progress: 30, location: "Waterfront" },
                  ].map((project) => (
                    <div key={project.name} className="flex items-center">
                      <div className="w-full">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{project.name}</span>
                          <span className="text-sm text-muted-foreground">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">{project.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Site inspection completed",
                      project: "Skyline Tower",
                      time: "2 hours ago",
                      icon: HardHat,
                    },
                    {
                      title: "New materials delivered",
                      project: "Riverside Apartments",
                      time: "Yesterday",
                      icon: Building2,
                    },
                    {
                      title: "Team meeting scheduled",
                      project: "All Projects",
                      time: "Tomorrow, 9:00 AM",
                      icon: Calendar,
                    },
                    {
                      title: "Phase 2 approval",
                      project: "Central Plaza",
                      time: "2 days ago",
                      icon: FileText,
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-muted">
                        <activity.icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.project}</p>
                        <p className="text-xs flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

