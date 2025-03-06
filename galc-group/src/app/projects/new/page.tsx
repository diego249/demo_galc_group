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
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">New Project</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Info</CardTitle>
          <CardDescription>Enter the basic details to create a new project</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField id="name" label="Project Name" placeholder="Ej: Aurora Residential Building" required />

              <FormField
                id="type"
                label="Project Type"
                component={
                  <Select required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residencial">Residential</SelectItem>
                      <SelectItem value="Comercial">Commercial</SelectItem>
                      <SelectItem value="Industrial">Industrial</SelectItem>
                      <SelectItem value="Infraestructura">Infraestructure</SelectItem>
                    </SelectContent>
                  </Select>
                }
              />

              <FormField
                id="squareMeters"
                label="Square Meters"
                type="number"
                placeholder="Ej: 3500"
                min="1"
                required
              />

              <FormField
                id="budget"
                label="Budget (USD)"
                type="number"
                placeholder="Ej: 2500000"
                min="1"
                required
              />

              <FormField id="startDate" label="Start Date" type="date" required />

              <FormField
                id="status"
                label="Status"
                component={
                  <Select required>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="En planificación">In planning</SelectItem>
                      <SelectItem value="En progreso">In progress</SelectItem>
                      <SelectItem value="En pausa">Paused</SelectItem>
                      <SelectItem value="Completado">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                }
              />

              <FormField id="client" label="Client" placeholder="Ej: Aurora Investments S.A." required />

              <FormField id="location" label="Location" placeholder="Ej: 123 Main Avenue, City" required />
            </div>

            <FormField
              id="description"
              label="Description"
              component={<Textarea placeholder="Describe the project..." className="min-h-[120px]" required />}
            />

            <div className="flex justify-end gap-4">
              <Link href="/projects">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Create Proyect"}
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

