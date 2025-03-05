import Link from "next/link"
import { ArrowDownToLine, BarChart3, Calendar, Clock, Download, FileText, Filter, LineChart, PieChart, Plus, Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportsPage() {
  // Mock data for reports
  const reports = [
    {
      id: "1",
      name: "Monthly Progress Report - April 2024",
      type: "Progress",
      format: "PDF",
      createdBy: "James Wilson",
      createdAt: "2024-05-01",
      size: "2.4 MB",
      description: "Monthly summary of all active projects progress and milestones.",
    },
    {
      id: "2",
      name: "Q1 Financial Summary 2024",
      type: "Financial",
      format: "Excel",
      createdBy: "Sarah Chen",
      createdAt: "2024-04-15",
      size: "1.8 MB",
      description: "Quarterly financial report including budget vs. actual spending for all projects.",
    },
    {
      id: "3",
      name: "Skyline Towers - Structural Inspection",
      type: "Inspection",
      format: "PDF",
      createdBy: "Michael Rodriguez",
      createdAt: "2024-04-10",
      size: "5.2 MB",
      description: "Detailed structural inspection report for the Skyline Towers project.",
    },
    {
      id: "4",
      name: "Highway 95 Bridge - Environmental Impact",
      type: "Environmental",
      format: "PDF",
      createdBy: "Jennifer Taylor",
      createdAt: "2024-03-28",
      size: "8.7 MB",
      description: "Environmental impact assessment for the Highway 95 Bridge project.",
    },
    {
      id: "5",
      name: "Riverside Mall - Material Usage Report",
      type: "Materials",
      format: "Excel",
      createdBy: "David Lee",
      createdAt: "2024-03-22",
      size: "1.2 MB",
      description: "Detailed breakdown of materials used in the Riverside Mall project.",
    },
    {
      id: "6",
      name: "Safety Incident Report - March 2024",
      type: "Safety",
      format: "PDF",
      createdBy: "Emily Johnson",
      createdAt: "2024-04-02",
      size: "1.5 MB",
      description: "Monthly safety report including incidents, near-misses, and corrective actions.",
    },
    {
      id: "7",
      name: "Labor Hours Analysis - Q1 2024",
      type: "Labor",
      format: "Excel",
      createdBy: "Robert Brown",
      createdAt: "2024-04-12",
      size: "2.1 MB",
      description: "Analysis of labor hours across all projects for Q1 2024.",
    },
    {
      id: "8",
      name: "Vendor Performance Review",
      type: "Vendor",
      format: "PowerPoint",
      createdBy: "Lisa Martinez",
      createdAt: "2024-03-15",
      size: "4.3 MB",
      description: "Quarterly review of vendor performance and reliability.",
    },
  ]

  // Mock data for report templates
  const templates = [
    {
      id: "1",
      name: "Monthly Progress Report",
      type: "Progress",
      lastUsed: "2024-05-01",
      description: "Standard template for monthly project progress reporting.",
    },
    {
      id: "2",
      name: "Financial Summary",
      type: "Financial",
      lastUsed: "2024-04-15",
      description: "Template for quarterly financial reporting.",
    },
    {
      id: "3",
      name: "Inspection Report",
      type: "Inspection",
      lastUsed: "2024-04-10",
      description: "Detailed template for structural and quality inspections.",
    },
    {
      id: "4",
      name: "Environmental Assessment",
      type: "Environmental",
      lastUsed: "2024-03-28",
      description: "Template for environmental impact assessments.",
    },
    {
      id: "5",
      name: "Material Usage Report",
      type: "Materials",
      lastUsed: "2024-03-22",
      description: "Template for tracking material usage across projects.",
    },
    {
      id: "6",
      name: "Safety Incident Report",
      type: "Safety",
      lastUsed: "2024-04-02",
      description: "Template for documenting safety incidents and corrective actions.",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports</h1>
        <Button asChild>
          <Link href="#">
            <Plus className="mr-2 h-4 w-4" />
            Generate Report
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search reports..."
            className="w-full pl-8"
          />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Report Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="progress">Progress</SelectItem>
              <SelectItem value="financial">Financial</SelectItem>
              <SelectItem value="inspection">Inspection</SelectItem>
              <SelectItem value="environmental">Environmental</SelectItem>
              <SelectItem value="materials">Materials</SelectItem>
              <SelectItem value="safety">Safety</SelectItem>
              <SelectItem value="labor">Labor</SelectItem>
              <SelectItem value="vendor">Vendor</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Formats</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="excel">Excel</SelectItem>
              <SelectItem value="powerpoint">PowerPoint</SelectItem>
              <SelectItem value="word">Word</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
        </TabsList>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="hidden md:table-cell">Format</TableHead>
                    <TableHead className="hidden md:table-cell">Created By</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="hidden md:table-cell">Size</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.name}</TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell className="hidden md:table-cell">{report.format}</TableCell>
                      <TableCell className="hidden md:table-cell">{report.createdBy}</TableCell>
                      <TableCell className="hidden md:table-cell">{report.createdAt}</TableCell>
                      <TableCell className="hidden md:table-cell">{report.size}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/dashboard/reports/${report.id}`}>View</Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    {template.name}
                  </CardTitle>
                  <CardDescription>{template.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Last used: {template.lastUsed}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Edit Template
                  </Button>
                  <Button size="sm">
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Reports that are automatically generated on a schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Next Run</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Monthly Progress Summary</TableCell>
                    <TableCell>Monthly</TableCell>
                    <TableCell>May 31, 2024</TableCell>
                    <TableCell>5 recipients</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Weekly Safety Report</TableCell>
                    <TableCell>Weekly</TableCell>
                    <TableCell>May 10, 2024</TableCell>
                    <TableCell>8 recipients</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quarterly Financial Report</TableCell>
                    <TableCell>Quarterly</TableCell>
                    <TableCell>June 30, 2024</TableCell>
                    <TableCell>3 recipients</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Schedule New Report
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Report Generation
            </CardTitle>
            <ArrowDownToLine className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">
              Reports generated this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Most Used Template
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Progress Report</div>
            <p className="text-xs text-muted-foreground">
              Used 42 times this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Report Storage
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 GB</div>
            <p className="text-xs text-muted-foreground">
              Of 5 GB storage used
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
