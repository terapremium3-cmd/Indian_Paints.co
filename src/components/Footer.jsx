"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Indian Paints. Made with <Heart className="inline-block h-4 w-4 text-primary" /> in India.
        </p>
      </div>
    </footer>
  )
}
