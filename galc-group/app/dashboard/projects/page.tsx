import Link from "next/link"
import { Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  // Mock data
  const projects = [
    {
      id: "1",
      name: "Skyline Towers",
      type: "Residential",
      progress: 75,
      status: "In Progress",
      location: "Downtown Metro",
      client: "Metro Development Corp",
      startDate: "2023-05-15",
      endDate: "2024-08-30",
      budget: "$12.5M",
      description:
        "A luxury residential tower with 120 units and premium amenities including a rooftop pool and fitness center.",
    },
    {
      id: "2",
      name: "Riverside Mall",
      type: "Commercial",
      progress: 40,
      status: "In Progress",
      location: "Riverside District",
      client: "Riverside Ventures",
      startDate: "2023-08-10",
      endDate: "2025-02-28",
      budget: "$28.7M",
      description: "A modern shopping mall with 85 retail spaces, food court, and entertainment facilities.",
    },
    {
      id: "3",
      name: "Central Park Residences",
      type: "Residential",
      progress: 90,
      status: "Near Completion",
      location: "Central District",
      client: "Park Living Inc",
      startDate: "2022-11-05",
      endDate: "2024-04-15",
      budget: "$18.2M",
      description: "A mid-rise residential complex with 75 luxury apartments overlooking the city park.",
    },
    {
      id: "4",
      name: "Highway 95 Bridge",
      type: "Infrastructure",
      progress: 30,
      status: "In Progress",
      location: "North County",
      client: "State Transportation Dept",
      startDate: "2023-09-20",
      endDate: "2025-06-10",
      budget: "$42.1M",
      description:
        "A major infrastructure project to replace the aging Highway 95 bridge with a modern suspension bridge.",
    },
    {
      id: "5",
      name: "Greenview Office Park",
      type: "Commercial",
      progress: 60,
      status: "In Progress",
      location: "Business District",
      client: "Greenview Properties",
      startDate: "2023-03-12",
      endDate: "2024-09-30",
      budget: "$22.8M",
      description: "A sustainable office complex with 5 buildings, featuring green roofs and solar panels.",
    },
    {
      id: "6",
      name: "Sunset Heights Condos",
      type: "Residential",
      progress: 15,
      status: "Early Stages",
      location: "West Hills",
      client: "Sunset Development LLC",
      startDate: "2024-01-10",
      endDate: "2025-11-20",
      budget: "$15.4M",
      description: "A luxury condominium development with 45 units and panoramic city views.",
    },
    {
      id: "7",
      name: "Metro Subway Extension",
      type: "Infrastructure",
      progress: 25,
      status: "In Progress",
      location: "Downtown to Suburbs",
      client: "City Transit Authority",
      startDate: "2023-07-05",
      endDate: "2026-03-15",
      budget: "$86.3M",
      description:
        "Extension of the city subway system with 3 new stations connecting downtown to the eastern suburbs.",
    },
    {
      id: "8",
      name: "Lakeside Hospital",
      type: "Commercial",
      progress: 50,
      status: "In Progress",
      location: "Lakeside District",
      client: "Regional Healthcare System",
      startDate: "2023-04-18",
      endDate: "2025-05-30",
      budget: "$64.9M",
      description: "A state-of-the-art hospital facility with 250 beds and specialized treatment centers.",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button asChild>
          <Link href="/dashboard/projects/new">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Project Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="infrastructure">Infrastructure</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="early">Early Stages</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="near-completion">Near Completion</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="residential">Residential</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>
                    {project.type} | {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <p className="font-medium">{project.status}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="residential" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.type === "Residential")
              .map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>
                      {project.type} | {project.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className="font-medium">{project.status}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="commercial" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.type === "Commercial")
              .map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>
                      {project.type} | {project.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className="font-medium">{project.status}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="infrastructure" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.type === "Infrastructure")
              .map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>
                      {project.type} | {project.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className="font-medium">{project.status}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/dashboard/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

