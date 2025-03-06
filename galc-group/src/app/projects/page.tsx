import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { projects } from "@/data/projects"
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Proyectos</h1>
        <Link href="/projects/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Proyecto
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300 group">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                  <div className="text-sm text-muted-foreground">{project.type}</div>
                </div>
                <CardTitle className="mt-2 truncate group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="line-clamp-2 h-10">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Presupuesto</div>
                      <div className="font-medium">{formatCurrency(project.budget)}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Área</div>
                      <div className="font-medium">{project.squareMeters.toLocaleString()} m²</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Inicio</div>
                      <div className="font-medium">{formatDate(project.startDate)}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Cliente</div>
                      <div className="font-medium truncate">{project.client}</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progreso</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

