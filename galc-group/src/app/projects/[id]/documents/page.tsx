import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, FileText, Upload, MoreVertical } from "lucide-react"

import { getProjectById } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { use } from "react"

export default function DocumentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  // Documentos de ejemplo
  const documents = [
    {
      id: "1",
      name: "Architectural drawings",
      type: "PDF",
      url: "#",
      uploadDate: "2023-06-20",
      size: 4500000,
    },
    {
      id: "2",
      name: "Detailed budget",
      type: "XLSX",
      url: "#",
      uploadDate: "2023-06-22",
      size: 2100000,
    },
    {
      id: "3",
      name: "Contract with customer",
      type: "PDF",
      url: "#",
      uploadDate: "2023-06-15",
      size: 1800000,
    },
    {
      id: "4",
      name: "Government permits",
      type: "PDF",
      url: "#",
      uploadDate: "2023-07-05",
      size: 3200000,
    },
  ]

  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + " bytes"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Link href={`/projects/${id}`}>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
            <p className="text-muted-foreground mt-1">{project.name}</p>
          </div>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Documents</CardTitle>
          <CardDescription>Archivos y documentación relacionada con el proyecto</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-muted-foreground">
                  <th className="p-4">Name</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Size</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 sr-only">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-t hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <Link href={doc.url} className="hover:underline font-medium">
                          {doc.name}
                        </Link>
                      </div>
                    </td>
                    <td className="p-4">{doc.type}</td>
                    <td className="p-4">{formatFileSize(doc.size)}</td>
                    <td className="p-4">{new Date(doc.uploadDate).toLocaleDateString("es-ES")}</td>
                    <td className="p-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open Menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Download</DropdownMenuItem>
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

