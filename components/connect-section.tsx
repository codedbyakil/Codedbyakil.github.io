"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Send, Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ConnectSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    const mailtoLink = `mailto:akilaskan@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`
    window.open(mailtoLink)
  }

  return (
    <section id="connect" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating, have a project idea, or just want to
            connect? I&apos;m always open to learning from others and building cool
            things.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <Link
                    href="mailto:akilaskan@gmail.com"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    akilaskan@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Kanyakumari, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/codedbyakil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com/codedbyakil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:akilaskan@gmail.com"
                  className="p-3 rounded-lg border border-border hover:border-accent/50 hover:text-accent transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs text-muted-foreground uppercase tracking-wider">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-card"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs text-muted-foreground uppercase tracking-wider">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-card"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs text-muted-foreground uppercase tracking-wider">
                Your Message
              </Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-card resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full group">
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
