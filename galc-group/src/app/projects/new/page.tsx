"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewProjectPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío de datos
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/projects")
    }, 1500)
  }
  
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/projects">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Nuevo Proyecto</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Información del Proyecto</CardTitle>
          <CardDescription>
            Ingresa los detalles básicos para crear un nuevo proyecto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre del Proyecto
                </label>
                <Input id="name" placeholder="Ej: Edificio Residencial Aurora" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">
                  Tipo de Proyecto
                </label>
                <Select required>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Residencial">Residencial</SelectItem>
                    <SelectItem value="Comercial">Comercial</SelectItem>
                    <SelectItem value="Industrial">Industrial</SelectItem>
                    <SelectItem value="Infraestructura">Infraestructura</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="squareMeters" className="text-sm font-medium">
                  Metros Cuadrados
                </label>
                <Input 
                  id="squareMeters" 
                  type="number" 
                  placeholder="Ej: 3500" 
                  min="1" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium">
                  Presupuesto (USD)
                </label>
                <Input 
                  id="budget" 
                  type="number" 
                  placeholder="Ej: 2500000" 
                  min="1" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="startDate" className="text-sm font-medium">
                  Fecha de Inicio
                </label>
                <Input 
                  id="startDate" 
                  type="date" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-medium">
                  Estado
                </label>
                <Select required>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Selecciona un estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="En planificación">En planificación</SelectItem>
                    <SelectItem value="En progreso">En progreso</SelectItem>
                    <SelectItem value="En pausa">En pausa</SelectItem>
                    <SelectItem value="Completado">Completado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="client" className="text-sm font-medium">
                  Cliente
                </label>
                <Input 
                  id="client" 
                  placeholder="Ej: Inversiones Aurora S.A." 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Ubicación
                </label>
                <Input 
                  id="location" 
                  placeholder="Ej: Av. Principal 123, Ciudad" 
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Descripción
              </label>
              <Textarea 
                id="description" 
                placeholder="Describe el proyecto..." 
                className="min-h-[120px]" 
                required 
              />
            </div>
            
            <div className="flex justify-end gap-4">
              <Link href="/projects">
                <Button variant="outline" type="button">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Guardando..." : "Crear Proyecto"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
