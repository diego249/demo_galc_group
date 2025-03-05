import Link from "next/link"
import { ArrowLeft, Building, Calendar, DollarSign, Edit, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in a real app, you would fetch this from an API
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
      milestones: [
        { name: "Foundation", status: "Completed", date: "2023-07-20" },
        { name: "Structural Framework", status: "Completed", date: "2023-11-15" },
        { name: "Exterior Walls", status: "In Progress", date: "2024-02-10" },
        { name: "Interior Finishing", status: "Pending", date: "2024-05-20" },
        { name: "Landscaping", status: "Pending", date: "2024-07-15" },
      ],
      team: [
        { name: "John Smith", role: "Project Manager" },
        { name: "Maria Rodriguez", role: "Lead Architect" },
        { name: "David Chen", role: "Structural Engineer" },
        { name: "Sarah Johnson", role: "Interior Designer" },
        { name: "Michael Brown", role: "Site Supervisor" },
      ],
      materials: [
        { name: "Concrete", status: "Delivered", quantity: "2,500 tons" },
        { name: "Steel Beams", status: "Delivered", quantity: "850 units" },
        { name: "Glass Panels", status: "Partially Delivered", quantity: "420/600 units" },
        { name: "Electrical Wiring", status: "Ordered", quantity: "15,000 meters" },
        { name: "Plumbing Fixtures", status: "Not Ordered", quantity: "450 units" },
      ],
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
      milestones: [
        { name: "Site Preparation", status: "Completed", date: "2023-09-30" },
        { name: "Foundation", status: "Completed", date: "2023-12-15" },
        { name: "Structural Framework", status: "In Progress", date: "2024-03-20" },
        { name: "Exterior Construction", status: "Pending", date: "2024-07-10" },
        { name: "Interior Finishing", status: "Pending", date: "2024-11-25" },
      ],
      team: [
        { name: "Robert Wilson", role: "Project Manager" },
        { name: "Jennifer Lee", role: "Lead Architect" },
        { name: "Thomas Garcia", role: "Structural Engineer" },
        { name: "Emily Davis", role: "Interior Designer" },
        { name: "James Taylor", role: "Site Supervisor" },
      ],
      materials: [
        { name: "Concrete", status: "Delivered", quantity: "4,200 tons" },
        { name: "Steel Beams", status: "Partially Delivered", quantity: "1,200/1,800 units" },
        { name: "Glass Panels", status: "Ordered", quantity: "950 units" },
        { name: "Electrical Wiring", status: "Not Ordered", quantity: "28,000 meters" },
        { name: "HVAC Systems", status: "Not Ordered", quantity: "35 units" },
      ],
    },
  ]

  const project = projects.find((p) => p.id === params.id) || projects[0]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/projects">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to projects</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <Button variant="outline" size="icon" className="ml-auto">
          <Edit className="h-4 w-4" />
          <span className="sr-only">Edit project</span>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>
              {project.type} | {project.location}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Client:</span>
                  <span className="text-sm font-medium">{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Location:</span>
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Type:</span>
                  <span className="text-sm font-medium">{project.type}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Start Date:</span>
                  <span className="text-sm font-medium">{project.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">End Date:</span>
                  <span className="text-sm font-medium">{project.endDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Budget:</span>
                  <span className="text-sm font-medium">{project.budget}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-medium">Description</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Current status and timeline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Current Status</p>
                <p className="text-sm text-muted-foreground">{project.status}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Days Remaining</p>
                <p className="text-sm text-muted-foreground">245 days</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Timeline</p>
              <div className="mt-2 space-y-2">
                {project.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        milestone.status === "Completed"
                          ? "bg-green-500"
                          : milestone.status === "In Progress"
                            ? "bg-amber-500"
                            : "bg-muted"
                      }`}
                    />
                    <span className="text-xs">{milestone.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{milestone.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="team" className="space-y-4">
        <TabsList>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>
        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Team</CardTitle>
              <CardDescription>Team members assigned to this project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.team.map((member, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="materials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Materials</CardTitle>
              <CardDescription>Materials required for this project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.materials.map((material, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{material.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {material.quantity}</p>
                    </div>
                    <div
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        material.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : material.status === "Partially Delivered"
                            ? "bg-amber-100 text-amber-800"
                            : material.status === "Ordered"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {material.status}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Project documentation and files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">No documents available yet.</p>
                <Button variant="outline">Upload Document</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="issues" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Issues</CardTitle>
              <CardDescription>Current issues and blockers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">No issues reported yet.</p>
                <Button variant="outline">Report Issue</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

