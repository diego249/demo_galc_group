import { Bell, Search } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar proyectos..."
            className="w-full rounded-md border border-input bg-background pl-8 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-9 px-4 py-2"
          />
        </div>
      </div>
      <Button variant="outline" size="icon" className="rounded-full">
        <Bell className="h-4 w-4" />
        <span className="sr-only">Notificaciones</span>
      </Button>
    </header>
  )
}
