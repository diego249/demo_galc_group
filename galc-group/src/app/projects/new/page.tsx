"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

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
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/projects">
          <Button variant="outline" size="icon" className="h-10 w-10">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Nuevo Proyecto</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información del Proyecto</CardTitle>
          <CardDescription>Ingresa los detalles básicos para crear un nuevo proyecto</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField id="name" label="Nombre del Proyecto" placeholder="Ej: Edificio Residencial Aurora" required />

              <FormField
                id="type"
                label="Tipo de Proyecto"
                component={
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
                }
              />

              <FormField
                id="squareMeters"
                label="Metros Cuadrados"
                type="number"
                placeholder="Ej: 3500"
                min="1"
                required
              />

              <FormField
                id="budget"
                label="Presupuesto (USD)"
                type="number"
                placeholder="Ej: 2500000"
                min="1"
                required
              />

              <FormField id="startDate" label="Fecha de Inicio" type="date" required />

              <FormField
                id="status"
                label="Estado"
                component={
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
                }
              />

              <FormField id="client" label="Cliente" placeholder="Ej: Inversiones Aurora S.A." required />

              <FormField id="location" label="Ubicación" placeholder="Ej: Av. Principal 123, Ciudad" required />
            </div>

            <FormField
              id="description"
              label="Descripción"
              component={<Textarea placeholder="Describe el proyecto..." className="min-h-[120px]" required />}
            />

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

function FormField({ 
  id, 
  label, 
  component, 
  ...props 
}: { 
  id: string
  label: string
  component?: React.ReactNode // Permite pasar cualquier JSX como componente
} & React.InputHTMLAttributes<HTMLInputElement>) { // Extiende los atributos de un <input>
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      {component ?? <Input id={id} {...props} />} {/* Usa el componente si existe, sino usa <Input> */}
    </div>
  )
}

