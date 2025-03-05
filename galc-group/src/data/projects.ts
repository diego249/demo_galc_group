import type { Project } from "@/lib/types"

// Datos de ejemplo para desarrollo
export const projects: Project[] = [
  {
    id: "1",
    name: "Edificio Residencial Aurora",
    description: "Complejo residencial de 5 pisos con 20 apartamentos de lujo",
    squareMeters: 3500,
    type: "Residencial",
    status: "En progreso",
    startDate: "2023-06-15",
    budget: 2500000,
    location: "Av. Principal 123, Ciudad",
    client: "Inversiones Aurora S.A.",
    progress: 65,
  },
  {
    id: "2",
    name: "Centro Comercial Meridiano",
    description: "Centro comercial con 45 locales y área de restaurantes",
    squareMeters: 12000,
    type: "Comercial",
    status: "En planificación",
    startDate: "2023-11-01",
    budget: 8500000,
    location: "Carretera Norte Km 5, Ciudad",
    client: "Grupo Comercial Meridiano",
    progress: 15,
  },
  {
    id: "3",
    name: "Planta Industrial Tecnova",
    description: "Planta de producción con oficinas administrativas",
    squareMeters: 7500,
    type: "Industrial",
    status: "Completado",
    startDate: "2022-03-10",
    endDate: "2023-05-20",
    budget: 4200000,
    location: "Zona Industrial Este, Ciudad",
    client: "Tecnova Industries",
    progress: 100,
  },
  {
    id: "4",
    name: "Puente Río Norte",
    description: "Puente vehicular de 120 metros sobre el río Norte",
    squareMeters: 2200,
    type: "Infraestructura",
    status: "En progreso",
    startDate: "2023-01-15",
    budget: 3800000,
    location: "Río Norte, Ciudad",
    client: "Ministerio de Obras Públicas",
    progress: 45,
  },
  {
    id: "5",
    name: "Residencial Los Pinos",
    description: "Urbanización con 35 casas unifamiliares",
    squareMeters: 15000,
    type: "Residencial",
    status: "En progreso",
    startDate: "2023-04-05",
    budget: 6500000,
    location: "Sector Sur, Ciudad",
    client: "Desarrollos Inmobiliarios S.A.",
    progress: 30,
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getDashboardStats() {
  const totalProjects = projects.length
  const activeProjects = projects.filter((p) => p.status === "En progreso").length
  const completedProjects = projects.filter((p) => p.status === "Completado").length
  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0)
  const totalSquareMeters = projects.reduce((sum, project) => sum + project.squareMeters, 0)

  const projectsByType = projects.reduce(
    (acc, project) => {
      acc[project.type] = (acc[project.type] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const projectsByStatus = projects.reduce(
    (acc, project) => {
      acc[project.status] = (acc[project.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const recentProjects = [...projects]
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .slice(0, 3)

  return {
    totalProjects,
    activeProjects,
    completedProjects,
    totalBudget,
    totalSquareMeters,
    projectsByType,
    projectsByStatus,
    recentProjects,
  }
}

