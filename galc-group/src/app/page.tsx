import Link from "next/link"
import { Building2, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Building2 className="h-6 w-6" />
            <span>GALC Group</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="projects" className="text-sm font-medium hover:underline">
              Proyectos
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:underline">
              Contacto
            </Link>
          </nav>
          <Link href="/dashboard">
            <Button>
              Ingresar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Bienvenido a GALC Group
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Soluciones de construcción innovadoras para proyectos residenciales, comerciales e industriales.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg">
                    Acceder al Dashboard
                  </Button>
                </Link>
                <Link href="#contacto">
                  <Button variant="outline" size="lg">
                    Contactar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 GALC Group. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Términos
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
