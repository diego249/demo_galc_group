export type ProjectType = "Residencial" | "Comercial" | "Industrial" | "Infraestructura"

export interface Project {
  id: string
  name: string
  description: string
  squareMeters: number
  type: ProjectType
  status: "En planificación" | "En progreso" | "Completado" | "En pausa"
  startDate: string
  endDate?: string
  budget: number
  location: string
  client: string
  documents?: Document[]
  progress: number
}

export interface Document {
  id: string
  name: string
  type: string
  url: string
  uploadDate: string
  size: number
}

export interface DashboardStats {
  totalProjects: number
  activeProjects: number
  completedProjects: number
  totalBudget: number
  totalSquareMeters: number
  projectsByType: Record<ProjectType, number>
  projectsByStatus: Record<string, number>
  recentProjects: Project[]
}

