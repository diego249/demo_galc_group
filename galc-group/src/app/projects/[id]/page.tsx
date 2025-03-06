import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Building2, Calendar, FileText, MapPin, User, DollarSign, Clock, LucideIcon } from "lucide-react"

import { getProjectById } from "@/data/projects"
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { use } from "react"

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Link href="/projects">
            <Button variant="outline" size="icon" className="h-10 w-10">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{project.name}</h1>
            <div
              className={`mt-2 inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
            >
              {project.status}
            </div>
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
              <InfoItem icon={Building2} label="Tipo de Proyecto" value={project.type} />
              <InfoItem icon={MapPin} label="Ubicación" value={project.location} />
              <InfoItem icon={User} label="Cliente" value={project.client} />
              <InfoItem icon={Calendar} label="Fecha de Inicio" value={formatDate(project.startDate)} />
              <InfoItem
                icon={Clock}
                label="Fecha de Finalización"
                value={project.endDate ? formatDate(project.endDate) : "En curso"}
              />
              <InfoItem icon={Building2} label="Área Total" value={`${project.squareMeters.toLocaleString()} m²`} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Presupuesto y Progreso</CardTitle>
            <CardDescription>Estado financiero y avance del proyecto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <InfoItem
              icon={DollarSign}
              label="Presupuesto Total"
              value={formatCurrency(project.budget)}
              valueClassName="text-2xl font-bold"
            />

            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium">Progreso del Proyecto</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-2">Descripción</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function InfoItem({ 
  icon: Icon, 
  label, 
  value, 
  valueClassName = "" 
}: { 
  icon?: LucideIcon; // Especifica que icon es un componente de Lucide
  label: string; 
  value: string | number; 
  valueClassName?: string 
}) {
  return (
    <div>
      <div className="text-sm font-medium text-muted-foreground mb-1">{label}</div>
      <div className={`flex items-center ${valueClassName}`}>
        {Icon && <Icon className="mr-2 h-4 w-4 text-muted-foreground" />} {/* Renderiza solo si existe */}
        <span>{value}</span>
      </div>
    </div>
  )
}

