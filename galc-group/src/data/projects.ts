import type { Project } from "@/lib/types"

// Datos de ejemplo para desarrollo
export const projects: Project[] = [
  {
    id: "1",
    name: "Aurora Residential Building",
    description: "5-story residential complex with 20 luxury apartments",
    squareMeters: 3500,
    type: "Residential",
    status: "In progress",
    startDate: "2023-06-15",
    budget: 2500000,
    location: "123 Main Avenue, City",
    client: "Aurora Investments S.A.",
    progress: 65
},
{
    id: "2",
    name: "Meridiano Shopping Center",
    description: "Shopping center with 45 stores and a restaurant area",
    squareMeters: 12000,
    type: "Commercial",
    status: "In planning",
    startDate: "2023-11-01",
    budget: 8500000,
    location: "North Highway Km 5, City",
    client: "Meridiano Commercial Group",
    progress: 15
},
{
    id: "3",
    name: "Tecnova Industrial Plant",
    description: "Production plant with administrative offices",
    squareMeters: 7500,
    type: "Industrial",
    status: "Completed",
    startDate: "2022-03-10",
    endDate: "2023-05-20",
    budget: 4200000,
    location: "East Industrial Zone, City",
    client: "Tecnova Industries",
    progress: 100
},
{
    id: "4",
    name: "North River Bridge",
    description: "120-meter vehicular bridge over the North River",
    squareMeters: 2200,
    type: "Infraestructure",
    status: "In progress",
    startDate: "2023-01-15",
    budget: 3800000,
    location: "North River, City",
    client: "Ministry of Public Works",
    progress: 45
},
{
    id: "5",
    name: "Los Pinos Residential",
    description: "Residential development with 35 single-family houses",
    squareMeters: 15000,
    type: "Residential",
    status: "In progress",
    startDate: "2023-04-05",
    budget: 6500000,
    location: "South Sector, City",
    client: "Real Estate Developments S.A.",
    progress: 30
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getDashboardStats() {
  const totalProjects = projects.length
  const activeProjects = projects.filter((p) => p.status === "In progress").length
  const completedProjects = projects.filter((p) => p.status === "Completed").length
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

