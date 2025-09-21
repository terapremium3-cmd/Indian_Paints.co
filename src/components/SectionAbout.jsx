"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Home, Palette, Package } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Indian Paints</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the paint industry with innovation, quality, and customer satisfaction since decades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Heritage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With over 50 years of experience, we've been transforming homes and commercial spaces across India
                with our premium paint solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Innovation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Constantly innovating with eco-friendly formulations, advanced technology, and trending colors to meet
                modern lifestyle needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every product undergoes rigorous quality testing to ensure durability, coverage, and finish that
                exceeds customer expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
