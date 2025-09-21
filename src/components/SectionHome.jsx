import { Button } from "./ui/Button";


export default function SectionHome({ scrollToSection }) {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Transform Your Space with <span className="text-primary">Indian Paints</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Discover premium quality paints that bring life to your walls. From vibrant colors to lasting protection,
          we've been India's trusted paint partner for decades.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection("products")}>
            Explore Products
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
