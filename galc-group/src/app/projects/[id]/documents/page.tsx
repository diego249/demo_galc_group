import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, FileText, Upload } from 'lucide-react'

import { getProjectById } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DocumentsPageProps {
  params: {
    id: string
  }
}

export default function DocumentsPage({ params }: DocumentsPageProps) {
  const project = getProjectById(params.id)
  
  if (!project) {
    notFound()
  }
  
  // Documentos de ejemplo
  const documents = [
    {
      id: "1",
      name: "Planos arquitectónicos",
      type: "PDF",
      url: "#",
      uploadDate: "2023-06-20",
      size: 4500000,
    },
    {
      id: "2",
      name: "Presupuesto detallado",
      type: "XLSX",
      url: "#",
      uploadDate: "2023-06-22",
      size: 2100000,
    },
    {
      id: "3",
      name: "Contrato con cliente",
      type: "PDF",
      url: "#",
      uploadDate: "2023-06-15",
      size: 1800000,
    },
    {
      id: "4",
      name: "Permisos municipales",
      type: "PDF",
      url: "#",
      uploadDate: "2023-07-05",
      size: 3200000,
    },
  ]
  
  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  }
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={`/projects/${params.id}`}>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Documentos</h1>
          <div className="ml-2 text-muted-foreground">{project.name}</div>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Subir Documento
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Documentos del Proyecto</CardTitle>
          <CardDescription>
            Archivos y documentación relacionada con el proyecto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-12 p-4 text-sm font-medium text-muted-foreground border-b">
              <div className="col-span-6">Nombre</div>
              <div className="col-span-2">Tipo</div>
              <div className="col-span-2">Tamaño</div>
              <div className="col-span-2">Fecha</div>
            </div>
            {documents.map((doc) => (
              <div key={doc.id} className="grid grid-cols-12 p-4 text-sm border-b last:border-0 hover:bg-muted/50">
                <div className="col-span-6 font-medium flex items-center">
                  <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Link href={doc.url} className="hover:underline">
                    {doc.name}
                  </Link>
                </div>
                <div className="col-span-2">{doc.type}</div>
                <div className="col-span-2">{formatFileSize(doc.size)}</div>
                <div className="col-span-2">
                  {new Date(doc.uploadDate).toLocaleDateString('es-ES')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
