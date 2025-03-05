import Link from "next/link"
import { Building, Filter, Mail, MapPin, Phone, Plus, Search, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClientsPage() {
  // Mock data for clients
  const clients = [
    {
      id: "1",
      name: "Metro Development Corp",
      type: "Corporation",
      location: "Downtown Metro",
      contactPerson: "James Wilson",
      email: "jwilson@metrodev.com",
      phone: "(555) 123-4567",
      projects: 3,
      totalValue: "$42.5M",
      status: "Active",
    },
    {
      id: "2",
      name: "Riverside Ventures",
      type: "LLC",
      location: "Riverside District",
      contactPerson: "Sarah Chen",
      email: "schen@riversideventures.com",
      phone: "(555) 234-5678",
      projects: 1,
      totalValue: "$28.7M",
      status: "Active",
    },
    {
      id: "3",
      name: "Park Living Inc",
      type: "Corporation",
      location: "Central District",
      contactPerson: "Michael Rodriguez",
      email: "mrodriguez@parkliving.com",
      phone: "(555) 345-6789",
      projects: 2,
      totalValue: "$31.8M",
      status: "Active",
    },
    {
      id: "4",
      name: "State Transportation Dept",
      type: "Government",
      location: "State Capital",
      contactPerson: "Jennifer Taylor",
      email: "jtaylor@statetransport.gov",
      phone: "(555) 456-7890",
      projects: 2,
      totalValue: "$92.4M",
      status: "Active",
    },
    {
      id: "5",
      name: "Greenview Properties",
      type: "LLC",
      location: "Business District",
      contactPerson: "David Lee",
      email: "dlee@greenview.com",
      phone: "(555) 567-8901",
      projects: 1,
      totalValue: "$22.8M",
      status: "Active",
    },
    {
      id: "6",
      name: "Sunset Development LLC",
      type: "LLC",
      location: "West Hills",
      contactPerson: "Emily Johnson",
      email: "ejohnson@sunsetdev.com",
      phone: "(555) 678-9012",
      projects: 1,
      totalValue: "$15.4M",
      status: "Active",
    },
    {
      id: "7",
      name: "City Transit Authority",
      type: "Government",
      location: "City Hall",
      contactPerson: "Robert Brown",
      email: "rbrown@citytransit.gov",
      phone: "(555) 789-0123",
      projects: 1,
      totalValue: "$86.3M",
      status: "Active",
    },
    {
      id: "8",
      name: "Regional Healthcare System",
      type: "Non-Profit",
      location: "Lakeside District",
      contactPerson: "Lisa Martinez",
      email: "lmartinez@regionhealth.org",
      phone: "(555) 890-1234",
      projects: 1,
      totalValue: "$64.9M",
      status: "Active",
    },
    {
      id: "9",
      name: "Oakridge Developments",
      type: "Corporation",
      location: "North District",
      contactPerson: "Thomas White",
      email: "twhite@oakridge.com",
      phone: "(555) 901-2345",
      projects: 0,
      totalValue: "$0",
      status: "Inactive",
    },
    {
      id: "10",
      name: "Harbor View Investments",
      type: "LLC",
      location: "Harbor District",
      contactPerson: "Amanda Garcia",
      email: "agarcia@harborview.com",
      phone: "(555) 012-3456",
      projects: 0,
      totalValue: "$0",
      status: "Prospect",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Clients</h1>
        <Button asChild>
          <Link href="#">
            <Plus className="mr-2 h-4 w-4" />
            New Client
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search clients..."
            className="w-full pl-8"
          />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Client Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="corporation">Corporation</SelectItem>
              <SelectItem value="llc">LLC</SelectItem>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="non-profit">Non-Profit</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="prospect">Prospect</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="card">Card View</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact Person</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead className="hidden md:table-cell">Projects</TableHead>
                    <TableHead className="hidden md:table-cell">Total Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">{client.name}</TableCell>
                      <TableCell>{client.type}</TableCell>
                      <TableCell>{client.contactPerson}</TableCell>
                      <TableCell className="hidden md:table-cell">{client.location}</TableCell>
                      <TableCell className="hidden md:table-cell">{client.projects}</TableCell>
                      <TableCell className="hidden md:table-cell">{client.totalValue}</TableCell>
                      <TableCell>
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          client.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : client.status === "Inactive" 
                              ? "bg-gray-100 text-gray-800" 
                              : "bg-blue-100 text-blue-800"
                        }`}>
                          {client.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/dashboard/clients/${client.id}`}>View</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="card" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <Card key={client.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-muted-foreground" />
                    {client.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{client.contactPerson}</p>
                      <p className="text-sm text-muted-foreground">{client.type}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">{client.location}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">{client.email}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">{client.phone}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Projects</p>
                      <p className="font-medium">{client.projects}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Value</p>
                      <p className="font-medium">{client.totalValue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className={`text-sm font-medium ${
                        client.status === "Active" 
                          ? "text-green-600" 
                          : client.status === "Inactive" 
                            ? "text-gray-600" 
                            : "text-blue-600"
                      }`}>
                        {client.status}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/dashboard/clients/${client.id}`}>
                      View Details
                    </Link>
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
