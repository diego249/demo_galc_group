"use client"

import { useState } from "react"
import Link from "next/link"
import { Building2, CheckCircle, Clock, ChevronDown } from "lucide-react"

import { getDashboardStats } from "@/data/projects"
import { formatCurrency } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const stats = getDashboardStats()
  const [timeframe] = useState("all")

  return (
    <div className="container mx-auto px-4 py-6 space-y-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Projects and Stats</p>
        </div>
        <Link href="/projects">
          <Button className="w-full sm:w-auto transition-all hover:shadow-md">
            Projects
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <TabsList className="mb-4 sm:mb-0">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <div className="flex items-center">
            <Button variant="outline" size="sm" className="text-xs">
              {timeframe === "all"
                ? "Todos los periodos"
                : timeframe === "month"
                  ? "Este mes"
                  : timeframe === "quarter"
                    ? "Este trimestre"
                    : "Este año"}
              <ChevronDown className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-background/50">
                <CardTitle className="text-sm font-medium">Total projects</CardTitle>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold">{stats.totalProjects}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatCurrency(stats.totalBudget)} in total budget
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-background/50">
                <CardTitle className="text-sm font-medium">Active projects</CardTitle>
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/30">
                  <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold">{stats.activeProjects}</div>
                <div className="flex items-center mt-1">
                  <Progress value={(stats.activeProjects / stats.totalProjects) * 100} className="h-1.5 flex-1" />
                  <span className="text-xs text-muted-foreground ml-2">
                    {((stats.activeProjects / stats.totalProjects) * 100).toFixed(0)}%
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-background/50">
                <CardTitle className="text-sm font-medium">Completed projects</CardTitle>
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold">{stats.completedProjects}</div>
                <div className="flex items-center mt-1">
                  <Progress value={(stats.completedProjects / stats.totalProjects) * 100} className="h-1.5 flex-1" />
                  <span className="text-xs text-muted-foreground ml-2">
                    {((stats.completedProjects / stats.totalProjects) * 100).toFixed(0)}%
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-background/50">
                <CardTitle className="text-sm font-medium">Square meters</CardTitle>
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center dark:bg-amber-900/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-amber-600 dark:text-amber-400"
                  >
                    <path d="M9 6.75V15m6-6v8.25m.503 3.75 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold">{stats.totalSquareMeters.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">Among all the projects</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-7">
            <Card className="md:col-span-4 border border-border/40 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Distribution by Type</CardTitle>
                <CardDescription>Classification of projects by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5 mt-2">
                  {Object.entries(stats.projectsByType).map(([type, count]) => {
                    const percentage = (count / stats.totalProjects) * 100
                    return (
                      <div key={type} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-sm">{type}</div>
                          <div className="text-sm text-muted-foreground">
                            {count} <span className="text-xs">({percentage.toFixed(0)}%)</span>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3 border border-border/40 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Projects</CardTitle>
                <CardDescription>Latest projects started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mt-2">
                  {stats.recentProjects.map((project) => {
                    const statusColor =
                      project.status === "In progress"
                        ? "bg-blue-500"
                        : project.status === "Completed"
                          ? "bg-green-500"
                          : project.status === "In planning"
                            ? "bg-amber-500"
                            : "bg-gray-500"

                    return (
                      <div
                        key={project.id}
                        className="group flex items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 ${statusColor}`} />
                        <div className="flex-1">
                          <div className="font-medium text-sm truncate">{project.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{project.status}</div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-2">
                            <div className="text-xs font-medium">{project.progress}%</div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronDown className="h-4 w-4" />
                            <span className="sr-only">Details</span>
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <Card className="border border-border/40">
            <CardHeader>
              <CardTitle>All Projects</CardTitle>
              <CardDescription>Manage and visualize all your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Select the Summary tab to view project statistics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="border border-border/40">
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
              <CardDescription>Metrics and trends of your projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Select the Summary tab to view project statistics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

