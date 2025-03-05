import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function getStatusColor(status: string): string {
  switch (status) {
    case "En progreso":
      return "bg-blue-500"
    case "Completado":
      return "bg-green-500"
    case "En planificación":
      return "bg-amber-500"
    case "En pausa":
      return "bg-gray-500"
    default:
      return "bg-gray-300"
  }
}

