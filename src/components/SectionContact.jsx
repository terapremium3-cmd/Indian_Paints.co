"use client"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { Textarea } from "../components/ui/textarea";
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form below and we'll respond promptly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" rows={5} required />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
