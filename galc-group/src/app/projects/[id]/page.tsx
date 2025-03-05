import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Building2, Calendar, FileText, MapPin, User } from 'lucide-react'

import { getProjectById } from "@/data/projects"
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/projects">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <div className={`ml-4 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)} text-white`}>
            {project.status}
          </div>
        </div>
        <Link href={`/projects/${project.id}/documents`}>
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Documentos
          </Button>
        </Link>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Información General</CardTitle>
            <CardDescription>Detalles básicos del proyecto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Tipo de Proyecto</div>
                <div className="flex items-center">
                  <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{project.type}</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Área Total</div>
                <div>{project.squareMeters.toLocaleString()} m²</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Fecha de Inicio</div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{formatDate(project.startDate)}</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Fecha de Finalización</div>
                <div>{project.endDate ? formatDate(project.endDate) : "En curso"}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Cliente</div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{project.client}</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Ubicación</div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Presupuesto y Progreso</CardTitle>
            <CardDescription>Estado financiero y avance del proyecto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-1">Presupuesto Total</div>
              <div className="text-2xl font-bold">{formatCurrency(project.budget)}</div>
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-medium">Progreso del Proyecto</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div 
                  className="bg-primary rounded-full h-2.5" 
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="text-sm font-medium mb-2">Descripción</div>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
